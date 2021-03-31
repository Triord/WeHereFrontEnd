import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Interfaces/Utilisateur';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
  professor: Utilisateur = new Utilisateur();
  constructor(private userS: UtilisateurService) { }

  ngOnInit(){
  }
  addEducator(){

    this.userS.AddProfessor(this.professor).subscribe((data: any) => {
      console.log(data);
    })
  }
}
