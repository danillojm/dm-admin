import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Shopping } from "../model/shopping-model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  baseUrl = " http://localhost:3000/shopping"

  constructor(private http: HttpClient) { }



  getShopping(): Observable<Shopping[]> {
    return this.http.get<Shopping[]>(this.baseUrl)
  }

  insert(shopping: Shopping) {
    return this.http.post(this.baseUrl, shopping)
  }

}
