import { Utilisateur } from 'src/app/Interfaces/Utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Utilisateur = new Utilisateur();
  constructor(private userS: UtilisateurService) { }

  ngOnInit(){
  }

  addStudent(){
    this.userS.AddStudent(this.student).subscribe((data: any) => {
      console.log(data);
    })
  }
}
