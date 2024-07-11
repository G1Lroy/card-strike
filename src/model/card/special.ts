import { Card } from ".";

export class SpecialCard extends Card {
    effect: unknown; 
    // provides effect on round stage etc..

    constructor(id: number, name: string, descrip: string, subDescrip: string, cost: number, img: string, descripBg: string, effect: unknown) {
        super(id, name, descrip, subDescrip, cost, img, descripBg);
        this.effect = effect;
    }

}