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
