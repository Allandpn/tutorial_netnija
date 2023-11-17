
let fixed = ["test", "test1", "test2"]

let mixed = ["test", 12, "test3", false]

mixed.push(true)

let alunos = {
    name: "allan",
    idade: 35,
    sexo: "masc"
}

alunos = {
    name: "diego",
    idade: 32,
    sexo: "masculino"
}



// types arrays
// define tipo como string e depois inicializa variavel( sem a inicializacao o ninja.push ira dar erro em tempo de execucao)
let ninja: string[] = []

ninja.push("allan");

console.log(ninja)

//union types
let ninja2: (string|number)[] = []
ninja2.push("allan")
ninja2.push(2)

console.log(ninja2)

let ninja3: string|number;
ninja3 = "allan"
ninja3 = 10

console.log(ninja3)

//objects
//define tipo do objeto
let obj: object
//declara valor do objeto
obj = {
    name: "Allan",
    age: 35
}

//define tipo do objeto
let foo: {
    name: string,
    age: number
}

//define valor do objeto
foo = {
    name: "Allan",
    age: 35
}



// type qualquer e mutavel
let age: any = 25

age = "Allan";

console.log(age)

let ninjam: {name: any, age: any}

ninjam = {name: "allan", age:"diego" }


// functions

//passagem de paramentos: c? = paramentro opcional
// ="name" - paramentro default number | string = "name") 
const fun = (a: number, b: number, c?: number | string) => {
    console.log(a + b + " " + c)
    return (a + b)
}

fun(10, 5)

//typesrcipt infere o tipo da variavel result de acordo com o retorno da funcao 
//outra opacao e definir tipo de retorno: const fun = (a: number, b: number, c?: number | string): number => {
let result = fun(5, 6)

// alias functions

type stringOrName = string | number;
type userName = {
    name: string,
    uid: stringOrName
};

const user = (user: stringOrName) => {
    console.log(user);    
}

const userN = (user: userName) => {
    console.log(user);
}


// functions assignature

let calc: (a: number, b: number) => void;
let calcb: (a: number, b:number, c?:string) => number

calc = (a:number, b:number) => {
    console.log(a + b)
}

calcb = (a:number, b:number, c?:string) => {
    if(c) {
        if(c ==="add") {
            return a + b
        }        
    }
    return 0
    
}

console.log(calcb(1,2, "add"))

let objeto: (obj: {name:string, age:number}) => void
type person = {name:string, age: number}

let myPerson = (person: person) => {
    console.log(person)
}



// class
class People {
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


const person = new People("Allan", 53, "true")
const person1 = new People("Diego", 24, "true")

let peoples: People[] = []

peoples.push(person)
peoples.push(person1)

console.log(peoples)

//BUG
// person.name = "Antonio"
//person1.age = 50

console.log(peoples)

peoples.forEach((inv) => {
    console.log(inv.name, inv.age, inv.isMale, inv.format())
})


//interfaces

interface isPerson {
    name: string,
    age: number,
    myAge(a: number):void,
    myName(a : string): string
}

const me: isPerson = {
    name: "allan",
    age: 35,
    myAge(a : number) {
        console.log(a)
    },
    myName(a: string): string {
        console.log(a)
        return a
    }
}

const funcPerson = (me:isPerson) => {
    console.log(me.age)
}

funcPerson(me)



import { Pagament } from '../src/classes/pagament.js'
import { formatt } from '../src/interfaces/formatt.js'

//interfaces classes

let docInv:formatt
let docPg:formatt

docInv = new People("Allan", 35, "true")
docPg = new Pagament("Maria", 400, "false")

let docs : formatt[] = []

docs.push(docInv)
docs.push(docPg)


console.log(docs)

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

import { ListTemplate } from '../src/classes/listTemplates.js'

// list templates instance
const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let doc:formatt

    
    if(type.value === "invoice") {
         doc = new People(tofrom.value, amount.valueAsNumber, details.value)
    }
    else{
         doc = new Pagament(tofrom.value, amount.valueAsNumber, details.value)
    }

    list.render(doc, type.value, "end")
}) 


//Genereics
//const addID = (obj: object) => . . . Nao 'e possivel acessar as propriedades do objeto paramentreo
//const addID = <T>(obj: T) => . . . Qualquer valor e tipo pode ser informado no paramentro
//const addID = <T extends object>(obj: T) => . . .apenas objetos sao informados no paramento

const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random()*100)
    return {...obj, id}
}

const objeto = addID({name:"allan", age:21})
let obj2 = addID({name:"hello"})

console.log(objeto)
console.log(obj2)

let obj3 = "test"
console.log(...obj3)


//Interfaces - Genrerics

interface docsIn<T> {
    name: string,
    age: number,
    date: T
}

const docOne:docsIn<string> = {
    name: "Allan",
    age: 34,
    date: "test"
}

const docTwo:docsIn<string[]> = {
    name: "Allan",
    age: 34,
    date: ["test", "test2"]
}

// console.log(docOne, docTwo)


//ENUMS

enum Books {"BOOK", "AUTHOR", "TITLE", "DATE"}

interface Book<T> {
    title: string,
    author: string,
    id: T
}

const book1:Book<Books> = {
    title: "book1",
    author: "I",
    id: Books.TITLE
}

const book2:Book<Books> = {
    title: "book2",
    author: "You",
    id: Books.DATE
}

console.log(book1)
console.log(book2);
