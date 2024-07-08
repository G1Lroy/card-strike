import Agent from ".";
import { DefusingStatus } from "../status/defusing";
import { Side } from "./types";

export class CT_Agent extends Agent {
    constructor(id: number) {
        const side: Side = Side.CT
        const image: string = "path/to/img"
        super(id, image, side);
    }
    defuse(): void {
        this.setStatus(new DefusingStatus(1))
    }
}