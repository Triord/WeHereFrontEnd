import { ClasseServiceService } from './../../Service/classe-service.service';
import { Utilisateur } from './../../Interfaces/Utilisateur';
import { UtilisateurService } from './../../Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeEmployeComponent implements OnInit {

  student: Utilisateur[] =[];
  constructor(private userS: UtilisateurService, private classeS: ClasseServiceService) { }

  ngOnInit(){
    this.allUser();
  }
  allUser(){
    this.userS.getAllStudent().subscribe((data: Utilisateur[]) => {
      this.student = data;
      this.student.forEach(stu => {
      console.log(stu)
      if (typeof stu === 'number') {
       this.userS.getOneUser(stu).subscribe((data2: Utilisateur) => {
         this.student.push(data2);
         if (data2.classe !== undefined) {
          console.log(data2.classe)
          this.classeS.getOneClasse(data2?.classe).subscribe((data3: any) => {
           console.log(data3)
           data2.classe = data3;
         })
        }

       })

      }

      if (stu.classe !== undefined) {
        console.log(stu.classe)
        this.classeS.getOneClasse(stu?.classe).subscribe((data3: any) => {
         console.log(data3)
         stu.classe = data3;
       })
      }

      });

    })

  }

}
