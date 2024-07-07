import { AGENT_HP } from '../../const/game-const';
import { IAgent, Status, WeaponSlot, EquipmentSlot, Side } from './types';

class Agent implements IAgent {
    id: number;
    image: string;
    side: Side;
    maxHealth: number = AGENT_HP;
    currentHealth: number = AGENT_HP;
    statuses: Status[] = [];
    equipment: EquipmentSlot | null = null;
    weapon: WeaponSlot | null = null;

    constructor({ id, image, side, }: IAgent) {
        this.id = id;
        this.image = image;
        this.side = side;
    }

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

    setStatus(status: Status): void {
        this.statuses.push(status);
        console.log(`${this.id} получил статус: ${status}`);
    }

    removeStatus(status: Status): void {
        this.statuses = this.statuses.filter(s => s !== status);
        console.log(`${this.id} удалил статус: ${status}`);
    }

    setEquip(item: EquipmentSlot): void {
        this.equipment = item;
        console.log(`${this.id} экипировал предмет: ${item.item}`);
    }

    removeEquip(): void {
        console.log(`${this.id} снял предмет: ${this.equipment?.item}`);
        this.equipment = null;
    }

    setWeapon(weapon: WeaponSlot): void {
        this.weapon = weapon;
        console.log(`${this.id} экипировал оружие: ${weapon.weapon}`);
    }

    removeWeapon(): void {
        console.log(`${this.id} снял оружие: ${this.weapon?.weapon}`);
        this.weapon = null;
    }

    die(): void {
        console.log(`${this.id} умер.`);

    }
}

export default Agent;
