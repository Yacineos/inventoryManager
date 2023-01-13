import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private rootComponent:AppComponent) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }
}
