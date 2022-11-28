import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FormulaireComponent} from "./perso/formulaire/formulaire.component";

const routes: Routes = [
  { path: 'admin', loadChildren: () => import ('./admin/admin.module').then (m => m.AdminModule) },
  { path: 'produits',loadChildren: () => import ('./produits/produits.module').then (m => m.ProduitsModule) },
  { path: 'accueil', component: HomeComponent},
  { path: 'formulaire', component: FormulaireComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
