import { Utilisateur } from './Utilisateur';
import { Classe } from './Classe';
import { Cours } from './Cours';
import { Time } from '@angular/common';

export class FichePresence{
  idFichePresence: number;
  statusPresence: string;
  statusSupplementaire: string;
  dateJourPresence: Date;
  heureCours: Time;
  raison: String;
  eleveFp: Utilisateur;
  professeurFp: Utilisateur;
  classeFp: Classe;
  coursFp: Cours;
}
