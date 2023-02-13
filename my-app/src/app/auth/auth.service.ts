import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    console.log(localStorage.getItem('currentUser'));
    return !!localStorage.getItem('currentUser');
  }
}
 