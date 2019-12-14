// var(globalna - se več ne uporabla), let(se največ uporabla), const(dodati ji moramo value) 

let age = 30;
age = 20;
console.log(age); //izpis bo 29

let score;
console.log(score);

// String, numbers, boolean, null, undefined

const name = 'Tim';
const age2 = 30;
const rating = 4.5;
const isCoole = true;
const x = null; 
const y = undefined;
let z; //tut undefined

console.log(typeof age2); //izpiše tip spremenljivke

//concatenation
console.log('My name is ' + name + ' and I am ' +age);
//template String
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);


const s = 'technology, computers, macs are the best ';

console.log(s.length);
console.log(s.substring(0, 5)); //kje štartaš, kje končaš
console.log(s.toLowerCase());
//console.log(s.substring(0, 5)).toUpperCase();
console.log(s.split(', '));

// arrays tabelce čuj

/*multi
line
comment*/

const numbers = new Array(1,2,3,4,5,);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true]; //lahko mamo različne tipe v tabeli int double bool string...

fruits[3] = 'grapes';

fruits.push('mangos'); //pusha ga nakonc tabele
fruits.unshift('strawberries'); //pusha ga na začetek

fruits.pop(); //zadnjega izbriše

console.log(Array.isArray('hello')); //preveri če je v tabeli
console.log(fruits.indexOf('oranges')); //vrne index pomaranč
console.log(fruits[1]);

//Objects

const person = {
    firstName: 'Tim',
    lastName: 'Rus',
    age: 20,
    hobbies: ['spearfishing', 'diving', 'programming'],
    address:{
        street: 'Globoko 10K',
        city: 'Globoko',
        state: 'Slovenia'
    }
}

console.log(person.hobbies[1], person.address.city);

const {firstName, lastName, address: { city }} = person;

console.log(city);

person.email = 'timrus99@gmail.com'; //dodajanje v osebo

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isCompleted: true 
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false 
    }
];

console.log(todos[1].text); //izpiše iz tabele zraven pa še string

const todoJSON = JSON.stringify(todos); //če bi hoteli sendat na server v JSON obliki
console.log(todoJSON);


//For
for (let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`); // dobim izpis in številko za vssako izvedbo loopa
}

//While
let i = 0;

while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//loops čez arraje
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){  //bolj pregledna zanka za sprehod čez tabelo
    console.log(todo.id);
}

//forEach, map, filte
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})


console.log(todoCompleted);

const p = 10;
if (p == 10){
    console.log('p is 10');
}else{console.log('bye bye');}

// ||, && vse isto kot v javi

const u = 0;

const color = u > 10 ? 'red' : 'blue'; //if-else oblika
console.log(color); 

//Switch stavek
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

/*function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}
console.log(addNums(6,6)); //klicanje funkcije
*/

//arrow function
const addNums = (num1 = 1, num2 = 2) => {console.log(num1 + num2);}

addNums(5,5);

/*
//constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this,lastName = lastName;
    this.dob = dob;
   /* this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName= function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}*/

//Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this,lastName  = lastName;
        this.dob = dob;
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person1 = new Person('Tim', 'Rus', '4-29-1999');
const person2 = new Person('Laura', 'Srpčič', '10-25-1999');

console.log(person2.getFullName());
console.log(person1);

//DOM
//Single elemen
console.log(document.getElementById('my-form'));    //getElementById
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));    //querySelector; .container, ker je class


//Multiple elements
console.log(document.querySelectorAll('.item'));    //izpiše nodeList, podobno kot array
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));   //po tagih npr. list
 

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove(); //odstrani cel .items class
//ul.lastElementChile.remove();  //odstrani zadnjega

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello World!</h1>';

/*const btn = document.querySelector('.btn');
btn.style.background = 'blue';
*/

//Events
const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', (e) => {  //arrow Function used here ;)
    e.preventDefault(); //click bo pisalo skos ko bom prtisnu submit button :D
    document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg.dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    //console.log(e.target);  //obarva nam element ki ga pritisnemo
});






