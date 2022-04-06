export default interface Pokemon {
    nom:string;
    pv:number;
    pvMax:number;
    type:string;
    captif:boolean;
    horsJeu:boolean;

    /**
     * Fonction permettant au pokemon d'attaquer et d'infliger des dégats
     */   
    attaquer();

    /**
     * Fonction permettant au pokemon de recevoir des dégats
     */
    subirAttaque();

    /**
     * Fonction permettant de restaurer des HP au pokemon
     */
    soigner();

    /**
     * Fonction permettant de changer le nom attribué au pokemon
     */
    renommer();
}