import { Weapons, Equip } from "../types";

export type StatusNames = 'Flashed' | 'Smoked' | 'Defusing' | 'Planting' | 'Creeping';

export type Side = 'Ct' | 'T'

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

export interface Status {
    id: number;
    duration: number; // number of turns
    image: string;
    effect: StatusNames; // temp
}

export interface IAgent {
    id: number;
    image: string;
    side: Side;
    maxHealth: number;
    currentHealth: number;
    statuses: Status[];
    equipment: EquipmentSlot | null;
    weapon: WeaponSlot | null;

    attack(target: IAgent): void;
    receiveDamage(amount: number): void;
    die(): void;

    setStatus(status: Status): void;
    removeStatus(status: Status): void;

    setEquip(item: EquipmentSlot): void;
    removeEquip(): void;

    setWeapon(weapon: WeaponSlot): void;
    removeWeapon(): void;
}