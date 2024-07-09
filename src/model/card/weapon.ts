import { Card } from ".";
import { IAgent, IWeapon } from "../agent/types";

export class WeaponCard extends Card {
    effect: IWeapon;

    constructor(id: number, name: string, descrip: string, subDescrip: string, cost: number, img: string, descripBg: string, effect: IWeapon) {
        super(id, name, descrip, subDescrip, cost, img, descripBg);
        this.effect = effect;
    }

    play(target: IAgent): void {
        console.log(target);
    }
}
