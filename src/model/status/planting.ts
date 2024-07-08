import Status from ".";
import { StatusEffect, StatusNames } from "./types";

export class PlantingStatus extends Status {

    constructor(id: number) {
        const name: StatusNames = StatusNames.Planting;
        const descrip: string = 'Агент неактивен 2 хода, до установки бомбы';
        const duration: number = 2;
        const image: string = './assets/def.png';
        const effect: StatusEffect = { modificator: "system action" };

        super(id, name, descrip, duration, image, effect);
    }
}