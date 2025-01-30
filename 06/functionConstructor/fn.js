

let userNameValue = {
    userName:'Tom',
    userPhone:12345,
    // userInfo:function(){
    //     console.log(`User ${this.userName} phone number: ${userNameValue.userPhone}`);
    // }
    userInfo:()=>{
        console.log(`User ${this.userName} phone number: ${userNameValue.userPhone}`);
    }
}

userNameValue.userInfo();

let myArr = new Array(3);
console.log(myArr);
myArr.push(12);
myArr.push(122);
myArr.push(1222);

for(let value of myArr){
    console.log(value);
}



function Book(title, autor, year){
    this.title = title;
    this.autor = autor;
    this.year = year;
    // this.showInfo = function(){
    //     console.log(`Book info ${this.title} and ${this.autor}`);
    // }
} 

Book.prototype.showInfo = function(){
        console.log(`Book info ${this.title} and ${this.autor}`);
    }

let firstBook = new Book('Harry Potter', 'J.Rowling', 1997);
let secondBook = new Book('Harry Potter 2', 'J.Rowling', 1998);


console.log(firstBook);
console.log(secondBook);

firstBook.showInfo();


// for(let key in firstBook){
//     console.log(firstBook[key]);
// }

class BookClass{
    constructor(title, autor, year){
        this._title = title;
        this._autor = autor;
        this._year = year;
    }
    showInfo(){
        console.log(`Book info ${this._title} and ${this._autor}`);
    }
    get howOld(){
        return 2025 - this._year;
    }
    get title(){
        return this._title
    }
    get year(){
        return this._year
    }
    set title(value){
        this._title = `New titel bestsler book ${value}`
    }
    static createObjFromCsv(value){
        const [title, autor, year] = value.split(',');
        return new BookClass(title, autor, year);
    }
}

let thirdBook = new BookClass('Harry Potter 3', 'J.Rowling', 1999);
console.log(thirdBook);
thirdBook.showInfo();

// console.log(thirdBook.year);

console.log(thirdBook.howOld);
console.log(thirdBook.year);
console.log(thirdBook.title);
thirdBook.title = 'Spider Man';
console.log(thirdBook);

// let newBook = thirdBook.createObjFromCsv('Tes, hello, 2000');
let newBook = BookClass.createObjFromCsv('Tes, hello, 2000');
console.log(newBook);


class Product{
    constructor(name, price){
        this._name = name;
        this._price = price;
    }
    getInfo(){
        console.log(`${this._name} has price ${this._price}`);
    }
}


class Electronics extends Product{
    constructor(name, price, type){
        super(name, price)
        this._type = type;
    }
    getElectronicInfo(){
        console.log(`${this._name} category ${this._type}`);
    }
}

let milkProduct = new Product('milk', 60);
let laptopProduct = new Electronics('Hp', 900, 'laptop');

console.log(milkProduct);
console.log(laptopProduct);

laptopProduct.getInfo();
laptopProduct.getElectronicInfo();


class Basket{
    constructor(){
        this._products = [];
    }
    addProduct(product){
        this._products.push(product);
    }
    get totalPrice(){
        let price = 0;
        this._products.forEach(item=>price+=item._price);
        return price;
    }
}

let userBasket = new Basket();
console.log(userBasket);
userBasket.addProduct(milkProduct);
userBasket.addProduct(laptopProduct);
console.log(userBasket);

let userShopingResult = userBasket.totalPrice;
console.log(userShopingResult);