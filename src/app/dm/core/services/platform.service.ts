import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Platform } from "../model/platform-model";

@Injectable({
  providedIn: 'root'
})
export class PlatformService {


  baseUrl = "http://localhost:3000/platform"

  constructor(private http: HttpClient) {

  }


  getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.baseUrl)
  }
}
