import { listeRole } from './Role';
import { FichePresence } from './FichePresence';
import { Classe } from './Classe';
import { Cours } from './Cours';
export class Utilisateur{
  idUtilisateur: number;
  nom: string;
  prenom: string;
  ddn: Date;
  adresse: string;
  numTel: string;
  coursRecu: Cours;
  coursDonner: Cours;
  presenceEleve: FichePresence;
  profDeLaFiche: FichePresence;
  classe: Classe;
}
