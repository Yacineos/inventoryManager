import { Component } from '@angular/core';
import { CommandeService } from '../commande/commande.service';
import { ContientService } from '../contient/contient.service';
import { SellComponent } from '../sell.component';
import { Commande } from '../commande/commande';
import { Customer } from 'src/app/customers/customer';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selectedClientId: number = 0;
  searchInput: string = '';
  commande: Commande = {
    id_commande: 0,
    date_commande: new Date(),
    id_client: 1,
    idE: 0,
  };
  client: Customer = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    nTel: 0,
    numRue: 0,
    nomRue: '',
    codePostal: 0,
    ville: '',
  };

  clients:Customer[]=[];

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
          const currentUserIdString = localStorage.getItem('currentUser');
            if (currentUserIdString) {
              this.commande.idE = parseInt(currentUserIdString.replace(/"/g, ''), 10);
                  console.log(this.commande.idE);
            } else {
              console.error('currentUser is null or undefined');
              }
          this.commandeService.addCommande(this.commande.idE).subscribe(data => {
            console.log(data);
            window.location.reload();
          });

        }
      }
      );
  }
  );
}

searchClient(){

}

change(){}
}
