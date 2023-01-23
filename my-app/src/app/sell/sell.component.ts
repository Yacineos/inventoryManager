import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  constructor(private rootComponent:AppComponent) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }

}
