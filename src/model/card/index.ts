import { IAgent } from "../agent/types";
import { ICard } from "./types";

export abstract class Card implements ICard {
    id: number;
    name: string;
    descrip: string;
    subDescrip: string | null;
    cost: number;
    img: string;
    descripBg: string | null;

    constructor(id: number, name: string, descrip: string, subDescrip: string, cost: number, img: string, descripBg: string) {
        this.id = id
        this.name = name
        this.descrip = descrip
        this.subDescrip = subDescrip
        this.cost = cost
        this.img = img
        this.descripBg = descripBg
    }

    abstract play(target: IAgent): void

}