import { Identity } from "./Commun";
import { Effet } from "./Effet";

enum TypeObject {
  PIEGE = "PIEGE"
  //..
}

interface Objet extends Identity {
  type: TypeObject;
  effets: Array<Effet>;
}

export { Objet };
