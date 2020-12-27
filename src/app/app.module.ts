import { MaterialModule } from './material/material.module';
import { MenuComponent } from './FichePresence/menu/menu.component';
import { ListeEmployeComponent } from './Etudiant/liste-user/liste-user.component';
import { UtilisateurService } from './Service/utilisateur.service';
import { CourServiceService } from './Service/cour-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AffichageComponent } from './FichePresence/affichage/affichage.component';
import { EncodageComponent } from './FichePresence/encodage/encodage.component';
import { ModificationComponent } from './FichePresence/modification/modification.component';
import { ClasseServiceService } from './Service/classe-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatCard, MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    EncodageComponent,
    ModificationComponent,
    ListeEmployeComponent,
    MenuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    ClasseServiceService,
    CourServiceService,
    UtilisateurService,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
