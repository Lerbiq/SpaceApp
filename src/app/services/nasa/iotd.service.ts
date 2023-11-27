import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IOTD} from "../../models/iotd";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IotdService {
  detail?: IOTD;

  constructor(private http: HttpClient) { }

  get$() {
    let response = this.http.get<IOTD>(`${environment.nasaBaseUrl}/planetary/apod?thumbs=true&api_key=${environment.nasaKey}`);
    response.subscribe(val => console.log(val));
    return response;
  }
}
