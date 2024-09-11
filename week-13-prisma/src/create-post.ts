import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// const prisma = new PrismaClient({log: ['info', 'query'],})

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.post.create({
        data: {
            title: "title of post",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()