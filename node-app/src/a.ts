// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }
// greet("aditya")

// function sum(a: number, b: number): number {
//     return a + b;
// }
// const val = sum(2, 3);
// console.log(val);

// function isLegal(age: number): boolean {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const val = isLegal(21);
// console.log(val);

// function runafter1s(fs: () => void) {
//     setTimeout(fs, 3000)
// }
// runafter1s(function () {
//     console.log("Function Called!");
//     return 1;
// })

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
//     //optional argument
// 	email?: string;
// }
// function isLegal(user: User){
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// isLegal({
//     firstName: "aditya",
// 	lastName: "singh",
// 	age: 21,
// })
// function greet(user: User){
//     console.log("Hello "+ user.firstName);
// }

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }
// //types are not used to implements classes but interface you do so this is a big difference
// interface User2 {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// type Greettype = number | string
// function greet(id: Greettype){
//     console.log(id)
// }
// greet(1)
// greet("aditya")

enum Directions {
    Up, //0
    //also we can give a value like UP="up"
    Down, //1
    Left, //2
    Right //3
}
function doSomething(keyPressed: Directions) {
    if (keyPressed == Directions.Up) {

    }
}
doSomething(Directions.Up);
doSomething(Directions.Down);
console.log(Directions.Up);
console.log(Directions.Down);