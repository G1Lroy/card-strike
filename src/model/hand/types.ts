import { ICard } from "../card/types"

export interface IHand {
    cards: ICard[]
    draw: (card: ICard) => void
    discard: (cardId: number) => void
}