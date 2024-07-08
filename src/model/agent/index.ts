import { AGENT_HP } from '../../const/game-const';
import { IStatus } from '../status/types';
import { IAgent, WeaponSlot, EquipmentSlot, Side } from './types';

class Agent implements IAgent {
    id: number;
    image: string;
    side: Side;
    maxHealth: number = AGENT_HP;
    currentHealth: number = AGENT_HP;
    statuses: IStatus[] = [];
    equipment: EquipmentSlot | null = null;
    weapon: WeaponSlot | null = null;
    modificator: null = null;

    constructor(id: number, image: string, side: Side) {
        this.id = id;
        this.image = image;
        this.side = side;
    }

    // COMMON //

    attack(target: IAgent): void {
        if (!target) {
            console.log("Цель для атаки не найдена");
            return
        }

        if (this.weapon) {
            target.receiveDamage(this.weapon.damage);
        }
    }
    receiveDamage(amount: number): void {
        this.currentHealth -= amount;

        if (this.currentHealth <= 0) {
            this.die();
        }
    }
    die(): void {
        console.log(`${this.id} умер.`);
        this.clearStatuses()
    }

    // STATUSES //

    setStatus(status: IStatus): void {
        this.clearStatuses()
        this.statuses.push(status)
    }
    removeStatus(statusId: number): void {
        this.statuses = this.statuses.filter(status => status.id !== statusId);
    }
    clearStatuses(): void {
        this.statuses = []
    }


    // EQUIP //

    setEquip(item: EquipmentSlot): void {
        this.equipment = item;
        console.log(`${this.id} экипировал предмет: ${item.item}`);
    }
    removeEquip(): void {
        console.log(`${this.id} снял предмет: ${this.equipment?.item}`);
        this.equipment = null;
    }

    // WEAPONS //

    setWeapon(weapon: WeaponSlot): void {
        this.weapon = weapon;
        console.log(`${this.id} экипировал оружие: ${weapon.weapon}`);
    }
    removeWeapon(): void {
        console.log(`${this.id} снял оружие: ${this.weapon?.weapon}`);
        this.weapon = null;
    }


}

export default Agent;
