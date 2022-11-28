import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {MatModule} from "../mat/mat.module";
import {RouterModule} from "@angular/router";
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [HeaderComponent, CardComponent, CardDetailComponent],
  imports: [
    CommonModule,
    MatModule,
    RouterModule
  ],
    exports:
        [HeaderComponent, CardComponent]
})
export class CoreModule { }
