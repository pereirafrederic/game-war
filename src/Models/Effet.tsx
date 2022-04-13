import { Identity } from "./Commun";

enum TypeEffet {
  BONUS = "bonus",
  MALUS = "malus"
}

interface Effet extends Identity {
  typeEffet: TypeEffet;
  valeur: number;
}

export { Effet };
