import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommandeService } from '../sell/commande/commande.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  statistics: number[] = [];
  constructor(private rootComponent:AppComponent , private commandeService: CommandeService) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.commandeService.getStatistics().subscribe(
      data => {
        this.statistics = data;
      }
    );
  }
}
