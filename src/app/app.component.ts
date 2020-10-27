import { Component } from '@angular/core';
import { AlgorithmService } from './services/algorithm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

constructor(private _algorithmService: AlgorithmService) { }

  title = 'AlgoFrontEnd';

  ngOnInit(): void {
  this._algorithmService.getResults("Prims", "A").subscribe((data) => {
    data.forEach(res => {      
      console.log("Data" + data)
  });
});
  }
  

}
