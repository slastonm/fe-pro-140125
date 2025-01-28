let myObj = new Object();
let simpleObj = {};

console.log(myObj);
console.log(simpleObj);

simpleObj.material = 'Metal';
console.log(simpleObj);
console.log(simpleObj.material);
simpleObj['price'] = '100$'; //dynamic key
console.log(simpleObj);

let keysNames = ['model', 'ram', 'memory'];
let valueForItem = ['Apple', '16gb', 512];
keysNames.forEach((value, index)=>{
    simpleObj[value] = valueForItem[index]
});

console.log(simpleObj);

let laptop = {
    model:'Hp',
    ram: '32gb',
    memory:1012,
    colors:['silver', 'black', 'orange'],
    price: {
        priceValue: 1000,
        priceCurency: '$'
    },
    infoAbout: function(){
        console.log(`${laptop.model} ram: ${laptop.ram} price info ${laptop.price.priceValue} ${laptop.price.priceCurency}`);
    }
}

laptop.procesor = 'Razen';

// console.log(laptop.infoAbout);
laptop.infoAbout();

laptop.price.priceValue = 999;

console.log(laptop);

laptop.colors.forEach((value)=>{
    console.log(value);
});

delete laptop.infoAbout;
delete laptop.colors;

console.log(laptop);

