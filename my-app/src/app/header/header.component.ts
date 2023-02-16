import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUserName: string = '';
  constructor(private authService:AuthService) {
    this.currentUserName = this.authService.currentUserName;
   }

  ngOnInit(): void {
    this.currentUserName = this.authService.currentUserName;
  }
}
 