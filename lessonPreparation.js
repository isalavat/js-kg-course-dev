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
