import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from 'src/app/services/algorithm.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _algorithmService: AlgorithmService) { }
  listodes = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J"];
  listItems = ["Prims", "kruskal's", "boruvkas"];
  public innerWidth: any;
  public innerHeight: any;

  ngOnInit(): void {
  }
 
reset(map, line, flightPath, edgeLabels): void {
  line.tutorialLineDatas.forEach(element => {
    element.setMap(null);
  });

  if (window.innerHeight > 801) {
    edgeLabels.forEach(element => {
      element.setMap(map);
    });
  }


  
  (document.getElementById('Button') as HTMLInputElement).disabled = false;
  (document.getElementById('ButtonReset') as HTMLInputElement).disabled = true;
  flightPath.setMap(map);
}

generate(map, algortihmChosen, nodeChosen, mapCoordinates, line, flightPath): void {
  const edgeLabelsUsed = [];
  const  reverseLabels = [];
  const coord = [];

  (document.getElementById('Button') as HTMLInputElement).disabled = true;
  this._algorithmService.getResults(algortihmChosen, nodeChosen).subscribe((data) => {
    data.forEach(res => {      
      var chars = [res[0], res[1]];
      reverseLabels.push(res[1] + res[0])
      edgeLabelsUsed.push(res[0] + res[1])
      const coordPair = {};
       mapCoordinates.europeanNodeMarkers.forEach(mark => {
        const isStartingCoord = mark.label === chars[0];
        if(mark.label === chars[0]){
          coordPair['starting'] = {
            lat: mark.position.lat(),
            long: mark.position.lng(),
            marker: mark.label
          };
        }else if(mark.label == chars[1]) {
          coordPair['destination'] = {
            lat: mark.position.lat(),
            long: mark.position.lng(),
            marker: mark.label
          };
        }
       });
       coord.push(coordPair);
    });

    let step = 0;
    const drawLine = () => {
      console.log(coord[step]);
      line.lineDrawer(coord[step], map).then(() => {
        step++;
        if(step < coord.length){
          drawLine();
        }else{
          flightPath.setMap(null);
          mapCoordinates.europeanEdgeLabels.forEach(element => {
              if (!edgeLabelsUsed.includes(element.getTitle())  && !reverseLabels.includes(element.getTitle())){
                element.setMap(null);
                (document.getElementById('ButtonReset') as HTMLInputElement).disabled = false;
            }
          });
        }
      });
  };
  drawLine();
  });
};

}
