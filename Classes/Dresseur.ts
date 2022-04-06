import Pokeball from "./Pokeball";

export default class Dresseur {
    private nom:string;
    listPokeballs!:Array<Pokeball>;

    constructor(_nom:string) {
        this.nom = _nom;
    }

    public ajouterPokeballs():void {
        this.listPokeballs.push(new Pokeball(this));
    }

    public capturer():boolean {

        return false;
    }

    getPokemons():void {
        
    }
}