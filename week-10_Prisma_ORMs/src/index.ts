// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             email: username,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }
// // insertUser("raj8017933@gmail.com","AdityaRaj","Aditya","Raj");
// insertUser("amansingh@gmail.com","okjiRaj","Aman","Singh");

//Update
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}
updateUser('raj8017933@gmail.com', {
    firstName: "Aditya",
    lastName: "Singh"
})