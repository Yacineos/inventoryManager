import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private authService:AuthService,private router :Router ) { }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.authService.currentUser = null;
    this.authService.currentUserId = 0;
    console.log(this.authService.currentUser);
    this.router.navigate(['/']);
  }

}
