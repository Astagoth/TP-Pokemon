import Type from "../Interfaces/Type";

export default abstract class TypeFeu implements Type {
    degats: number;
    constructor(degats:number) {
        this.degats = degats;
    }

    calculerDegatsContreEau(): number {
        return (this.degats / 2);
    }
    calculerDegatsContreFeu(): number {
        return this.degats;
    }
    calculerDegatsContrePlante(): number {
        return (this.degats * 2);
    }
}