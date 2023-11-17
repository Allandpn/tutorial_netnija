import { People } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplates.js';
import { Pagament } from './classes/pagament.js';
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list templates instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, amount.valueAsNumber, details.value];
    if (type.value === "invoice") {
        doc = new People(...values);
    }
    else {
        doc = new Pagament(...values);
    }
    list.render(doc, type.value, "end");
});
//Genereics
//const addID = (obj: object) => . . . Nao 'e possivel acessar as propriedades do objeto paramentreo
//const addID = <T>(obj: T) => . . . Qualquer valor e tipo pode ser informado no paramentro
//const addID = <T extends object>(obj: T) => . . .apenas objetos sao informados no paramento
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const objeto = addID({ name: "allan", age: 21 });
let obj2 = addID({ name: "hello" });
console.log(objeto);
console.log(obj2);
let obj3 = "test";
console.log(...obj3);
const docOne = {
    name: "Allan",
    age: 34,
    date: "test"
};
const docTwo = {
    name: "Allan",
    age: 34,
    date: ["test", "test2"]
};
console.log(docOne, docTwo);
//ENUMS
var Books;
(function (Books) {
    Books[Books["BOOK"] = 0] = "BOOK";
    Books[Books["AUTHOR"] = 1] = "AUTHOR";
    Books[Books["TITLE"] = 2] = "TITLE";
    Books[Books["DATE"] = 3] = "DATE";
})(Books || (Books = {}));
const book1 = {
    title: "book1",
    author: "I",
    id: Books.TITLE
};
const book2 = {
    title: "book2",
    author: "You",
    id: Books.DATE
};
console.log(book1);
console.log(book2);
//Tuplas
//nao podem ter o tipo de cada posicao alterado
let tup;
tup = ["eu", 9, true];
