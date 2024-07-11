
import { ICard } from "../card/types";
import { IDiscard, IDraw } from "../deck/types";
import { IHand } from "./types";

export class Hand implements IHand {
    cards: ICard[];

    constructor(cards: []) {
        this.cards = cards
    }

    take(draw: IDraw): void {
        this.cards.push(draw.get()!)
    }
    discard(cardId: number, discard: IDiscard): void {
        const index = this.cards.findIndex(c => c.id === cardId);
        if (index !== -1) {
            const [discardedCard] = this.cards.splice(index, 1);
            discard.add(discardedCard);
        } else {
            throw new Error(`Card with ID ${cardId} not found`);
        }
    }

}