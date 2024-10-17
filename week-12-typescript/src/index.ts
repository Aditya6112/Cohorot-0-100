// interface User {
//     name: String,
//     age: number
// }
// function sumOfAge(user1: User, user2: User){
//     return (user1.age+user2.age);
// }

// const result = sumOfAge({
//     name: "Aditya",
//     age: 21
// },{
//     name: "Raj",
//     age: 25
// })
// console.log(result)

// pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, 
// you only need a subset of these properties.

// interface User{
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
// }

// type userProfile = Pick<User, 'name' | 'email'>;
// const display = (user: userProfile)=>{
//     console.log(`Name: ${user.name} and Email: ${user.email}`)
// }

// display({
//     name:"Aditya Raj",
//     email: "raj8017933@gmail.com"
// })

//partial
//It makes all properties of a type optional, 
// creating a type with the same properties, but each marked as optional.
// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({})