import { ICard } from "../card/types";
import { IDiscard, IDraw, IHand } from "./types";

export class Draw implements IDraw {
    cards: ICard[];

    constructor(cards: ICard[]) {
        this.cards = cards
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    get(): ICard {
        const card = this.cards.pop();
        if (!card) {
            throw new Error("No more cards to draw");
        }
        return card;
    }

}

export class Discard implements IDiscard {
    cards: ICard[];

    constructor(cards: ICard[]) {
        this.cards = cards
    }
    add(card: ICard): void {
        this.cards.push(card)
    }
}

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