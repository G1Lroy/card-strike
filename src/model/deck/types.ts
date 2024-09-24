import { ICard } from "../card/types";

export interface IDeck {
    cards: ICard[]

}

export interface IDraw extends IDeck {
    get(): ICard
    shuffle(): void
}

export interface IDiscard extends IDeck {
    add(card: ICard): void
}

export interface IHand extends IDeck {
    take: (draw: IDraw) => void
    discard: (cardId: number, discard: IDiscard) => void
}