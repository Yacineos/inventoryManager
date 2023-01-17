import { Component } from '@angular/core';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {

  constructor(private inventoryComponent:InventoryComponent) {
    
   }
  cancelDelete(){
    this.inventoryComponent.showDeleteConfirmation = false;
  }
}
