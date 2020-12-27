import { FichePresence } from './../../Interfaces/FichePresence';
import { ClasseServiceService } from './../../Service/classe-service.service';
import { UtilisateurService } from './../../Service/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/Interfaces/Classe';
import { Utilisateur } from 'src/app/Interfaces/Utilisateur';


@Component({
  selector: 'app-encodage',
  templateUrl: './encodage.component.html',
  styleUrls: ['./encodage.component.css']
})
export class EncodageComponent implements OnInit {
  classe: Classe[];
  student: Utilisateur[];
  oneStudent: Utilisateur;
  cl:Classe[];
  fp: FichePresence = new FichePresence();
  ifDA: boolean;
  constructor(private userS: UtilisateurService, private classeS: ClasseServiceService) { }

  ngOnInit(){
    this.getAllClasse();
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
    console.log(this.student)
    console.log(index)
    this.oneStudent = this.student[index];
    console.log(this.oneStudent)
    const inputEl: HTMLInputElement = document.getElementById('inputClasse') as HTMLInputElement;
    const classe: string = inputEl.value;
    const inputEl2: HTMLInputElement = document.getElementById('inputHour') as HTMLInputElement;
    const hour: string = inputEl2.value;
    console.log('la classe selec est',classe,' l heure de cours est ',hour)

    /*_____________TACHE A FAIRE POUR LE 23/12/2020_________________
    Maintenant que j'ai l utilisateur appartenant a la ligne du bouton
    je peux l assigner a  fp , il me reste a configurer fp , a get la value
    de l'heure de cours et a post tt ca dans spring, il faudra aussi une fois
    que la connexions est implémentzr dire dans la méthode du back end
    que l'utilisateur connecté est le profdelafiche
    */
  }
  onAbsent(){

  }
  onAT(){

  }
  onDA(){
    this.ifDA = true;
    console.log(this.fp);
  }
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  trackById(index: number, obj: any): any {
    return index;
  }
  selectOption(name: string,name2: string) {
    console.log('name1 is',name,'name2 is', name2);
    /*const f : FichePresence = new FichePresence();
    f.idFichePresence = this.fp.idFichePresence;
    f.statusPresence = name;
    f.statusSupplementaire = name;
    this.userS.testAddFiche*/
  }

}
