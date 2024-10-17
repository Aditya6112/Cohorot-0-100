interface User {
    name: String,
    age: number
}
function sumOfAge(user1: User, user2: User){
    return (user1.age+user2.age);
}

const result = sumOfAge({
    name: "Aditya",
    age: 21
},{
    name: "Raj",
    age: 25
})
console.log(result)