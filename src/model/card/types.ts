import { IAgent } from "../agent/types"

export interface ICard {
    id: number
    name: string
    descrip: string
    subDescrip: string | null
    cost: number
    img: string
    descripBg: string | null


    play(target: IAgent): void | unknown // effect

}


