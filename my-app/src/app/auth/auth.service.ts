import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser : any;
  public currentUserId: number= 0;

  constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}'); 
      this.currentUserId = this.currentUser;
   }

    onInit() {
    }
    
  isLoggedIn(): boolean {
    console.log(localStorage.getItem('currentUser'));
    return !!localStorage.getItem('currentUser');
  }
}
 