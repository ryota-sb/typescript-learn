// Enum 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// Union型
var unionType = 10;
var unionTypes = ["Hello", 1000];
// literal型 (決まった文字列、数字しか受けつかない型)
var apple = "apple";
var num = 10;
var size = "Small";
var clothSize = "Large";
// 関数
function add(num1, num2) {
    return num1 + num2;
}
// void (戻り値なし)
function sayHello() {
    console.log("Hello");
}
console.log(sayHello());
// 関数型
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
// callback関数に型つけ
function doubleAndHandle(num, cd) {
    var doubleNum = cd(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) { return doubleNum; });
// unknown型
var unknownInput;
var anyInput; // なんでも入る、何にでも代入できてしまう
var text;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error"));
