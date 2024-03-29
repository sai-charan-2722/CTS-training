import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpClient = inject(HttpClient);

  getUsers():Observable<any>{
    return this.httpClient.get<any>("https://reqres.in/api/users?page=2");
  }
}
