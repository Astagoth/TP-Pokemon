import Pokemon from "../Interfaces/Pokemon";
import TypeEau from "./TypeEau";

export default class Carapuce extends TypeEau implements Pokemon{
nom: string = "Carapuce";
pv: number;
pvMax: number;
type: string = "Eau";
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
        let pvHealed = 4;
        this.pv = this.pv + pvHealed;
        console.log(`${this.nom} a récupérer ${pvHealed} !`);
    }

    renommer() {
        this.nom = "C une tortue le truc";
    }
}