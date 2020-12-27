import { Classe } from './Classe';
import { FichePresence } from './FichePresence';
import { Utilisateur } from './Utilisateur';
export class Cours{
  idCours: number;
  nomCours: string;
  coursDeLaFiche: FichePresence;
  classeDeLaFiche: FichePresence;
  eleve: Utilisateur;
  professeur: Utilisateur;
  classe: Classe;
}
