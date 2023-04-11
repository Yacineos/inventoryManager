import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommandeService } from './commande/commande.service';
import { ContientService } from './contient/contient.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  showAddProduit = false;
  constructor(private rootComponent:AppComponent , private commandeService:CommandeService, private contientService:ContientService) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }

  

}
