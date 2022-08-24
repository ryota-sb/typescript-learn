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
