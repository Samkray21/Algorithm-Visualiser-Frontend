import { Component, OnInit, Output, TypeProvider, HostListener } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Algorithm } from 'src/app/common/algorithm.js';
import { Coordinate } from 'src/app/common/coordinate.js';
import { LineDrawerComponent } from '../line-drawer/line-drawer/line-drawer.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  providers: [LineDrawerComponent, ToolbarComponent]
})

export class GoogleMapsComponent implements AfterViewInit {

  constructor(private _line: LineDrawerComponent,
    private _toolbar: ToolbarComponent) { }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  listNodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  listItems = ["Prims", "Kruskal's", "Boruvkas"];
  mapCoordinates = Coordinate; 
  algorithms: Algorithm[] = [];
  nodeChosen = '';
  algorithmChosen = '';
  public innerWidth: any;
  public innerHeight: any;

  flightPath = new google.maps.Polyline({
    path: this.mapCoordinates.flightPlanCoordinates,
    geodesic: false,
    strokeColor: "FFFF00",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.innerHeight);
    console.log(this.innerWidth);

     if(this.innerWidth < 496 || this.innerHeight < 387){
      this.map.setZoom(3);
      console.log("496 inner width")
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
                element.setMap(null);
      });  
    } else if ((this.innerHeight < 802 || this.innerWidth < 961)) {
      this.map.setZoom(4);
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
                element.setMap(null);
      });  
    }else{
      this.map.setZoom(5);
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
        element.setMap(this.map);
});

    }

  }


  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.innerWidth);
    console.log(this.innerHeight);

    this.mapInitializer();
    this.mapCoordinates.europeanEdgeLabels;
    (document.getElementById('ButtonReset') as HTMLInputElement).disabled = true;
    (document.getElementById('Button') as HTMLInputElement).disabled = true;
    (document.getElementById('node-select') as HTMLInputElement).disabled = true;

    if(this.innerWidth < 496 || this.innerHeight < 387){
      this.map.setZoom(3);
      console.log("496 inner width")
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
                element.setMap(null);
      });  
    } else if ((this.innerHeight < 802 || this.innerWidth < 961)) {
      this.map.setZoom(4);
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
                element.setMap(null);
      });  
    }else{
      this.map.setZoom(5);
      this.mapCoordinates.europeanEdgeLabels.forEach(element => {
        element.setMap(this.map);
});

    }
  }

  reset(): void {
    (document.getElementById('algo-select') as HTMLInputElement).disabled = false;
    if(this.algorithmChosen != "Prims"){
      (document.getElementById('node-select') as HTMLInputElement).disabled = true;
    }else{
      (document.getElementById('node-select') as HTMLInputElement).disabled = false;
    }
    this._toolbar.reset(this.map, this._line, this.flightPath, this.mapCoordinates.europeanEdgeLabels)
  }

  generate(): void {
    (document.getElementById('node-select') as HTMLInputElement).disabled = true;
    (document.getElementById('algo-select') as HTMLInputElement).disabled = true;
    this._toolbar.generate(this.map, this.algorithmChosen, this.nodeChosen, this.mapCoordinates, this._line, this.flightPath);
  }

  loadAllMarkers(): void {
    this.mapCoordinates.europeanNodeMarkers.forEach(markerInfo => {

      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      markerInfo.map = this.map;

      //Adding marker to google map
      marker.setMap(this.map);
    });

    this.mapCoordinates.europeanEdgeLabels.forEach(markerInfo => {

      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      markerInfo.setMap(this.map);

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  mapInitializer(): void {
    var removeLabels = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]

    var mapOptions: google.maps.MapOptions = {
      center: new google.maps.LatLng(48.882891, 7.602246),
      gestureHandling: 'none',
      zoomControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: 5
    };

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    //Adding other markers
    this.loadAllMarkers();

    this.map.set('styles', removeLabels);
    this.flightPath.setMap(this.map);
  }

  public valueChange(value: any): void {
    console.log('valueChange', value);
    if (value === "Prims" && this.nodeChosen === "") {
      (document.getElementById('node-select') as HTMLInputElement).disabled = false;
      (document.getElementById('Button') as HTMLInputElement).disabled = true;
    }else if (value === "Prims" && this.nodeChosen != "") {
      (document.getElementById('node-select') as HTMLInputElement).disabled = false;
      (document.getElementById('Button') as HTMLInputElement).disabled = false;
    }else if (value === "") {
      (document.getElementById('node-select') as HTMLInputElement).disabled = true;
      (document.getElementById('node-select') as HTMLInputElement).value = "";
      (document.getElementById('Button') as HTMLInputElement).disabled = true;
      this.nodeChosen = "";
    } else {
      (document.getElementById('node-select') as HTMLInputElement).value = "";
      (document.getElementById('node-select') as HTMLInputElement).disabled = true;
      (document.getElementById('Button') as HTMLInputElement).disabled = false;
      this.nodeChosen = "";
    }
    this.algorithmChosen = value;
  }

  public valueChangeNode(value: any): void {
    if (value === "") {
      (document.getElementById('Button') as HTMLInputElement).disabled = true;
    } else {
      (document.getElementById('Button') as HTMLInputElement).disabled = false;
    }
    this.nodeChosen = value;
  }

}
