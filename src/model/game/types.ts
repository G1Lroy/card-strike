import { ISide } from "../agent/types"

export type IStage = 'preparation' | 'retake' | 'execute'
export interface IScore {
    [ISide.TT]: number;
    [ISide.CT]: number;
}

export interface IGame {
    score: IScore;
    summScore: number;
    currRound: number;
    maxRounds: number;
    activePlayer: ISide;
    roundStage: IStage;
    isFirstHalf: boolean;

    incrementScore(side: ISide): void;
    incrementRound(): void;
    nextActivePlayer(): void;
    changeStage(stage: IStage): void;
    halfGameChangeSides(): void;
    updateScoreSumm(): void;
    getSideWithHigherScore(): ISide | string;
    finishRound(): void;
    finishGame(): unknown;
}