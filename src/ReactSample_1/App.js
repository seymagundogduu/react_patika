import React from 'react'
async function getData(user_id){
    const user = await (await fetch (`https://jsonplaceholder.typicode.com/users/${user_id}`)).json()
    const post = await (await fetch (`https://jsonplaceholder.typicode.com/posts/${user_id}`)).json()


    console.log("user", user)
    console.log("post", post)
        
}

export default getData 