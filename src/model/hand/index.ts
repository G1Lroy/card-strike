
import { ICard } from "../card/types";
import { IHand } from "./types";

export class Hand implements IHand {
    cards: ICard[];

    constructor(cards: []) {
        this.cards = cards
    }

    draw(card: ICard): void {
        this.cards.push(card)
    }
    discard(cardId: number): void {
        this.cards = this.cards.filter(c => c.id !== cardId)
    }

}