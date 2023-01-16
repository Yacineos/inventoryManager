import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  
  constructor(private rootComponent:AppComponent) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }
 
}
