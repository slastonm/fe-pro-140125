// == Виконує порівняння двох значень з приведенням типів

console.log(`Comare result 2 and 3 ${2 == 3}`);
console.log(`Comare result 2 and 2 ${2 == 2}`);
console.log(`Comare result 2 and '2' ${2 == '2'}`);
console.log(`Comare result 1 and true ${1 == true}`);
console.log(`Comare result 'Max' and 'max' ${'Max' == 'max'}`);
console.log(`Comare result '2' and '3' ${'2' == '3'}`);

// === Виконує порівняння двох значень без приведення типів

console.log(`Comare result === 2 and 3 ${2 === 3}`);
console.log(`Comare result === 2 and 2 ${2 === 2}`);
console.log(`Comare result === 2 and '2' ${2 === '2'}`);
console.log(`Comare result === 1 and true ${1 === true}`);
console.log(`Comare result === 'Max' and 'max' ${'Max' === 'max'}`);
console.log(`Comare result === '2' and '3' ${'2' === '3'}`);

// != Виконує порівняння двох значень з приведенням типів
// !== Виконує порівняння двох значень без приведення типів

console.log(`!= !==`);
console.log(`Compare result 2 and 3 ${2 != 3}`);
console.log(`Compare result 2 and 3 ${2 !== 3}`);
console.log(`Compare result 2 and '2' ${2 != '2'}`);
console.log(`Compare result 2 and '2' ${2 !== '2'}`);

console.log(`Compare result 1 and true ${1 != true}`);
console.log(`Compare result 1 and true ${1 !== true}`);


// > < >= <=

// > Більше
console.log('>');
console.log(`2>3 ${2>3}`);
console.log(`'2'>3 ${'2'>3}`);
console.log(`20>3 ${20>3}`);

// < Менше

console.log('<');
console.log(`2<3 ${2<3}`);
console.log(`'2'<3 ${'2'<3}`);
console.log(`20<3 ${20<3}`);

// >= Більше або дорівнює

console.log('>=');
console.log(`2>=3 ${2>=3}`);
console.log(`3>=3 ${3>=3}`);
console.log(`20>=3 ${20>=3}`);

// <= Менше або дорівнює

console.log('<=');
console.log(`2<=3 ${2<=3}`);
console.log(`3<=3 ${3<=3}`);
console.log(`20<=3 ${20<=3}`);

// || Логічне І і 
// true && true = true
// false && true = false
// true && false = false
// false && false = false

let userAge = 200;
let checkAge = userAge > 18 && userAge < 60;
let userName = 'admin';
let checkName = userName === 'admin';
let userPermission = checkAge && checkName;
console.log(`User permission ${userPermission}`);

// || Логічне АБО або или or
// true || true = true
// false || true = true
// true || false = true
// false || false = false

let useSkill = 'html';
let useSkill2 = false;
let useSkill3 = false;

let checkSkill = useSkill === 'html' || useSkill2 === 'css' || useSkill3 === 'git';
console.log(`Check skill ${checkSkill}`);







