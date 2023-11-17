export class Pagament {
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
    constructor(name, value, isMale) {
        this.name = name;
        this.value = value;
        this.isMale = isMale;
    }
    format() {
        return `name: ${this.name}, valor: ${this.value}, homem: ${this.isMale}`;
    }
}
