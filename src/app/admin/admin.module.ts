import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireAnnonceAdminComponent } from './formulaire-annonce-admin/formulaire-annonce-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [
    FormulaireAnnonceAdminComponent,

  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
