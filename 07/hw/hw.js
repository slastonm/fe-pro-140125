class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello my name is ${this._name} age ${this._age}`);
    }
}

let johnObj = new Person('John', 30);
console.log(johnObj);
johnObj.sayHello();

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
    study(){
        console.log(`This student ${this._name} with ID ${this._studentId}`);
    }
}

let BobStudent = new Student('Bob', '29', 'id:123');
console.log(BobStudent);
BobStudent.study();
BobStudent.sayHello();