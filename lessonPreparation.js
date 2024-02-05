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
