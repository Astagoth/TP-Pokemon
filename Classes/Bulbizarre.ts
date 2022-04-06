import Pokemon from "../Interfaces/Pokemon";
import TypePlante from "./typePlante";

export default class Bulbizarre extends TypePlante implements Pokemon {
    
    // Attributs de base de notre pokemon
    nom: string = "Bulbizarre";
    pv: number;
    pvMax: number;
    type: string = "Plante";
    captif: boolean = false;
    horsJeu: boolean = false;
    
    constructor(_pvMax : number, degats : number) {
        super(degats);
        this.pvMax = _pvMax;
        this.pv = _pvMax;
    }

    attaquer() {
        if(this.horsJeu == false) {
            console.log(`${this.nom} attaque !`);
        }
        else {
            console.log(`${this.nom} est hors jeu, il ne peux pas se battre !`)
        }
    }

    subirAttaque() {
        this.pv = this.pv - this.degats;
        console.log(`${this.nom} a perdu ${this.degats} !`);
    }

    soigner() {
        let pvHealed = 1;
        this.pv = this.pv + pvHealed;
        console.log(`${this.nom} a récupérer ${pvHealed} !`);
    }

    renommer() {
        this.nom = "pas d'inspi";
    }
}