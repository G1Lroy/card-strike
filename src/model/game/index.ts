import { ISide } from "../agent/types";
import { IGame, IScore, IStage } from "./types";

export class Game implements IGame {
    score: IScore = { [ISide.CT]: 0, [ISide.TT]: 0 };
    summScore: number = 0
    currRound: number = 0;
    maxRounds: number = 30;
    activePlayer: ISide;
    roundStage: IStage = 'preparation';
    isFirstHalf: boolean = true;

    constructor(activePlayer: ISide) {
        this.activePlayer = activePlayer
    }

    incrementScore(side: ISide): void {
        this.score[side]++
    }

    incrementRound(): void {
        this.currRound++
    }

    updateScoreSumm(): void {
        this.summScore = this.score[ISide.CT] + this.score[ISide.TT]
    }

    nextActivePlayer(): void {
        this.activePlayer === ISide.TT ? ISide.CT : ISide.TT
    }

    changeStage(stage: IStage): void {
        this.roundStage = stage
    }

    halfGameChangeSides(): void {
        if (this.summScore === 15) {
            const tempScore = { ...this.score };
            this.score[ISide.TT] = tempScore[ISide.CT];
            this.score[ISide.CT] = tempScore[ISide.TT];

            this.isFirstHalf = false;
            this.nextActivePlayer()
            this.changeStage('preparation')
            this.incrementRound()
            console.log('Sides have been changed! Scores have been swapped. Preparing for the second half.');
            //  добавить обнуление денег игрокам
        }
    }

    getSideWithHigherScore(): ISide | string {
        if (this.score[ISide.CT] === this.score[ISide.TT]) {
            // make class or method
            return "TIE"
        }
        return this.score[ISide.CT] > this.score[ISide.TT] ? ISide.CT : ISide.TT
    }

    finishRound(): void {
        // get round winner
        const winner = ISide.CT

        this.incrementScore(winner)
        this.updateScoreSumm()
        this.nextActivePlayer()

        this.incrementRound()

    }

    finishGame() {
        return this.getSideWithHigherScore()
    }

}