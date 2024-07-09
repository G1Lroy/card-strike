
import { IStatus, StatusEffect } from "../status/types";
import { Weapons, Equip } from "../types";



export enum ISide {
    CT = "CT",
    TT = "TT"
}

export interface IWeapon {
    id: number;
    weapon: Weapons
    damage: number;
}

export interface IEquipment {
    id: number;
    item: Equip
    image: string;
}



export interface IAgent {
    id: number;
    image: string;
    side: ISide;
    maxHealth: number;
    currentHealth: number;
    statuses: IStatus[];
    equipment: IEquipment | null;
    weapon: IWeapon | null;
    modificator: StatusEffect | null;

    attack(target: IAgent): void;
    receiveDamage(amount: number): void;
    die(): void;

    setStatus(status: IStatus): void
    removeStatus(statusId: number): void
    clearStatuses(): void

    setEquip(item: IEquipment): void;
    removeEquip(): void;

    setWeapon(weapon: IWeapon): void;
    removeWeapon(): void;
}