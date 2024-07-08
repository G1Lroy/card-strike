
import { IStatus, StatusEffect } from "../status/types";
import { Weapons, Equip } from "../types";



export enum Side {
    CT = "CT",
    TT = "TT"
}

export interface WeaponSlot {
    id: number;
    weapon: Weapons
    damage: number;

}

export interface EquipmentSlot {
    id: number;
    item: Equip
    image: string;
}



export interface IAgent {
    id: number;
    image: string;
    side: Side;
    maxHealth: number;
    currentHealth: number;
    statuses: IStatus[];
    equipment: EquipmentSlot | null;
    weapon: WeaponSlot | null;
    modificator: StatusEffect | null;

    attack(target: IAgent): void;
    receiveDamage(amount: number): void;
    die(): void;

    setStatus(status: IStatus): void
    removeStatus(statusId: number): void
    clearStatuses(): void

    setEquip(item: EquipmentSlot): void;
    removeEquip(): void;

    setWeapon(weapon: WeaponSlot): void;
    removeWeapon(): void;
}