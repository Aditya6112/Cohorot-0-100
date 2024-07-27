const express = require("express")
const zod = require("zod")
const app = express()
const schema1 = zod.array(zod.number());

/*
    {
        email => string
        password=> atleast 8
        country=> "IN","US"
    }
 
*/

const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())

})

app.use(express.json());
app.post('/health-check', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    res.send({
        response
    })
    console.log(response)
});

// function validateObject(obj){
//     const schema3=zod.object({
//         email:zod.string().email(),
//         password:zod.string().min(8)
//     })
//     const response=schema3.safeParse(obj)
//     console.log(response)
// }
// validateObject({
//     email:"raj@gmail.com",
//     password:'12345678'
// })

app.listen(3000)