import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AfspraakComponent } from './afspraak/afspraak.component';
import { BehandelingenComponent } from './behandelingen/behandelingen.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'afspraak', component: AfspraakComponent },
  { path: 'behandelingen', component: BehandelingenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
