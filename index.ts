// Enum 列挙型

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

coffee.size = CoffeeSize.SHORT;

// Union型

let unionType: number | string = 10;
let unionTypes: (number | string)[] = ["Hello", 1000];

// literal型 (決まった文字列、数字しか受けつかない型)

const apple: "apple" = "apple";
const num: 10 = 10;

let size: "Small" | "Medium" | "Large" = "Small";

// type alias

type ClothSize = "Small" | "Medium" | "Large";
let clothSize: ClothSize = "Large";

// 関数

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// void (戻り値なし)

function sayHello(): void {
  console.log("Hello");
}
console.log(sayHello());

// 関数型

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNumber: (num: number) => number = (num) => num * 2;

// callback関数に型つけ

function doubleAndHandle(num: number, cd: (num: number) => number): void {
  const doubleNum = cd(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, (doubleNum) => doubleNum);
