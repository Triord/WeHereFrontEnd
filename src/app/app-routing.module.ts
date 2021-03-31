import { AddEducatorComponent } from './Admin/add-educator/add-educator.component';
import { AddProfessorComponent } from './Admin/add-professor/add-professor.component';
import { AddStudentComponent } from './Admin/add-student/add-student.component';
import { PanelComponent } from './Admin/panel/panel.component';
import { AffichageComponent } from './FichePresence/affichage/affichage.component';
import { EncodageComponent } from './FichePresence/encodage/encodage.component';
import { ListeEmployeComponent } from './Etudiant/liste-user/liste-user.component';
import { MenuComponent } from './FichePresence/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path: 'fichePresence/menu', component: MenuComponent},
{path: 'student/listeStudent', component: ListeEmployeComponent},
{path: 'fichePresence/encodage', component: EncodageComponent},
{path: 'fichePresence/affichage', component: AffichageComponent},
{path: 'login', component: LoginComponent },
{path: 'admin/panel', component: PanelComponent},
{path: 'admin/add-student', component: AddStudentComponent},
{path: 'admin/add-professor', component: AddProfessorComponent},
{path: 'admin/add-educator', component: AddEducatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
