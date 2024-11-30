fetch(`https://jsonplaceholder.typicode.com/posts/6`)
.then(data => {
    return data.json()
})
.then(post => {
    console.log(post)
})