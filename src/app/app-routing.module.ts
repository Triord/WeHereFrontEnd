import { EncodageComponent } from './FichePresence/encodage/encodage.component';
import { ListeEmployeComponent } from './Etudiant/liste-user/liste-user.component';
import { MenuComponent } from './FichePresence/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'fichePresence/menu', component: MenuComponent},
{path: 'student/listeStudent', component: ListeEmployeComponent},
{path: 'fichePresence/encodage', component: EncodageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
