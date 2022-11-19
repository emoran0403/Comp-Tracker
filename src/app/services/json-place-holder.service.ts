import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) {}

  apiURL: string = 'https://jsonplaceholder.typicode.com/';

  getResource(resource: string): Observable<any> {
    console.log(`getting ${resource} - log from jsonplaceholder service`);
    return this.http.get<any>(`${this.apiURL}${resource}`);
  }
}
