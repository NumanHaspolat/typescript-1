const btn = document.querySelector(".submit")!;
const first = document.getElementById("i1")! as HTMLInputElement;
const sec = document.getElementById("i2")! as HTMLInputElement;
const res = document.querySelector(".res")! as HTMLDivElement;

//!  let x = 9; // x'in Type Number
//!  x = "1";   Type 'string' is not assignable to type 'number'. Let olsa bile typei'na uygun bir atama yapmalisin.

//* noEmitOnError : bu ayar true olursa , ts dosyasinda hata olmadigi zaman app dosyasini paylasir.Dumenden bi ayar.

//?  "removeComments": true, eger bu true ise , ts de yasdigin commentlari app js e gondermez.

//! tsc -w , canli compile etmesi icin.

const add = (f: number, s: number) => {
  //? I give ` number ` my parameters in this function . cause ts should be know , what type is that ?
  return f + s;
};

btn.addEventListener("click", () => {
  res.innerText = `${add(+first.value, +sec.value)}`;
});

let n: number = 5;
//! n = "!"; Type 'string' is not assignable to type 'number'.

let aa; //? Variable 'aa' implicitly has an 'any' type, Ilk deger atamasi yapmadigim icin any olarak calisiyor.
aa = 5;
aa = false;
aa = "five";

let thisIsAny: any = "any";
thisIsAny = 3;
thisIsAny = true;

let manualAny: any = 4; //? Istedigimi verebilirim (any) , suan bir type checking yok.
manualAny = "oo";
manualAny = false;

let counter: number;
counter = 1;
//? counter = "This is String";   Type 'string' is not assignable to type 'number'.

//? ------- ARRAY --------

let myARR = ["Foods", false, 7];
//? myARR bildigimiz js deki array ve bunun sabit bir typei yok , istedigim typeda icerik verebilirim.EGER arrayimin icinde sadece string veya sadece number olsaydi TS ona gore arrayin typini kendi ayarlardi.Asagidaki gibi ==>

let arr = [1, 2, 3, 4, 5];
//? Arrayde sadece number oldugu icin ,Ts bunun typeini 'number' olarak ayarladi ve asagida yaptigim gibi push ile veya baska bir sekilde , number disinda bir deger ekleyemem.
//!  arr.push("six");

let numerous: number[] = [1, 2, 3, 4];
//* number[] , string[] ... ekleyerek bunun bir number veya string arrayi oldugunu belirtir.

let str: Array<string> = ["uno", "des"]; //! ya da Array<type> ile anotation yapilabilir.

let empty: any[] = [2]; //? type :any ,

let forNums: number[] = []; //? Simdilik bos bir array ama ileride icine number alicak .

let arr4: readonly number[] = [1, 2, 3, 4];
//? arr4.push(5); Property 'push' does not exist on type 'readonly number[]'.
//* arr4.pop(); Property 'pop' does not exist on type 'readonly number[]'. Yani readonly verilenlere ekleme cikarma yapamazsin AMA override edebilirsin ve degerini degistirebilirsin ORNEGIN =>
arr4 = [10, 20, 30, 40, 50, 60]; //? Ama hala type i disinda birsy koyamam!

//! let mys: readonly string = "Numan"; 'readonly' type modifier is only permitted on 'array' and 'tuple' literal types. readonly sadece arraylere ve tuplelara verilebilirmis.

//? -------- TUPLES - DATA TYPE --------

let myTuple: [number, string, boolean] = [7, "Merhaba", true]; //? "Tuple literal" terimi, TypeScript dilinde kullanılan bir terimdir ve bir tuple (demet) türünün doğrudan bir değerle belirtildiği durumu ifade eder. Tuple, genellikle farklı türlerden oluşan sabit bir sayıda elemana sahip bir dizi gibidir.Kati bir DATA TYPE , Uzunlugu ve icindeki elemanlarin TYPEI sabit.

let example: [string, number];
example = ["Numan", 17]; //* Allowed
//! example = [12, "Hiii"];  Not Allowed

let example2: [number, string][]; //? Baska bir syntax sekli.
example2 = [
  [12, "Alex"],
  [22, "Martin"],
];

let example3: [number, boolean] = [2, false];
//! example3 = [3, true, 2];
//! Type '[number, true, number]' is not assignable to type '[number, boolean]'.
//! Source has 3 element(s) but target allows only 2.

//? Ama tuple larda bir sorun , eger push yaparsaniz typei veya uzunlugunu onemsemez ,ekler veya cikarir (pop , push) ORNEGIN =>

example3.pop();
//* example3.push("11");
console.log(example3);

//! More Example
let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];
ourTuple.push("Something new and wrong");
console.log(ourTuple);

//? -------- ENUM - DATA TYPE --------

enum Role { //? Icindeki degerler 0 1 2 3 ... diye gider , eger ki ben ozel bir atama yapmazsam.
  User,
  Cleaner,
  Admin = 7,
}

let currentUser: Role = Role.User;
console.log(currentUser); //!  0

currentUser = Role.Cleaner;
console.log(currentUser); //!  1

currentUser = Role.Admin;
console.log(currentUser); //!  7

// const enum Role2 {
//   Admin,
//   User,
// }

// let user1: Role2 = Role2.Admin;
// let user2: Role2 = Role2.User;
//? const ile tanimladigimizda , app js de daha anlamli ve sade.

enum Tshirt {
  Small = "S",
  Medium = "M",
  Large = "L",
  XL = 10,
  XXL,
  false,
}

console.log(Tshirt.Small);
console.log(Tshirt.XL); //? 10
console.log(Tshirt.XXL); //? 11
console.log(Tshirt.false); //? 12 sonra hep ++++...

//? Enum example

enum StatusCode {
  Error = 404,
  Success = 200,
  Accepted = 202,
  BadReq = 400,
  good,
}

const err: StatusCode = StatusCode.Error;
console.log(err);
console.log(StatusCode.good); //? 401

//* -------- UNKNOWN - DATA TYPE --------

let notSure: unknown;
notSure = "aaa";
notSure = true;
notSure = 2;

//? let newVar: number = notSure;
//! Type 'unknown' is not assignable to type 'number' , 'string' or any types.Sadece ANY ye atanabilir

let anyVar: any = notSure;

let newVar: number = notSure as number;
//* console.log(newVar); Output = 2
//? Seklinde yazilmalidir eger unknownu baska bir yerde type vererek kullanicaksak.

//* -------- VOID - DATA TYPE --------

function addon(n1: number, n2: number): number {
  //! Onceden burasi voiddi cunku sadece clg vardi ama ben bir number return etsin istedim ve asagidaki resultta da number type i olucak , hata vermeyecek.Eger void olup return etmeye calissaydim error alicaktim.
  //? Eger bu function bir seyi return etmiyorsa VOID verilmeli.
  //* console.log(n1 + n2);
  return n1 + n2;
}

let result: number = addon(7, 13);
console.log(result);
//! Type 'void' is not assignable to type 'number'. Sen buna number verdin ama bu foksiyon birsey dondurmuyor.

//? -------- NEVER - DATA TYPE --------

const error = (message: string): never => {
  //* Never tipi, bir fonksiyonun normal bir şekilde tamamlanmayacağını belirtmek için kullanılır. Örneğin, bir fonksiyon her zaman bir hata fırlatıyorsa veya bir döngü içinde sonsuz bir şekilde çalışıyorsa, bu fonksiyonun never tipini kullanabilirsiniz.
  throw new Error(message);
};

//* error("404 NOT FOUND!!");
//! app.js:83 Uncaught Error: 404 NOT FOUND!!
//!     at error (app.js:83:11)
//!     at app.js:85:1

//? -------- UNION (Birlesim) - DATA TYPE --------

let uVar: string | number; //* Bunun degeri ya string ya da number olabilir.
uVar = 17;
uVar = "Numan";
//! uVar = true; Type 'boolean' is not assignable to type 'string | number'.
console.log(uVar.includes("a"));

//? -------------------- TYPE Aliases --------------------

//!  type Nums = {
//!    firt: number;
//!    sec: string;
//!  };

type MyType = number | string;

//* function add(n1: MyType, n2: MyType){
//*  }

//? -------------------- String Literals --------------------

type car = "Lambo" | "Ferrari";

//! let car1: car = "Bmw"; ---- Type '"Bmw"' is not assignable to type 'car'.

let car2: car = "Lambo";

//? -------------------- Intersection --------------------

//* Object Seklinde =>

const employee: {
  name: string;
  id: number; //? Eger id?: number; ---- seklinde yapip ? ekleseydim , opsiyonel olucakti ve asagida id yi kullanmak zorunda kalmicaktim.Ama id ye ? koymadim ve kullanmak zorundayim.
  getId(): void;
} = {
  //! name = 2, ----- Type 'number' is not assignable to type 'string'.
  name: "Numan",
  id: 2,
  getId() {
    console.log(this.id);
  },
};

//? ------------ Diger Yontem ----------->
type Book = {
  book_id: number;
  book_name: string;
};

type Author = {
  Auth_id: number;
  Auth_name: string;
};

type intersected_type = Book & Author;

let obj: intersected_type = {
  book_id: 1,
  book_name: "Sefiller",
  Auth_id: 9,
  Auth_name: "Victor Hugo",
  //! Book ve Author objelerinin icindeki tum keyleri kullanmak zorundayim . Cunku & koyduk , bunun yerine | koymayi da dene.
};

//? -------------------- Type Assertions --------------------

let studentCount: unknown = "472";

//! console.log(studentCount.split("")); --- Property 'split' does not exist on type 'unknown'.

console.log((studentCount as string).split("")); //*  (3) ['4', '7', '2']
//? Ama bu Assertions sadece bulundugu satir icin gecerli ve kalici degildir.

//! console.log(studentCount.split("")); --- Property 'split' does not exist on type 'unknown'.

//? -------------------- Functions --------------------

function greeting1(greet: string, name: string): string {
  return `${greet} ${name ? name : "User"}!`;
}

console.log(greeting1("Selam", "Numan"));

function greeting2(greet: string, name?: string): string {
  //? Optional eklendi name'e.Artik name'i kullanmasam da olur ama 2 den fazla deger yazamam.
  //? "Selam", "Numan" , "Has" --- Hata vericek. Expected 1-2 arguments, but got 3.
  return `${greet} ${name ? name : "User"}!`;
}

console.log(greeting2("Naber"));

//? -------------------- Functions - Overloading --------------------

function Add(a: string, b: string): string;
function Add(a: number, b: number): number;

function Add(a: any, b: any): any {
  return a + b;
}

console.log(Add("Bunu ", "Ekle")); //* Bunu Ekle
console.log(Add(3, 7)); //* 10
//! console.log(Add("2", 7));  Error

//? -------------------- Rest Parameters --------------------

// function easy(...n: number[]) { Bu benim yaptigim...
//   let total = 0;
//   n.forEach((e) => (total += e));
//   console.log(total);
// }

//* easy(1, 2, 123, 1);   127

function resting(num: number, ...numbers: number[]) {
  let total = num;
  numbers.forEach((number) => (total += number));
  console.log(total);
}

resting(1, 2); //? 3
resting(92, 212, 33, 12, 123, 123, 132, 2); //? 729
