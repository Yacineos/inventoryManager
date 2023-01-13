import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  constructor(private rootComponent:AppComponent) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }
}
