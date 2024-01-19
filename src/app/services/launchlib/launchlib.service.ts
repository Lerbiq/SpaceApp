import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IOTD} from "../../models/iotd";
import {environment} from "../../../environments/environment";
import {Launches} from "../../models/launches";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LaunchlibService {
  constructor(private http: HttpClient) { }

  getUpcoming$(limit?: number){
    if(typeof limit === undefined){
      limit = 20;
    }

    const dateTime: string = new Date().toISOString().slice(0, 19)+'Z';
    return this.http.get<Launches>(`${environment.launchLibUrl}/2.2.0/launch/upcoming?window_start__gte=${dateTime}&limit=${limit}`);
  }
}
