import { Component } from '@angular/core';
import { CommandeService } from '../commande/commande.service';
import { ContientService } from '../contient/contient.service';
import { SellComponent } from '../sell.component';
import { Commande } from '../commande/commande';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  commande: Commande = {
    id_commande: 0,
    date_commande: new Date(),
    id_client: 1,
    idE: 0,
  };

  constructor(private sellComponent:SellComponent,private commandeService:CommandeService,private contientService:ContientService) { }

  ngOnInit() {
  }
  abandonnerCommande(){
    this.commandeService.getLastId().subscribe(data => {
      this.contientService.deleteContientByIdCommande(data);
      this.commande.id_client=1 ; // id of anonym client
    }
    );
  }
  validateCommande(){
    this.commandeService.getLastId().subscribe(data => {
      this.contientService.findNbElementByIdCommande(data).subscribe(data => {
        if(data == 0){
          alert("Votre panier est vide");
        }
        else{
          this.commande.id_client=1;

          //this.commandeService.addCommande();
        }
      }
      );
  }
  );
}

}
