import { IAgent, ISide } from "../agent/types";
import { IHand } from "../deck/types";

export interface IPlayer {
    side: ISide
    money: number
    hand: IHand
    agents: IAgent[]

    increaseMoney: (amount: number) => void
    decreaseMoney: (amount: number) => void

    addAgent: (agent: IAgent) => void
    removeAgent: (agentId: number) => void
}