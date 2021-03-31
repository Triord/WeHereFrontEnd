import { CourServiceService } from './../../Service/cour-service.service';
import { FichePresence } from './../../Interfaces/FichePresence';
import { ClasseServiceService } from './../../Service/classe-service.service';
import { UtilisateurService } from './../../Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/Interfaces/Classe';
import { Utilisateur } from 'src/app/Interfaces/Utilisateur';
import { Cours } from 'src/app/Interfaces/Cours';
import * as moment from 'moment';


@Component({
  selector: 'app-encodage',
  templateUrl: './encodage.component.html',
  styleUrls: ['./encodage.component.css']
})
export class EncodageComponent implements OnInit {
  classe: Classe[];
  buttons = Array(30).fill(false);
  cours: Cours[];
  classeSelec: Classe = new Classe();
  student: Utilisateur[];
  oneStudent: Utilisateur;
  cl:Classe[];
  fiches: FichePresence[] = [];
  fp: FichePresence = new FichePresence();
  ifDA: boolean;
  dateVerif: Date = new Date();
  cour: Cours = new Cours();
  constructor(private userS: UtilisateurService, private classeS: ClasseServiceService,
    private courS: CourServiceService) { }

  ngOnInit(){
    this.getAllClasse();
    this.getAllCours();
  }
  getAllStudent(){
    const inputEl: HTMLInputElement = document.getElementById('inputClasse') as HTMLInputElement;
    const inputValue: string = inputEl.value;
    const annee = inputValue.slice(0,1);
    const nomSection = inputValue.slice(1,6);
    console.log('annee:',annee,'nom de la section',nomSection);
    this.userS.getAllStudentByClass(annee,nomSection).subscribe((dataStudent: any) => {
      this.student = dataStudent;
      this.student.forEach(st => {
        if (typeof st === 'number') {
          this.userS.getOneUser(st).subscribe((data3: any) => {
            this.student.push(data3)
          })
        }
      });
      console.log(this.student)
    })
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
  onPresent(index: number){
    // console.log(this.student)
    // console.log(index)
    this.oneStudent = this.student[index];
    // console.log(this.oneStudent)
    const inputEl: HTMLInputElement = document.getElementById('inputClasse') as HTMLInputElement;
    const classe: string = inputEl.value;
    const inputEl2: HTMLInputElement = document.getElementById('inputHour') as HTMLInputElement;
    const hour: string = inputEl2.value;
    const inputEl3: HTMLInputElement = document.getElementById('inputCour') as HTMLInputElement;
    const cour: string = inputEl3.value;
   // console.log('la classe selec est',classe,'le cours est', cour,' l heure de cours est ',hour)
    const annee = classe.slice(0,1);
    const nomSection = classe.slice(1,6);
    this.classeS.getClasseByParams(annee,nomSection).subscribe((dataClasse: any) => {

      this.courS.getCourByParam(cour).subscribe((dataCourGet: any) => {
        this.cour = dataCourGet;




    this.classeSelec = dataClasse;
    const postData = new FichePresence();
    postData.idFichePresence = this.fp.idFichePresence;
    postData.statusPresence = this.oneStudent.presenceEleve.statusPresence;
    postData.statusSupplementaire = this.oneStudent.presenceEleve.statusSupplementaire;
    postData.dateJourPresence = null;
    postData.heureCours = hour;
    postData.raison = this.fp.raison; //{SERA FAIS PLUS TARD} encore a set dans le front => fichePresence => encodage => html

    postData.eleveFp ={
      idUtilisateur : this.oneStudent.idUtilisateur,
      nom : this.oneStudent.nom,
      prenom : this.oneStudent.prenom,
      ddn : this.oneStudent.ddn,
      adresse : this.oneStudent.adresse ,
      numTel : this.oneStudent.numTel,
      coursRecu : null,
      coursDonner : null,
      presenceEleve : null,
      profDeLaFiche : null,
      classe : null,
      email: this.oneStudent.email,
      mdp: this.oneStudent.mdp
    };

    postData.professeurFp = null; // encore a set dans le backend => service => FichePresence(sera le user logged)

    postData.classeFp = {
      idClasse : this.classeSelec.idClasse,
      annee : this.classeSelec.annee,
      nomSection : this.classeSelec.nomSection,
      eleveClasse : null
    };


    postData.coursFp = {
      idCours : this.cour.idCours,
      nomCours : this.cour.nomCours,
      coursDeLaFiche : null,
      classeDeLaFiche : null,
      eleve : null,
      professeur : null,
      classe : null
    };


    console.log(postData)
    this.userS.testAddFiche(postData).subscribe((dataPost: any) => {
      console.log(dataPost)
    })

  })
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
  getFicheForVerif(){
    const inputEl: HTMLInputElement = document.getElementById('inputClasse') as HTMLInputElement;
    const classe: string = inputEl.value;
    const inputEl2: HTMLInputElement = document.getElementById('inputHour') as HTMLInputElement;
    const hour: string = inputEl2.value;
    const inputEl3: HTMLInputElement = document.getElementById('inputCour') as HTMLInputElement;
    const cour: string = inputEl3.value;
   // console.log('la classe selec est',classe,'le cours est', cour,' l heure de cours est ',hour)
    const annee = classe.slice(0,1);
    const nomSection = classe.slice(1,6);
    const d = new Date();
    const dateJourPresence  = moment(d).format('YYYY-MM-DD') as unknown as Date;;

    this.userS.getFicheByParams(hour, annee, nomSection, cour, dateJourPresence).subscribe((dataFiche: any) => {

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
