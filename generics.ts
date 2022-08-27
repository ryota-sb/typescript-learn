// ジェネリクス

function copy<T, U>(value: T) {
  let user: T;
  return value;
}

type User = {
  name: string;
  age: number;
  gender: "man" | "woman";
};

copy({ name: "Ryota", age: 27, gender: "man" }).name;

// extends 制約

function FuncA<T extends { name: string }>(value: T): T {
  return value;
}

// keyof 演算子 (オブジェクトのkeyを取り出し、複数ある場合ユニオン型にする)
// オブジェクトの一番最初のKeyのみを取り出す。この場合、first last は取り出されない。

type K = keyof { name: { first: string; last: string }; age: number };

// class にジェネリクスを使う

class LightDatabase<T extends string | number> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");

// interface にジェネリクスを使う

interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [],
};

// Utility type typescriptに内蔵されている便利な型のライブラリ（Partial Readonly）

interface Todo {
  title: string;
  text: string;
}

// Partial<> を使用することでジェネリクスに渡した型がオプショナルで生成される

type Todoable = Partial<Todo>;

// Readonly<> を使用することでジェネリクスに渡した型が全てreadonlyで定義される

type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello world");
  }, 3000);
});

fetchData.then((item) => {
  item.toUpperCase;
});

const vegetables: Array<string> = ["Tomato", "Broccoli", "Aspargaus"];

// デフォルトの型パラメータの定義

interface ResponseData<T = any> {
  data: T;
  status: number;
}

let tmp: ResponseData;

// mapped type

type UserName = {
  name: string;
};

type MappedTypes<T> = {
  [P in keyof T]: P;
};

const username: MappedTypes<UserName> = {
  name: "name",
};

// Conditional type (if文のようなもの)

type ConditionalTypes = "tomato" extends string ? number : boolean;
