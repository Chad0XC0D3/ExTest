'use strict';

// const restaurant = {
//     nameRE: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
//     mainMenu: ['pizza', 'Pasta', 'Risotto'],
//     order(i,x){
//         return [this.categories, this.mainMenu];
//     }
// }

// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);


// [secondary, main] = [main, secondary];
// console.log(main,secondary);



// let [food,more] = restaurant.order(2,0);
// console.log(food, more);

// [more,food] = [food, more];
// console.log(food, more);

// const num = [2,4, [3,5]];
// const [a , ,[i]] = num;
// console.log(a, i);

// let {mainMenu: food2, location: place} = restaurant; 


// console.log(restaurant.categories?.[6]); // optional chaining

// let arr = [1,0,5];

// for (let r of arr){
//     console.log(restaurant.categories?.[r]);
// }

// for(let key of Object.keys(restaurant)){
//     console.log(key);
// }

// const stuff = Object.values(restaurant);
// console.log(stuff);

// const morStuff = Object.entries(restaurant);
// for(let {m, open} of morStuff){
//     console.log(m);
//     console.log(open);
   
// }

// const ordersSet = new Set(['shit','bob','god',88,'shit']);

// console.log(ordersSet);

// const time = 21;
// const rest = new Map();
// rest.set(true,'We are open!');
// rest.set(false,'we are closed');
// console.log(rest.get(true));
// rest.set('open',11);
// rest.set('close',23);
// rest.get(time > rest.get('open') && time < rest.get('close'));

// const question = new Map([['question', 'What is the best programming language'], 
// [1,'c'],
// [2,'Java'],
// [3,'JavaScript'],
// ['correct', 3],
// [true, 'correct'],
// [false, 'Try again']]);

// const yourPlace = new Map(Object.entries(restaurant));

// for(let [key, values] of question){
//     if(typeof key === 'number'){
//         console.log(`Answer ${key} : ${values}`);
//     }
// }

// (function() {
//     console.log('once');
// })(); 

// (() => {
//     console.log('work');
// })();

// {
    
// }
// const booking = function() {
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount}`);
//     }
// }

// let booker = booking();
// booker();
// booker();
// booker();
// console.dir(booker);


// const answer = Number(prompt('Your answer:'));
// question.get(question.get('correct') === answer)
// question.get(answer == 3)


// for(let s of stuff){
//     console.log(s);
    
// }

let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a *2);
    }
}

const h = function(params) {
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
}

// const x = function(){
//     const j =90;
//     f = function(s,r,y,){
//         s();
//         r();
//         return console.log(s + r );
//     }
// }

// g();
// f();
// h();
// f();
// x(g,h);
// f();