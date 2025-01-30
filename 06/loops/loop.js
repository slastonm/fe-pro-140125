let users = [
    { name: 'Оля', age: 19 },
    { name: 'Іван', age: 20 },
    { name: 'Марія', age: 15 },
    { name: 'Петро', age: 25 },
  ];

// let filterUsers =[];
// for(let i =0; i<users.length; i++){
//     if(users[i].age>18){
//         filterUsers.push(users[i]);
//     }
// }


let filterUsers = users.filter((value)=>value.age>18);
console.log(filterUsers);

let cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2018, colors:['black'] },
    { brand: 'Honda', model: 'Civic', year: 2020 },
    { brand: 'Ford', model: 'Focus', year: 2017 },
    { brand: 'Toyota', model: 'Camry', year: 2021 },
];

// console.log(cars[0].year);
// console.log(cars[0].model);
// console.log(cars[0].brand);
// console.log(cars[0].colors[0]);

let toyota = { brand: 'Toyota', model: 'Corolla', year: 2018, colors:['black'] }
// console.log(toyota.brand);


let filterModelValue = 'Toyota';
let filterYearValue = 2020;

let freshCars = cars.filter((value)=>value.brand === filterModelValue && value.year >=filterYearValue);
console.log(freshCars);


for(let value of cars){
    console.log(value);
    // console.log(`Car info ${value.brand} production year ${value.year}`);
}

// for(let value of toyota){
    //Не працює для обєктів
//     console.log(value);
// }

// for in


for(let key in toyota){
    console.log(toyota[key]);
}


