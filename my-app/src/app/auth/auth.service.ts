import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser : any;
  public currentUserName: string= '';

  constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}'); 
      this.currentUserName = this.currentUser.username;
   }

    onInit() {
    }
    
  isLoggedIn(): boolean {
    console.log(localStorage.getItem('currentUser'));
    return !!localStorage.getItem('currentUser');
  }
}
 