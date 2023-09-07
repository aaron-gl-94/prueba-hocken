import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { v4 as uuid } from 'uuid';

import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/users.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl:string = environment.apiUrl;
  public currentUser:User = {
    id: '',
    email: '',
    username: '',
    role: 'user'
  };

  constructor(private http:HttpClient, private router:Router ) {}

  get getToken() {
    return localStorage.getItem('auth_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('auth_token');
    console.log('- isLoggedIn: ', authToken);
    
    return authToken !== null;
  }

  login(user: User) {
    return this.http.get(`${this.apiUrl}/users/?email=${user.email}&password=${user.password}`)
      .pipe(
        tap((response: any) => {

          if (!response) return;
          
          const { email, id, role, username } = response[0];

          if (email) {
            localStorage.setItem('auth_token', uuid());

            this.currentUser = {id, email, username, role}
          }
        })
      );
  }

  logout() {
    if (localStorage.removeItem('auth_token') == null) this.router.navigate(['login']);
  }
}