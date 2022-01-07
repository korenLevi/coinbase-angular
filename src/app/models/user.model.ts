// export interface User {
//     _id?:string,
//     name:string,
//     coins:number,
//     moves: Object,
// }
import { MoveModel } from './move.model';
export class User {

    constructor(public name: string = '', public coins: number = 100,public moves: MoveModel[] = []) {
    }
}