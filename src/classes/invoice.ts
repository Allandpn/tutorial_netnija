import { formatt } from "../interfaces/formatt"

export class People implements formatt {
    /* //readonly - apenas leitura (inside and outside)
    readonly name: string;
    //acessivel apena dentro classe
    private age: number;
    //default public - acessivel dentro e fora da classe
    isMale: boolean;

    constructor(n: string, a: number, i: boolean) {
        this.name = n;
        this.age = a;
        this.isMale = i;
    }
 */
    //outra forma de criar construtor
    constructor(
        readonly name: string,
        readonly age: number,
        public isMale: string
    ){}


    format() {
       return `name: ${this.name}, idade: ${this.age}, homem: ${this.isMale}`
    }
}

