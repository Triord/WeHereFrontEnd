import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/Interfaces/Classe';
import { Cours } from 'src/app/Interfaces/Cours';
import { FichePresence } from 'src/app/Interfaces/FichePresence';
import { Utilisateur } from 'src/app/Interfaces/Utilisateur';
import { ClasseServiceService } from 'src/app/Service/classe-service.service';
import { CourServiceService } from 'src/app/Service/cour-service.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  classe: Classe[];
  buttons = Array(30).fill(false);
  cours: Cours[];
  classeSelec: Classe = new Classe();
  student: Utilisateur[];
  oneStudent: Utilisateur;
  cl:Classe[];
  fp: FichePresence = new FichePresence();
  ifDA: boolean;
  cour: Cours = new Cours();
  fiches: FichePresence[]= [];
  constructor(private userS: UtilisateurService, private classeS: ClasseServiceService,
    private courS: CourServiceService) { }

  ngOnInit(){
    this.getAllClasse();
    this.getAllCours();
  }

  getAllClasse(){
    this.classeS.getAllClasse().subscribe((data: any) => {
      this.classe = data;
      this.classe.forEach(c => {
        if (typeof c === 'number') {
          this.classeS.getOneClasse(c).subscribe((data2: any) => {
            this.classe.push(data2);
          })
        }
      });
      console.log(this.classe)

    })
  }

  getAllCours(){
    this.courS.getAllCours().subscribe((dataCours: any) => {
      console.log(dataCours)
      this.cours = dataCours;
      this.cours.forEach(cour => {
        if (typeof cour === 'number') {
          this.courS.getOneCour(cour).subscribe((dataCour: any) => {
            this.cours.push(dataCour);
          })

        }
      });
      console.log(this.cours)
    })


  }
  getFFiche(){
    const inputEl: HTMLInputElement = document.getElementById('inputClasse') as HTMLInputElement;
    const classe: string = inputEl.value;
    const inputEl2: HTMLInputElement = document.getElementById('inputHour') as HTMLInputElement;
    const heureCours: string = inputEl2.value;
    const inputEl3: HTMLInputElement = document.getElementById('inputCour') as HTMLInputElement;
    const nomCours: string = inputEl3.value;
    const inputEl4: HTMLInputElement = document.getElementById('dateF') as HTMLInputElement;
    const dateJourPresence: string = inputEl4.value;
   // console.log('la classe selec est',classe,'le cours est', cour,' l heure de cours est ',hour)
    const annee = classe.slice(0,1);
    const nomSection = classe.slice(1,6);

    this.userS.getFicheByParams(heureCours, annee, nomSection, nomCours, dateJourPresence).subscribe((dataFiche: any) => {

      this.fiches = dataFiche;

      this.fiches.forEach(f => {
        if (typeof f === 'number') {
          this.userS.getOneFiche(f).subscribe((dataOneFiche: any) =>{
            this.fiches.push(dataOneFiche);
          })
        }
      });
      console.log(this.fiches)
    })
  }
}
