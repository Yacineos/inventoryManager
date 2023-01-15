import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn=false;
  title = 'my-app';
  constructor(private renderer: Renderer2, private el: ElementRef) { 
    this.renderer = renderer;
    this.el = el;
  }
  getRenderer() {
    return this.renderer;
  }
  getEl() {
    return this.el;
  }
}
 