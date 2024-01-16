const btn = document.querySelector(".submit");
const first = document.getElementById("i1");
const sec = document.getElementById("i2");
const res = document.querySelector(".res");
const add = (f, s) => {
    return f + s;
};
btn.addEventListener("click", () => {
    res.innerText = `${add(+first.value, +sec.value)}`;
});
let n = 5;
let aa;
aa = 5;
aa = false;
aa = "five";
let thisIsAny = "any";
thisIsAny = 3;
thisIsAny = true;
let manualAny = 4;
manualAny = "oo";
manualAny = false;
let counter;
counter = 1;
let myARR = ["Foods", false, 7];
let arr = [1, 2, 3, 4, 5];
let numerous = [1, 2, 3, 4];
let str = ["uno", "des"];
let empty = [2];
let forNums = [];
let arr4 = [1, 2, 3, 4];
arr4 = [10, 20, 30, 40, 50, 60];
let myTuple = [7, "Merhaba", true];
let example;
example = ["Numan", 17];
let example2;
example2 = [
    [12, "Alex"],
    [22, "Martin"],
];
let example3 = [2, false];
example3.pop();
console.log(example3);
let ourTuple;
ourTuple = [5, false, "Coding God was here"];
ourTuple.push("Something new and wrong");
console.log(ourTuple);
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Cleaner"] = 1] = "Cleaner";
    Role[Role["Admin"] = 7] = "Admin";
})(Role || (Role = {}));
let currentUser = Role.User;
console.log(currentUser);
currentUser = Role.Cleaner;
console.log(currentUser);
currentUser = Role.Admin;
console.log(currentUser);
var Tshirt;
(function (Tshirt) {
    Tshirt["Small"] = "S";
    Tshirt["Medium"] = "M";
    Tshirt["Large"] = "L";
    Tshirt[Tshirt["XL"] = 10] = "XL";
    Tshirt[Tshirt["XXL"] = 11] = "XXL";
    Tshirt[Tshirt["false"] = 12] = "false";
})(Tshirt || (Tshirt = {}));
console.log(Tshirt.Small);
console.log(Tshirt.XL);
console.log(Tshirt.XXL);
console.log(Tshirt.false);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Error"] = 404] = "Error";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadReq"] = 400] = "BadReq";
    StatusCode[StatusCode["good"] = 401] = "good";
})(StatusCode || (StatusCode = {}));
const err = StatusCode.Error;
console.log(err);
console.log(StatusCode.good);
let notSure;
notSure = "aaa";
notSure = true;
notSure = 2;
let anyVar = notSure;
let newVar = notSure;
function addon(n1, n2) {
    return n1 + n2;
}
let result = addon(7, 13);
console.log(result);
const error = (message) => {
    throw new Error(message);
};
let uVar;
uVar = 17;
uVar = "Numan";
console.log(uVar.includes("a"));
let car2 = "Lambo";
const employee = {
    name: "Numan",
    id: 2,
    getId() {
        console.log(this.id);
    },
};
let obj = {
    book_id: 1,
    book_name: "Sefiller",
    Auth_id: 9,
    Auth_name: "Victor Hugo",
};
let studentCount = "472";
console.log(studentCount.split(""));
function greeting1(greet, name) {
    return `${greet} ${name ? name : "User"}!`;
}
console.log(greeting1("Selam", "Numan"));
function greeting2(greet, name) {
    return `${greet} ${name ? name : "User"}!`;
}
console.log(greeting2("Naber"));
function Add(a, b) {
    return a + b;
}
console.log(Add("Bunu ", "Ekle"));
console.log(Add(3, 7));
function resting(num, ...numbers) {
    let total = num;
    numbers.forEach((number) => (total += number));
    console.log(total);
}
resting(1, 2);
resting(92, 212, 33, 12, 123, 123, 132, 2);
