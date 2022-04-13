import { Position, Direction, Deplacement } from "./GeoPosition";
import { Vue } from "./Sens";
import { Identity } from "./Commun";
import { Effet } from "./Effet";

enum TypePersonnage {
  HEROS = "Personnage Héros",
  ENNEMI = "Personnage Ennemi",
  BOSS = "Personnage Boss",
  PNJ = "Personnage Non Jouable",
  PJ = "Personnage Jouable",
  SOUTIEN = "Personnage de Soutien"
  //..
}

enum TypeComportement {
  AGRESSIF = "Comportement Aggressif",
  NEUTRE = "Comportement Neutre",
  FUYANT = "Comportement Fuyant"
  //..
}

enum TypeUnite {
  AERIENNE = "unite Aérienne",
  TERRESTRE = "unite terrestre",
  SOUS_SOUL = "unite sous le sol"
  //..
}

enum Attitude {
  NEUTRE = "neutre",
  DEFENSIF_CC = "Defensif au corps à corps ",
  DEFENSIF_ZONE = "Defensif en zone",
  DEFENSIF_DISTANCE = "Defensif en distance",
  FUITE = "En fuite"
  //..
}

interface Personnage extends Identity {
  typePersonne: TypePersonnage;
  comportement: TypeComportement;
  lieu: Position;
  direction: Direction;
  Attitude: Attitude;
  vue: Vue;
  typeUnite: TypeUnite;
  deplacement: Deplacement;
  effets: Array<Effet>;
}

export { Personnage };
