import { START_MONEY } from "../../const/game-const";
import { IAgent, ISide } from "../agent/types";
import { IHand } from "../hand/types";

import { IPlayer } from "./types";

export class Player implements IPlayer {
    side: ISide;
    money: number = START_MONEY;
    hand: IHand;
    agents: IAgent[];

    constructor(side: ISide, agents: IAgent[], hand: IHand) {
        this.side = side
        this.agents = agents
        this.hand = hand
    }

    increaseMoney(amount: number): void {
        this.money += amount
    }
    decreaseMoney(amount: number): void {
        this.money -= amount
    }

    addAgent(agent: IAgent): void {
        this.agents.push(agent)
    }
    removeAgent(agentId: number): void {
        this.agents = this.agents.filter(agent => agent.id !== agentId)
    }

}