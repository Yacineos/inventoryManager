import { Component } from '@angular/core';
import { CommandeService } from '../commande/commande.service';
import { ContientService } from '../contient/contient.service';
import { SellComponent } from '../sell.component';
import { Commande } from '../commande/commande';
import { Customer } from 'src/app/customers/customer';
import { CustomerService } from 'src/app/customers/customer.service';
import { Contient } from '../contient/contient';
import { InventoryService } from 'src/app/inventory/inventory.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selectedClientId: number = 12; // id of anonym client
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


  constructor(private inventoryService:InventoryService,private customerService:CustomerService,private commandeService:CommandeService,private contientService:ContientService , private sellComponent:SellComponent) { }

  ngOnInit() {
    this.commandeService.getLastId().subscribe(data => {
      // récupération de l'id de la commande en cours
      this.commande.id_commande = data;
      this.commandeService.getIdClient(data).subscribe(data => {
        this.selectedClientId = data;
        console.log(this.selectedClientId);
      });
    });
    
  }
  abandonnerCommande(){
    this.commandeService.getLastId().subscribe(data => {
      this.contientService.deleteContientByIdCommande(data);
      this.commande.id_client=1 ; // id of anonym client
    }
    );
  }
  validateCommande(){
    
      this.contientService.findNbElementByIdCommande(this.commande.id_commande).subscribe(data => {
        // vérification si le panier est vide
        if(data == 0){
          alert("Votre panier est vide");
        }
        else{
          const currentUserIdString = localStorage.getItem('currentUser'); // récupération de l'id de l'employé connecté
            if (currentUserIdString) {
              this.commande.idE = parseInt(currentUserIdString.replace(/"/g, ''), 10); // conversion de l'id de l'employé connecté en int
              console.log(this.commande.idE);
              //récupération du client sélectionné
              this.commande.id_client = this.selectedClientId;
              this.commandeService.updateCommande(this.commande).subscribe(data => {
                // mise à jour de la commande
                console.log(data);
                console.log("update stock :")
                this.contientService.getContientByIdCommande(this.commande.id_commande).subscribe(data => {
                  this.updateStock(data);
                  console.log("update stock done")
                this.commandeService.addCommande(this.commande.idE,this.commande.id_client).subscribe(data => {
                  // création d'une nouvelle commande
                  console.log(data);
                  this.selectedClientId= 17; // id of anonym client
                 //window.location.reload();
                });
                });
                
              });
              
            } else {
              console.error('currentUser is null or undefined');
            }
          

        }
      }
      );
}

searchClient(){
  if(this.searchInput == "" || this.searchInput == null || 0){
    this.customerService.getCustomers().subscribe(data => {
      this.clients = data;
    }
    );
  }else{
    this.customerService.findCustomersByIdOrPhone(this.searchInput).subscribe(data => {
      this.clients = data;
    }
    );
  }
}

change(){
  console.log(this.selectedClientId);
  this.commande.id_client = this.selectedClientId;
  console.log(this.commande);
}

showAjouterProduit(){
  this.sellComponent.showAddProduit = true;
}

updateStock(contients:Contient[]){
    let i = 0;
    while(i<contients.length){
      console.log("update stock : "+this)
      this.inventoryService.updateQteProduct(contients[i].id.idProduit,contients[i].qte_produit);
        i++;
    }
  }
}
