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
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Salam!")); // true
console.log(Boolean("")); // false
/*
Булеан өзгөртүү эрежелери:
1) 'бош' деп эсептелген маанилер, мисалы 0, бош сап "", null, undefined жана NaN, false болуп калат.
2)Башка маанилер true болуп калат.
*/
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
