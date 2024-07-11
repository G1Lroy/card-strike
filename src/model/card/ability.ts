import { Card } from ".";
import { IEquipment } from "../agent/types";

export class AbilityCard extends Card {
    effect: IEquipment;

    constructor(id: number, name: string, descrip: string, subDescrip: string, cost: number, img: string, descripBg: string, effect: IEquipment) {
        super(id, name, descrip, subDescrip, cost, img, descripBg);
        this.effect = effect;
    }

}