let message;

message = "Салам!";

message = "Дуйно!";

console.log(message);

let meninBirichiMugalimim = "Гапыр агай";

let secondName = "Asanov",
  nationality = "kyrgyz";

const myBirthDay = "01.01.2000";
myBirthDay = "14.11.2001";

let n = 123; // Бутун сан
n = 12.345; // Болчок сан

// Арттагы "n" белгиси сандын BigInt экенин аныктайт
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Салам";
let str2 = "Бир тырмакча дагы колдонулат";
let phrase = `башкаларын дагы камтый алат ${str}`;

let nikeluu = true; // ооба, ал никелуу
let deputat = false; // жок, ал депутат эмес
let isGreater = 4 > 1; // ооба, 4 1ден чон

// Атайын аныкталган бош маани
let age = null;

// Undefined - мааниси аныкталган эмес
let dateOfBirth;

let variable = "Кыргыз тили";
const million = 1000000;
let someVariable = 213; // Сан
someVariable = "Бишкек"; // Сап

// Java тилиндеги статикалык типтештируу
//int numericVariable = 323

let apples = "2";
let oranges = "3";
// экөө тең бинардык плюс операциясына чейин сандарга айлантылат
alert(+apples + +oranges); // 5

let asandynJashy = 5;
let usondunJashy = 3;

//  Boolean         1-операнд       2-операнд
let asanChongbu = asandynJashy > usondunJashy;
let asanUsonTenbi = asandynJashy == usondunJashy;
console.log(asanChongbu); // true-чын
console.log(asanUsonTenbi); // false-жалган

let trafficLight = "жашыл";

if (trafficLight == "жашыл") {
  console.log("Жолдун аркы бетине отсо болот!");
} else {
  console.log("Жолдун аркы бетине отсо болбойт!");
}

let shart;
let shart1;
let shart2;

if (shart) {
  // 1-Инструкция
}

if (shart) {
  // 1-Инструкция
} else {
  // 2-Инструкция
}

if (shart1) {
  // 1-Инструкция
} else if (shart2) {
  // 2-Инструкция
} else {
  // 3-Инструкция
}

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

alert(!true); // false
alert(!0); // true

// if else жана логикалык оператор
/*let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Оффис жабык.' );
}*/

// if else жана логикалык оператор
/*let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("Оффис жабык."); // Дем алыш!
}*/

/*let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder*/
/*
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

if (1 && 0) {
  // томондогудой бааланат - true && false
  alert("Иштебейт, анткени жыйынтык жалган!");
}

alert("Циклга чейин");

while (shart) {
  // сиздин код
  // "циклдын денеси"
}

alert("Циклдан кийин");

let jalpyAralyk = 2000;
let churkalganAralyk = 0;
let ailampa = 500;
alert("Старт");

while (churkalganAralyk < jalpyAralyk) {
  churkalganAralyk += ailampa;
  alert(churkalganAralyk);
}

alert("Финиш");

for (begin; condition; step) {
  // ... loop body ...
}

let i = 0;

for (i = 0; i < 3; i++) {
  // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
*/
/*
// Бул жерде жума күнүнүн аты дайындалган өзгөрмө
let kun = "Шейшемби";

// switch жарыясы kun өзгөрмөсүнүн маанисин текшерет
switch (kun) {
  case "Дүйшөмбү": // Эгерде kun "Дүйшөмбү" болсо
    console.log("Жумуштун биринчи күнү");
    break; // break менен бул блоктон чыгабыз
  case "Шейшемби": // Эгерде kun "Шейшемби" болсо
    console.log("Жумуштун экинчи күнү");
    break; // бул жерден чыгабыз
  // КОД АТЙЫЛАП КЫСКАРТЫЛДЫ
  case "Жекшемби": // Эгерде kun "Жекшемби" болсо
    console.log("Дем алыштын экинчи күнү");
    break; // бул жерден чыгабыз
  default: // Эгерде башка эч кандай case туура келбесе
    console.log("Мындай күн жок");
    // default блогу ар дайым switch жарыясынын аягында жазылат
}


// Бул код kun өзгөрмөсүнүн маанисине жараша белгилүү бир текстти чыгарат.



let month = "August";

if (month === "December" || month === "January" || month === "February") {
  console.log("Кыш мезгили");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("Жаз мезгили");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("Жай мезгили");
} else if (month === "September" || month === "October" || month === "November") {
  console.log("Күз мезгили");
} else {
  console.log("Мындай ай жок");
}
*/
let month = "August";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Кыш мезгили");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Жаз мезгили");
    break;
  // код кыскартылган
  default:
    console.log("Мындай ай жок");
}

function koshuu(a, b) {
  let summa = a + b;
  return summa;
}

let result = koshu(5, 7);

console.log(result); // 12 деп чыгарат

console.log(koshu(2, 2)); // 4 деп чыгарат
