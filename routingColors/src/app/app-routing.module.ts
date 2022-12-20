import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenComponent } from './green/green.component';
import { HomeComponent } from './home/home.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'red', component:RedComponent },
  {path: 'green', component: GreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
