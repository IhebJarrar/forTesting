import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the ActualiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActualiteProvider {
  private baseUrl = 'https://epichallange-82c39.firebaseio.com/';
  constructor(public http: HttpClient) {
  }

  getActus(): Observable<any> {
    return this.http.get(this.baseUrl + 'actualite.json').map(data => {
      return data;
    })
  }

  getActu(actuId): Observable<any> {
    return this.http.get(this.baseUrl + 'actualite/' + actuId + '.json');
  }

}
