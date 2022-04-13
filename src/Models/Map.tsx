import { Batiment } from "./Batiment";
import { Identity } from "./Commun";
import { Effet } from "./Effet";
import { Objet } from "./Objet";
import { Personnage } from "./Personnages";

enum TypeMap {
  PLAINE = "Plaine",
  DESERT = "Desert"
}

enum TypeTerrain {
  TERRE = "terre",
  EAU = "eau",
  AIR = "air"
}
enum SousType {
  BOUE = "boue",
  MARCAGE = "marécage",
  NUAGE = "nuage",
  BROUILLARD = "brouillard",
  ROUTE = "Route"
  //..
}

interface Contenu {
  objet: Objet;
  batiment: Batiment;
  personnage: Personnage;
}

interface Case extends Contenu {
  typeTerrain: TypeTerrain;
  sousTypeTerrain: SousType;
  effets: Array<Effet>;
  altitude: number;
}

interface ColonneCase {
  maxSousSol: number;
  maxAir: number;
  cases: Array<Case>; //order by altitude
}

interface Map extends Identity {
  taille: number;
  type: TypeMap;
  cases: Array<ColonneCase>;
  // 1-1 1-2
  // 2-1 2-2
}

interface World {
  taille: number;
  maps: Array<Map>;
  // 1-1 1-2
  // 2-1 2-2
}
