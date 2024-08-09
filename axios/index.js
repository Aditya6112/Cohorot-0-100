//using fetch by using then
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos").then(async(res)=>{
//         const response=await res.json();
//         console.log(response.todos.length);
//     })
// }

//using async await syntax
// async function main(){
//     const data=await fetch("https://sum-server.100xdevs.com/todos")
//     const response = await data.json()
//     console.log(response.todos.length)
// }

//using axios package
const axios = require("axios")
// async function main(){
//     const response=await axios.get("https://sum-server.100xdevs.com/todos")
//     console.log(response.data.todos.length)
// }


//methods in axios 
async function main(){
    const response=await axios(
        {
            url:"https://httpdump.app/dumps/23ab01b8-bef7-4444-93c7-5475d272e895?a=b",
            method:"PUT",
            headers:{
                Authorization: "Bearer 123",
            },
            data:{
                username: "harkirat"
            }
        },
    );
    console.log(response)
}
main();