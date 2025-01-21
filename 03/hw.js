let number1 = 20;
let number2 =20;

// let compareResult = `Значення 1 та 2 однакові ? ${number1 === number2}`;

// alert(compareResult);
// alert(`Значення 1 та 2 однакові ? ${number1 === number2}`);

let userNumber = Number(prompt('Напишіть число'));
let checkNumber = `Це число є парне? ${userNumber%2 === 0}`
console.log(checkNumber);


let productPrice = Number(prompt('Вкажіть ціну товару'));
let productQuantity = Number(prompt('Вкажіть кількість товару'));

let totalPrice = productPrice*productQuantity;
console.log(`Сумарна вартість ${totalPrice}`);


let oldPrice = Number(prompt('Початкова ціна'));
let disount = oldPrice*0.5; // (oldPrice/100)*30;
let finalPrice = oldPrice - disount;
console.log(`Оплата зі знижкою ${finalPrice}`);