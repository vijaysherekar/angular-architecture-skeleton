import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './http-options'

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }


  get(url: string, options = httpOptions) {

    return this.http.get(url, options);
  }
}
