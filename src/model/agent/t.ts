import Agent from ".";
import { PlantingStatus } from "../status/planting";
import { ISide } from "./types";

export class TT_Agent extends Agent {
    constructor(id: number) {
        const side: ISide = ISide.TT
        const image: string = "path/to/img"
        super(id, image, side);
    }
    planting(): void {
        this.setStatus(new PlantingStatus(1))
    }
}