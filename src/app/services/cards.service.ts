import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
private baseurl="https://sheetdb.io/api/v1/yu73571tgvpod";
  constructor(private Http:HttpClient) { }
  public insertion():Observable<Cards[]> {
    return this.Http.get<Cards[]>(`${this.baseurl}`);
  }
}
