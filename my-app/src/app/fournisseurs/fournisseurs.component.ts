import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent {

  constructor(private rootComponent:AppComponent ) { }
  
  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
  }
}
