import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Interfaces/Utilisateur';

@Component({
  selector: 'app-add-educator',
  templateUrl: './add-educator.component.html',
  styleUrls: ['./add-educator.component.css']
})
export class AddEducatorComponent implements OnInit {
  educator: Utilisateur = new Utilisateur();
  constructor(private userS: UtilisateurService) { }

  ngOnInit(){
  }
  addEducator(){

    this.userS.AddEducator(this.educator).subscribe((data: any) => {
      console.log(data);
    })
  }
}
