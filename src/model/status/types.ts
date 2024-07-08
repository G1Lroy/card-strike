import { IAgent } from "../agent/types";

export enum StatusNames {
    Flashed = 'Flashed',
    Smoked = 'Smoked',
    Defusing = 'Defusing',
    Planting = 'Planting',
    Creeping = 'Creeping'
}

export type StatusEffect = {
    modificator: 'reduce aim' | 'system action' | 'increase aim' | 'increase dmg'
    value?: number 
}

export interface IStatus {
    name: StatusNames
    descrip: string;
    id: number;
    duration: number;
    image: string;
    effect: StatusEffect;

    applyStatus(agent: IAgent): void;
    reduceDuration(agent: IAgent): void;
    increaseDuration(): void
}