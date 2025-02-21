// data types - типы данных - маалымат типтери
// Number - число - сан
let someNumber = 12;
let anotherNumber = 14.5;
let sumOfTwoNumbers = someNumber + anotherNumber;
console.log(sumOfTwoNumbers);
let infinityNumber = 1 / 0;
console.log(infinityNumber); // Infinity - бесконечность - чексиз сан
console.log("Aibek" * 2); // NaN - Not a Number - сан эмес
// typeof оператору
console.log(typeof someNumber);
console.log(typeof anotherNumber);

// BigInt - чон сан - большое число
let money = 123123123123123456n;
console.log(typeof money);

// String - сап - строки
let str = "Nurbek";
let str2 = "Bul duino keremet!";
let phrase = `Menin atym ${str}`;
let str3 = str + str2;
console.log(str3);

//Boolean - логикалык тип
let nikeluu = true;
let baktyluu = true;
let jaman = false;
let chonby = 4 > 1;
console.log(chonby);

// Null - ноль
let someVariable = null;
console.log(someVariable);
console.log(typeof someVariable);

// Турлорду озгортуу
/*
Булеан өзгөртүү эрежелери:
1) 'бош' деп эсептелген маанилер, мисалы 0, бош сап "", null, undefined жана NaN, false болуп калат.
2)Башка маанилер true болуп калат.
*/
/*
let ozgormo = 5 + 3 - 2; // 4 операнд, 3 оператор = + -

let x = 1;
x = -x; // унардык - оператору
alert(x); // -1, унардык терс кылуу оператору иштеди

let y = 1,
  z = 3;
alert(z - y); // 2, эки операндысы (z, y) бар
// бинардык минус оператору аткарылды
*/
// Маткматикалык операторлор
/*
let san = 100;
san = -san;
console.log(san);

let x = 2;
let y = 5;
let summa = x + y;
console.log(summa);

// + - * / % **

console.log(5 % 2);
console.log(7 % 3);

console.log(2 ** 3);

let s = "my" + "string";
console.log(s);

let z = "5" + 6; // 11 emes 56
console.log(z);
console.log(1 + 2 + "3"); // 123 emes 33
console.log(1 + 2 - "3");
console.log(1 + 2 - true);

let n = 2;
console.log(++n);
console.log(n);

// Салыштыруу
console.log(5 > 2);
console.log(5 < 6);
console.log(3 == 3);
console.log(4 >= 2);
console.log(4 <= 6);
console.log(5 == "5");
console.log(5 === "5");

let result = true == 1;
result = false === 0;
console.log(result);
console.log("A" + "Z");
*/
/*
let shart = false;
if (undefined) {
  console.log("Билдируу чын!");
} else {
  console.log("Билдируу жалган");
}


let birinchiSan = prompt("Birinchi san:");
let ekinchiSan = prompt("Ekinchi san:");
let uchuncuSan = prompt("Uchunchu san:");

let alertText = "Бул сан эн чон: ";

// Биринчи сан чон
if (birinchiSan > ekinchiSan && birinchiSan > uchuncuSan) {
  alert(alertText + birinchiSan);
} else if (ekinchiSan > birinchiSan && ekinchiSan > uchuncuSan) {
  alert(alertText + ekinchiSan);
} else {
  alert(alertText + uchuncuSan);
} */
/*
for (let n = 1; n < 10; n++) {
  console.log("Begin");
  break;
  console.log("End");
  if (n % 2 == 0) {
    console.log(n + " бул жуп сан");
  } else {
    console.log(n + " бул так сан");
  }
}
*/
/*
function sayHello() {
  console.log("Hello!");
}

sayHello();

doMathOperations(2, 3);
let alertMessage = "Операциялардын жыйынтыгы:";
// Математикалык амалдарды аткаруу
function doMathOperations(a, b) {
  let sum = a + b;
  let substraction = a - b;
  let division = a / b;
  let multiplication = a * b;
  alertResultsOFMathOperations(sum, substraction, division, multiplication);
}
// Жыйынтыкты чыгаруу
function alertResultsOFMathOperations(
  sum,
  substraction,
  division,
  multiplication
) {
  alert(alertMessage);
  alert("Сумма - " + sum);
  alert("Кемитуу - " + substraction);
  alert("Болуу - " + division);
  alert("Кобойтуу - " + multiplication);
}
*/

// Objects

/*
const age = 27;               // number
const isMarried = false;      // boolean
const firstName = "Salavat";  // String
const children = null;        // null
const weight;                 // undefined
const welth = 3000000000000n  // BigInt
*/
/*
const telegramAccount = {};
const facebookAccount = new Object();

const instagramAccount = {
  login: islamov,
  pwd: qwerty123,
  isVerified: false,
  "is private": false,
  sayHello: () => console.log("Hello, I am " + this.login),
  adress: {
    country: Germany,
    city: Chemnitz,
  },
};

console.log(instagramAccount);
console.log(instagramAccount.login);
instagramAccount.sayHello();

// Square brackets
console.log(instagramAccount["is private"]);

//adding properties on the fly
instagramAccount.yearOfRegistartion = "2020";

delete instagramAccount;

// dynamic craring of object
function createUser(nameParam, ageParam) {
  return {
    name: nameParam,
    age: ageParam,
  };
}

// Checking of  existance
console.log("abc" in instagramAccount);


// looping in object
for()
*/

// object copy 1 part
/*
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete

*/

// Object copy 2
//Cloning and merging, Object.assign

/*
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true


let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

*/

// Object copy part 3
/*
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related

*/

/*
let user = {
  name: "John",
  f: function () {
    console.log(this.name);
  },
};

let admin = user;
admin.name = "Sala";
user = null;

admin.f();
*/

// arrays 2 lesson
//
//let arr = new Array();
//let arr = [];
/*
let fruits = ["Alma", "Apelsin", "Alcha"];
console.log(fruits[0]);
console.log(fruits[1]);

fruits[2] = "Shabdaly";
console.log(fruits[2]);

// mix of values
let arr = [
  "Alma",
  { name: "Asan" },
  true,
  function () {
    console.log("Salam");
  },
];

console.log(arr[1].name);
console.log(arr[3]());

console.log(fruits.length);
fruits[3] = "Almurut";
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
*/

let massiv = [2, 3, 4];
