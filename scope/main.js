//global scope
// let a = 24;
// console.log(a);
//let ans const have block scope
// ans var have function scope
export const modulevar = "exported variable";
//function scope
// function print() {
//   let a = 2;
//   console.log(a);
//   if (true) {
//     let b = 3;
//     const c = 4;
//     var d = 5;
//     console.log(b, c);
//   }
// }

// console.log(b);
// function declaration
// print(); //not ommit error
// function print() {}
// function expression(cannot use this keyword )
// print(); //ommit error
// const print = () => console.log("hello");
// print();
//error handling
// try {
//   console.log("try  catch start");
//   setTimeout(() => {
//     skldfj;
//   }, 1000);
//   console.log("try block ends");
// } catch (err) {
//   console.log(err.name);
//   console.log(err.stack);

//   console.log("error aagya ");
// }
// setTimeout(() => {
//   try {
//     console.log("try  catch start");
//     skldfj;
//     console.log("try block ends");
//   } catch (err) {
//     console.log(err.name);
//     console.log(err.stack);

//     console.log("error aagya ");
//   }
// }, 1000);

// try {
//   console.log("try block start");
//   throw new SyntaxError("this is a syntax error");
// } catch (err) {
//   console.log(err);
//   console.log("error aa gya");
// }

const json = '{ "name" : "Jones" } ';
try {
  let j = JSON.parse(json);
  console.log(j.age);
  if (!j.age) {
    throw new Error("age is not present in json");
  }
  console.log(j.age);
} catch (e) {
  console.log(e);
}

const person = {
  name: "kartik",
  age: 25,
  "married hai": false,
};
console.log(person.name);
console.log(person["married hai"]);
for (let key in person) {
  console.log(key);
}
console.log(Object.values(person));
