import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http:HttpClient) { }

  getDetails() {
    return this.http.get("http://api.open-notify.org/astros.json");
  }
}
