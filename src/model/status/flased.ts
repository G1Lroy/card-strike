import Status from ".";
import { StatusEffect, StatusNames } from "./types";


export class FlashedStatus extends Status {

    constructor(id: number) {
        const name: StatusNames = StatusNames.Flashed;
        const descrip: string = 'Агент ослеплен на 3 хода, точность временно понижена';
        const duration: number = 3;
        const image: string = './assets/flashed.png';
        const effect: StatusEffect = { modificator: 'reduce aim', value: 10 };

        super(id, name, descrip, duration, image, effect);
    }
}