
import {People} from './classes/invoice.js'
 import { ListTemplate } from './classes/listTemplates.js'
import { Pagament } from './classes/pagament.js'
import { formatt } from './interfaces/formatt.js'

/* //interfaces classes

let docInv:formatt
let docPg:formatt

docInv = new People("Allan", 35, true)
docPg = new Pagament("Maria", 400, false)

let docs : formatt[] = []

docs.push(docInv)
docs.push(docPg)


console.log(docs)





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
     //   console.log(a)
    },
    myName(a: string): string {
     //   console.log(a)
        return a
    }
}

const funcPerson = (me:isPerson) => {
 //   console.log(me.age)
}

funcPerson(me)







const person = new People("Allan", 53, true)
const person1 = new People("Diego", 24, true)

let peoples: People[] = []

peoples.push(person)
peoples.push(person1)

//console.log(peoples)

//BUG
// person.name = "Antonio"
//person1.age = 50

//console.log(peoples)

peoples.forEach((inv) => {
  //  console.log(inv.name, inv.age, inv.isMale, inv.format())
}) */



const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


// list templates instance
const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let doc:formatt

    let values: [string, number, string] = [tofrom.value, amount.valueAsNumber, details.value]

    
    if(type.value === "invoice") {
         doc = new People(...values)
    }
    else{
         doc = new Pagament(...values)
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

console.log(docOne, docTwo)


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



//Tuplas
//nao podem ter o tipo de cada posicao alterado
let tup:  [string, number, boolean] 
tup = ["eu", 9, true]

