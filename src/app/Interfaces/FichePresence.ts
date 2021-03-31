import { Utilisateur } from './Utilisateur';
import { Classe } from './Classe';
import { Cours } from './Cours';

export class FichePresence{
  idFichePresence: number;
  statusPresence: string;
  statusSupplementaire: string;
  dateJourPresence: Date;
  heureCours: String;
  raison: String;
  eleveFp: Utilisateur;
  professeurFp: Utilisateur;
  classeFp: Classe;
  coursFp: Cours;
  statusFiche: boolean;
}
