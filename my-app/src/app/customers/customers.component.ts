import { Component, ElementRef, Renderer2,Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  showAddCostumer: boolean = false;
  constructor(private rootComponent:AppComponent,private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.showAddCostumer = false;
  }
  onAddCostumer() {
    this.showAddCostumer = true;
    this.renderer.addClass(document.body, 'backdrop-blur');
  }
  onCancelAddCostumer() {
    this.showAddCostumer = false;
    this.renderer.removeClass(document.body, 'backdrop-blur');
  }
}
