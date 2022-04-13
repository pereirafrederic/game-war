import { Identity } from "./Commun";

enum TypeBatiment {
  FORTIFICATION = "FORTIFICATION",
  MAISON = "MAISON"
  //..
}

interface Batiment extends Identity {
  type: TypeBatiment;
}

export { Batiment };
