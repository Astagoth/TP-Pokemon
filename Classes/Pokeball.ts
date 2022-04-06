import Pokemon from "../Interfaces/Pokemon"
import Dresseur from "./Dresseur";

export default class Pokeball {
    contient! : Pokemon;
    proprietaire! : Dresseur;

    constructor(dresseur:Dresseur, pokemon?:Pokemon) {
        this.proprietaire = dresseur;
        if(pokemon != null) {
            this.contient = pokemon;
        }
        
    }
}