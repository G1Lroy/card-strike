import { ICard } from "../card/types"
import { IDiscard, IDraw } from "../deck/types"

export interface IHand {
    cards: ICard[]
    take: (draw: IDraw) => void
    discard: (cardId: number, discard: IDiscard) => void
}