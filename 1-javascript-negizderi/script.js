// Маани деген эмне?
/*
console.log("Mirbek");
console.log(18);

// Озгормо деген эмне?
let firstName = "Mirbek";
console.log(firstName);
//let firstName = "Nurbek"; мындай инструкция ката!
firstName = "Nurbek";
console.log(firstName);

let age = 18;
age = 19;
console.log(age);

// Озгормону кантип жарялайбыз?
let secondName;
secondName = "Asanov";
console.log(secondName);

let secondName = "Asanov",
  nationality = "kyrgyz";
console.log(secondName, nationality);

// Озгормонун аталышындагы чектоолор
//let 1job = "Chach tarach";
// let menin-birinchi-mugalimim = "Дуйшон";
//let function;
//let return;
let job1 = "Chach tarach";
let $myProffession = "Programmer";
let _test = "Test";
let menin_birinchi_mugalimim = "Дуйшон";
// Озгормоону туура атоо (camel case)
let meninBirichiMugalimim = "Гапыр агай";
let a = "Гапыр агай";

let myFirstJob = "barber";

var myVariable = "Test";
console.log(myVariable);
let profession;
console.log(profession);

// Контстанта деген эмне
const myBirthDay = "01.01.2000";
console.log(myBirthDay);
*/

/*
// Data types - маалымат типтери
// Number - сан
let someNumber = 14;
let anotherNumber = 15.6;
let sumOfTwoNumbers = someNumber + anotherNumber;
console.log(sumOfTwoNumbers);
// Inifinity - чексиз сан
let infinityNumber = 20 / 0;
console.log(infinityNumber);
// NaN - Not a number - сан эмес
console.log("Aibek" * 23);
console.log(typeof someNumber);
console.log(typeof anotherNumber);

// BigInt - чон сан
let money = 1231231232132323n;
console.log(typeof money);

// String - сап (текст)
let str = "Nurbek";
let str2 = "Jashoo keremet!";
let phrase = `Menin atym ${str} ${str2}`;
console.log(phrase);
let phrase2 = str + " " + str2;
console.log(phrase2);
console.log(typeof phrase);

// Boolean - логикалык тип (чын же жалган)
let nikeluu = true;
let baktyluu = true;
console.log(baktyluu);
let isGreater = 4 > 1;
console.log(isGreater);
console.log(typeof nikeluu);

// Null - ноль
let someVariable = null;
console.log(someVariable);
console.log(typeof someVariable);

// Undefined - аныкталбаган
let someVariable2;
console.log(someVariable2);
console.log(typeof someVariable2);
*/

// Браузер менен интеракция
/*
alert("Salam Dos!!");
let someValue = prompt("Sizdin jashynyz kanchda?", 40);
console.log(someValue);
let someValueOfConfirm = confirm("Siz baktyluusuzbu?");
alert(someValueOfConfirm);
*/

// Турлордун озгорулушу
// Сапка айландыруу
/*
let value = false;
console.log(typeof value);
value = String(value);
console.log(typeof value);
let someValue = 123;
someValue = String(someValue);
console.log(someValue);
console.log(typeof someValue);
// Сапка айлантуу көбүнчө ачык. false "false" болот, null "null" болот, ж.б.
*/
// Санга айландыруу
/*
console.log("6" / "2"); // 3
let str = "123";
let num = Number(str);
console.log(typeof num);
console.log(Number(" Aasdasdas ")); // NaN
console.log(Number(false));
// JavaScript Сандык Өзгөртүү Эрежелери
//
// | Маани (Value)   | Болуп Калат… (Becomes…)                      |
// |-----------------|----------------------------------------------|
// | undefined       | NaN                                          |
// | null            | 0                                            |
// | true жана false | 1 жана 0                                     |
// | string          | Башталышы жана аягындагы боштуктар алынат.   |
// |                 | Эгер калган сап бош болсо, натыйжасы 0.   |
// |                 | Андай болбосо, сан саптан "окулат".       |
// |                 | Ката кезинде NaN берилет.                    |
//
// Бул комментарийлер блогу JavaScript тилинде ар кандай маанилерди санга айландыруу
// процессин түшүнүүгө жардам берет.
*/

// Boolean алмаштыруу
/*
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Salam!")); // true
console.log(Boolean("")); // false

Булеан өзгөртүү эрежелери:
1) 'бош' деп эсептелген маанилер, мисалы 0, бош сап "", null, undefined жана NaN, false болуп калат.
2)Башка маанилер true болуп калат.

console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
*/

// Математикалык операторлор
/*
let san = 100;
san = -san;
console.log(san);
console.log(23 + 10);
console.log(23 - 10);
// Операторлор + - / * ** %
console.log(5 / 2);
// Калдык менен болуу
console.log(5 % 2);
console.log(8 % 3);
console.log(10 % 6);
// Даржага которуу
console.log(2 ** 2);
console.log(3 ** 3);
*/

// Саптарды + аркылуу бириктируу
/*
let s = "my" + "string";
console.log(s); // String concatenation
let z = 1 + "3";
console.log(z);
console.log(1 + 2 + "4"); // 124 emes 34
console.log("6" - 2);
console.log("6" * "2");
console.log("6" / "2");
*/

// Унардык + оператору аркылуу санга айландыруу
/*
let x = 2;
console.log(+x); // 2
let y = -3;
console.log(+y);

console.log(+true);
console.log(+false);
console.log(+"");
let oranges = "2";
let apples = "3";
console.log(oranges + apples); // 23 String concat
console.log(+oranges + +apples); // 5
*/

// Барбардык оператору =
/*
let x = 2 + 3 * 2;
console.log(x);
let b;
console.log((b = 1 + 4));
console.log(b);
let a, c, d;
a = c = d = 34 + 6; // жаман код
console.log(a);
console.log(c);
console.log(d);
// жакшыраак код
d = 34 + 6;
c = d;
a = c;
*/

// Modify in place - оз ордунан манисин алмаштыруу
/*
let n = 2;
n = n + 5; // 7
console.log(n);
let m = 3;
m = m * 5; // 7
console.log(m);

let l = 2;
l += 5; // l = l + 5
let k = 3;
k *= 5; // k = k * 5
console.log(l);
console.log(k);
*/
/*
// Increment, decrement
let i = 1;
// postfix form
i++; // increment - i = i + 1
console.log(i);
i++; // increment
console.log(i);

let k = 4;
// postfix form
k--; // decrement - k = k - 1;
console.log(k);

// prefix form
let n = 6;
++n;
console.log(n);

let counter = 8;
let counter2 = 8;
// posfix vs prefix
console.log(counter++);
console.log(++counter2);
console.log(counter);
console.log(counter2);
*/

// Cандарды салыштыруу
/*
console.log(5 > 3);
console.log(4 < 2);
console.log(6 == 6);
console.log(10 != 12);
console.log(13 >= 10);
console.log(18 <= 17);
let resultOfComparison = 5 == 4;
console.log(typeof resultOfComparison);
*/
// Ар кайсы типтеги маанилерди салыштыруу
/*
console.log(true == 1);
console.log(false == 0);
console.log(true === 1);
console.log(true === true);
*/
// Саптарды салыштыруу
/*
console.log("A" > "Z"); // Unicode A - 65, Z - 90
console.log("Azat" > "Azat test");
*/
/*
let isTrue = 5 > 4;
if (null) {
  console.log("Билдируу чын!");
} else {
  console.log("Билдируу жалган!");
}
*/
// if else шарттуу оператору
/*
let isExpressionTrue = 6 == 6;
if (isExpressionTrue) {
  console.log("Bildiruu chyn!");
} else {
  console.log("Bildiruu jalgan!");
} */
/*
let independenceYear = prompt("Кыргызстан эгемендуулукту качан алган?");

if (independenceYear == 1991) {
  alert("Сиздин жооп туура!");
} else {
  alert("Жооп туура эмес!");
}*/
/*
let birinchiSan = +prompt("Birinchi sandy kirigiziniz!");
let ekinchiSan = +prompt("Ekinchi sandy kirigiziniz!");

if (birinchiSan > ekinchiSan) {
  alert("Birinchi san " + birinchiSan + ", ekinchi sandan chong " + ekinchiSan);
} else if (ekinchiSan > birinchiSan) {
  alert(
    "Ekinchi san " + ekinchiSan + ", birinchi sandan " + birinchiSan + " chong"
  );
} else {
  alert("Eki san barabar!");
}*/

// логикалык операторлор
/*
let jash = 25;
let aidoochulukKubolukBar = true;
let koruusuJakshy = true;
let charchdyby = true;

// ЖАНА оператору
if (jash >= 18 && aidoochulukKubolukBar && koruusuJakshy && !charchdyby) {
  alert("Бул адам унааны айдаса болот!!!");
} else {
  alert("Бул адам унаа айдаса болбойт!!!");
}

// ЖЕ оператору
let kozAinekTagyshyKerek = !koruusuJakshy || charchdyby;
if (kozAinekTagyshyKerek) {
  alert("Бул адам коз айнек тагышы керек!!!");
} else {
  alert("Бул адам коз айнек такпай эле койсо болот!!");
}*/

// уч сандын кайсынысы чон
/*
let a = prompt("Биринчи санды киргиз!");
let b = prompt("Экинчи санды киргиз!");
let c = prompt("Учунчу санды киргиз!");

// Рефакторинг
const alertText = "Эн сон сан: ";

if (a > b && a > c) {
  alert(alertText + a);
} else if (b > a && b > c) {
  alert(alertText + b);
} else if (c > a && c > b) {
  alert(alertText + c);
} else {
  alert("Уч сан бири бирине барабар!");
}
*/

//console.log(true && (true || false) && true);

// Циклдар
/*
let kadam = 0;
console.log("Башы");

while (kadam < 5) {
  // Цикл денеси
  kadam++;
  console.log("Бобоктун " + kadam + "-кадамы!😊");
}

console.log("Аягы"); */
/*
for (let i = 1; i < 10; i++) {
  let jupSanby = i % 2 == 0;
  // continue, break

  //console.log("Before continue");
  //break;
  //console.log("After continue");

  if (jupSanby) {
    console.log(i + " бул жуп сан!");
  } else {
    //continue;
    console.log(i + " бул так сан!");
  }
} */
/*
let i = 3;

do {
  console.log(i);
  i--;
} while (i > 1);
*/

// Функциялар. Локалдык, глобалдык озгормолор жана аргумент
/*
//sayHello();
//let name = "Айбек"; // глобалдык озгормо
function sayHello(nameArg) {
  // let name = "Айбек"; // жергиликтуу озгормо
  console.log("Салам " + nameArg);
}

//console.log(name);

sayHello("Айгул");
sayHello("Айбек");
sayHello("Акылай");
*/
/*
function passportAlsaBolobu(jashKurak) {
  if (jashKurak >= 16) {
    return true;
  } else {
    return false;
  }
}

let jash = prompt("Сиздин жашыныз канчада?");
let result = passportAlsaBolobu(jash);
if (result) {
  alert("Паспорт алса болот!");
} else {
  alert("Паспорт алса болбойт!");
} */
/*
function funcA() {
  console.log("A");
  funcB();
}

function funcB() {
  console.log("B");
  funcC();
}

function funcC() {
  console.log("C");
}

funcA();
*/

// Hoisting
/*
sayHello();

// Function declaration - функция жарыясы
function sayHello() {
  console.log("Salam!");
}
// Function expression - функция билдируусу
let sayHello2 = function () {
  console.log("Salam!");
};

sayHello2();
*/

// Функция аргумент катары
/*
function surooUzat(suroo, ooba, jok) {
  if (confirm(suroo)) {
    ooba();
  } else {
    jok();
  }
}

function oobanyKorgoz() {
  alert("Siz makul boldunuz");
}

function joktuKorgoz() {
  alert("Siz makul bolgon joksuz");
}

surooUzat("Siz makulsuzbu?", oobanyKorgoz, joktuKorgoz);
*/
// Жебе функциясы - arrows function
/*
let sum = function (a, b) {
  let result = a + b;
  return result;
};

let sum2 = (a, b) => {
  let result = a + b;
  return result;
};

let sum3 = (a, b) => a + b;

function surooUzat(suroo, ooba, jok) {
  if (confirm(suroo)) {
    ooba();
  } else {
    jok();
  }
}

surooUzat(
  "Siz makulsuzbu?",
  () => alert("Siz makul boldunuz"), // анонимдуу функция
  () => alert("Siz makul bolgon joksuz") // анонимдуу функция
);
let alertMessage = "Операциялардын жыйынтыгы:";
doMathOperations(2, 3);

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
}*/

// Объектилер
/*
const age = 27;               // number
const isMarried = false;      // boolean
const firstName = "Salavat";  // String
const children = null;        // null
const weight;                 // undefined
const welth = 3000000000000n  // BigInt
*/
/*
let telegramAccount = {}; // empty object
const facebookAccount = new Object(); // empty object

let instagramAccount = {
  login: "islamov",
  password: "Qwerty123",
  age: 27,
  isVerified: false,
  "is private": true,
  address: {
    country: "Germany",
    city: "Chemntz",
  },
  sayHello: () => console.log("Salam!!!"),
};

console.log(instagramAccount.login);
console.log(instagramAccount.address.country);
instagramAccount.sayHello();
console.log(instagramAccount["is private"]);

instagramAccount.yearOfRegistration = "2022";
delete instagramAccount.address;
console.log(instagramAccount);

// Funktionyn jaradamy menen objektini jasoo
function createUser(userName, userAge) {
  return {
    name: userName,
    age: userAge,
  };
}

let user = createUser("Bobotik", "3");
console.log(user);

console.log("age" in instagramAccount);

// for in
/*
for (let property in instagramAccount) {
  console.log("Property Name -> " + property);
  console.log("Property Value -> " + instagramAccount[property]);
}

for (let key in console) {
  console.log("Oigonuu -> " + console[key]);
}*/
/*
let user = { name: "John" };
let admin = user;
admin.name = "Askar";
console.log(user.name);
console.log(admin.name);

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

let c = {};
let d = {};

console.log(c == d);

const user2 = { name: "Asan" };
user2.name = "Uson";
console.log(user2.name);

user2 = {};*/
/*
// Objektterdi kochuruu
let user = { name: "John" };

let permission1 = {
  // Uruksat
  canView: true,
};

let permission2 = {
  canEdit: false,
};

Object.assign(user, permission1, permission2);

permission1.canView = false;
permission2.canEdit = true;

console.log(user);

Object.assign(user, { name: "Askar" });
console.log(user);

let admin = Object.assign({}, user);
console.log(admin); */
/*
let user = {
  name: "John",
  olchomdoru: {
    boiUzundugu: 180,
    salmagy: 75,
  },
};

let clone = Object.assign({}, user);
//console.log(clone == user); //false
//console.log(clone.olchomdoru == user.olchomdoru); //true

// Strukturalyk kochuruu
let clone2 = structuredClone(user);
console.log(clone2 == user); //false
console.log(clone2.olchomdoru == user.olchomdoru); //false
*/

// Objektinin metoddoru jana "this"
/*
let user = {
  name: "Asan",
  age: 22,
  salamAit: function () {
    console.log(
      "Salam, meinin atym " + this.name + ", menin jashym " + this.age
    );
  },
};
// OOP
user.salamAit();
let admin = user;
admin.salamAit();
user = null;
admin.salamAit(); 

let user = { name: "Asan" };
let admin = { name: "Uson" };

function salamAit() {
  console.log(this.name);
}

user.sayHi = salamAit;
admin.sayHello = salamAit;
user.sayHi();
admin.sayHello();
*/

function User(paramName) {
  // this anyktalat js taraptan
  this.name = paramName;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log("Salam, bul men " + this.name);
  };
}

let user = new User("Kairat");
let admin = new User("Admin");
user.sayHi();
