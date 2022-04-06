export default interface Type {
    degats:number;

    /**
     * Fonction permettant de faire le calcul des dégats contre le type feu en fonction du type du pokemon qui attaque
     * (exemple Eau attaque, degats +50%)
     */
    calculerDegatsContreFeu():number;

    /**
     * Fonction permettant de faire le calcul des dégats contre le type eau en fonction du type du pokemon qui attaque
     */
    calculerDegatsContreEau():number;

    /**
     * Fonction permettant de faire le calcul des dégats contre le type plante en fonction du type du pokemon qui attaque
     * (exemple feu attaque, degats +50%)
     */
    calculerDegatsContrePlante():number;
}