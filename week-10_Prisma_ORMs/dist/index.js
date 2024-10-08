"use strict";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
updateUser('raj8017933@gmail.com', {
    firstName: "Aditya",
    lastName: "Singh"
});
