// function first() {
//     console.log("first.....");
// }

// function second() {
//     console.log("second.....");
// }

// function third() {
//     console.log("third.....");
// }
// third();
// second();
// first();
// var a = 23;
// console.log(`hi ${a}`);
// alert(`hi ${a}`);
// console.log(typeof a);
// alert(typeof a);
let arr = [1, null, "yoyoyo", true, undefined];
for (let i = 0; i < arr.length; i++) {
    str = `type of ${arr[i]} is ${typeof arr[i]}`;
    alert(str);
}