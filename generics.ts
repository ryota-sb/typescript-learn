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
