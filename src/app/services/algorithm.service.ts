import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Algorithm } from '../common/algorithm';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  private baseUrl = "https://msp-visualiser-backend.herokuapp.com/"; 

  constructor(private httpClient: HttpClient) { }

  getResults(algorithm: String, startingEdge: String): Observable<Algorithm[]> {
    if (algorithm === 'Prims') {
      const primUrl = `${this.baseUrl}prim?startingEdge=${startingEdge}`;
      return this.httpClient.get<Algorithm[]>(primUrl);
    } else {
      //kruskals and boruvkas
      return this.httpClient.get<Algorithm[]>(`${this.baseUrl}${algorithm}`);
    }
  }
}


interface GetResponsePrims {
  algorithms: Algorithm[];
}
