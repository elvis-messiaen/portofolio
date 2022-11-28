import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatModule} from "./mat/mat.module";
import {CoreModule} from "./component/core.module";
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EnteteComponent } from './perso/entete/entete.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormulaireComponent } from './perso/formulaire/formulaire.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnteteComponent,
    FormulaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    NgxExtendedPdfViewerModule
  ],
  exports:
  [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
