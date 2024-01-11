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
