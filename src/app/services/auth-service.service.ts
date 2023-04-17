import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  baseURl = 'https://dummyjson.com';

  login(username: string, password: string) {
   return this.http.post(
      `${this.baseURl}/auth/login`,
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
