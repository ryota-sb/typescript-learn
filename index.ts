// Enum 列挙型

// enum CoffeeSize {
//   SHORT = "SHORT",
//   TALL = "TALL",
//   GRANDE = "GRANDE",
//   VENTI = "VENTI",
// }

// const coffee = {
//   hot: true,
//   size: CoffeeSize.TALL,
// };

// coffee.size = CoffeeSize.SHORT;

// Union型

// let unionType: number | string = 10;
// let unionTypes: (number | string)[] = ["Hello", 1000];

// literal型 (決まった文字列、数字しか受けつかない型)

// const apple: "apple" = "apple";
// const num: 10 = 10;

// let size: "Small" | "Medium" | "Large" = "Small";

// type alias

// type ClothSize = "Small" | "Medium" | "Large";
// let clothSize: ClothSize = "Large";

// 関数

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// void (戻り値なし)

// function sayHello(): void {
//   console.log("Hello");
// }
// console.log(sayHello());

// 関数型

// const anotherAdd: (n1: number, n2: number) => number = add;
// const doubleNumber: (num: number) => number = (num) => num * 2;

// callback関数に型つけ

// function doubleAndHandle(num: number, cd: (num: number) => number): void {
//   const doubleNum = cd(num * 2);
//   console.log(doubleNum);
// }
// doubleAndHandle(21, (doubleNum) => doubleNum);

// unknown型

// let unknownInput: unknown;
// let anyInput: any; // なんでも入る、何にでも代入できてしまう
// let text: string;

// if (typeof unknownInput === "string") {
//   text = unknownInput;
// }

// never型 (戻り値がundefindすらない、何も返さない時に使用する型)

// function error(message: string): never {
//   throw new Error(message);
// }
// console.log(error("This is an error"));

// インターセクション型 （AかつB）

// type Engineer = {
//   name: string;
//   role: string;
// };

// type Blogger = {
//   name: string;
//   follower: number;
// };

// // type EnginnerBlogger = Engineer & Blogger;

// // const quill: EnginnerBlogger = {
// //   name: "quill",
// //   role: "frontend",
// //   follower: 10000,
// // };

// // type NumberBooleanString = number | boolean | string;
// // type StringNumber = string | number;
// // type Mix = NumberBooleanString & StringNumber;

// // type guard

// // typeof 演算子
// function toUpperCase(x: string | number) {
//   if (typeof x === "string") {
//     console.log(x.toUpperCase());
//   }
//   console.log("");
// }

// // in 演算子
// type NomadWorker = Engineer | Blogger;

// function describeProfile(nomadWorker: NomadWorker) {
//   console.log(nomadWorker.name);
//   if ("role" in nomadWorker) {
//     console.log(nomadWorker.role);
//   }
//   if ("follower" in nomadWorker) {
//     console.log(nomadWorker.follower);
//   }
// }

// // instanceof

// class Dog {
//   speak() {
//     console.log("bow-wow");
//   }
// }

// class Bird {
//   speak() {
//     console.log("tweet-tweet");
//   }
//   fly() {
//     console.log("flutter");
//   }
// }

// type Pet = Dog | Bird;

// function havePet(pet: Pet) {
//   pet.speak();
//   if (pet instanceof Bird) {
//     pet.fly();
//   }
// }

// // 型アサーション
// const input = document.getElementById("input") as HTMLInputElement;
// input.value = "initial input value";

// non null assertion operator

// const input = document.getElementById("input")!;

// optional chaining

type DownloadedData = {
  id: number;
  user: {
    name?: {
      first: string;
      last: string;
    };
  };
};

const downloadData: DownloadedData = {
  id: 1,
  user: {},
};

console.log(downloadData.user?.name);

// nullish coalescing
// ?? をつける記法
// || or演算子との違いは、0や空文字もfalseを返す

const userData = downloadData.user ?? "no user";

// LoikUp type

type id = DownloadedData["user"]["name"];

enum Color {
  RED,
  BLUE,
}

let target = Color.RED;

console.log(target);
