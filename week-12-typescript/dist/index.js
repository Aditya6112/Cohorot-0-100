"use strict";
function sumOfAge(user1, user2) {
    return (user1.age + user2.age);
}
const result = sumOfAge({
    name: "Aditya",
    age: 21
}, {
    name: "Raj",
    age: 25
});
console.log(result);
