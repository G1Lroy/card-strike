import { IAgent } from "../agent/types";
import { IStatus, StatusEffect, StatusNames } from "./types";



export class Status implements IStatus {
    id: number;
    name: StatusNames;
    descrip: string;
    duration: number;
    image: string;
    effect: StatusEffect;

    constructor(id: number, name: StatusNames, descrip: string, duration: number, image: string, effect: StatusEffect) {
        this.id = id;
        this.name = name;
        this.descrip = descrip;
        this.duration = duration;
        this.image = image;
        this.effect = effect;
    }

    applyStatus(agent: IAgent): void {
        agent.setStatus(this);
    }

    reduceDuration(agent: IAgent): void {
        if (this.duration > 0) {
            this.duration--;
        } else {
            agent.removeStatus(this.id)
        }

    }

    increaseDuration(): void {
        this.duration++;
    }

}

export default Status;