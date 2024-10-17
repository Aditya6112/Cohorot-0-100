"use strict";
// interface User {
//     name: String,
//     age: number
// }
// function sumOfAge(user1: User, user2: User){
//     return (user1.age+user2.age);
// }
const display = (user) => {
    console.log(`Name: ${user.name} and Email: ${user.email}`);
};
display({
    name: "Aditya Raj",
    email: "raj8017933@gmail.com"
});
