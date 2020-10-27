import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-drawer',
  templateUrl: './line-drawer.component.html',
  styleUrls: ['./line-drawer.component.css']
})
export class LineDrawerComponent implements OnInit {

  constructor() { }

  tutorialLineDatas = [];

  ngOnInit(): void {
  }

  lineDrawer(coords, map){
    return new Promise((resolve, reject) => {
      const arrivalCoord = coords.starting;
      const departureCoord = coords.destination;
  
      var departure = new google.maps.LatLng(departureCoord.lat, departureCoord.long); //Set to whatever lat/lng you need for your departure location
      var arrival = new google.maps.LatLng(arrivalCoord.lat, arrivalCoord.long); //Set to whatever lat/lng you need for your arrival location
      var line = new google.maps.Polyline({
          path: [departure, departure],
          strokeColor: "FFFF00",
          strokeOpacity: 1,
          strokeWeight: 10,
          geodesic: false, //set to false if you want straight line instead of arc
          map: map,
      });
  
      var step = 0;
      var numSteps = 250; //Change this to set animation resolution
      var timePerStep = 5; //Change this to alter animation speed
  
      var interval = setInterval(() => {
          step += 1;
          if (step > numSteps) {
              clearInterval(interval);
              resolve();
          } else {
              var are_we_there_yet = google.maps.geometry.spherical.interpolate(departure,arrival,step/numSteps);
              line.setPath([departure, are_we_there_yet]);
              this.tutorialLineDatas.push(line);  
          }
      }, timePerStep);
    });
  };
  
}
