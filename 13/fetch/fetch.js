//get let promiseFetch = fetch('url', [options]) => promise
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

// response.text()
// response.formData()
// response.blob()


fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    body: JSON.stringify({
        body:'Test',
        id:1,
        title:'test title',
        userId:1
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':'Bearer your_token_here',
        'Cookie':'sessionId = your_session_id'
    }
})      
.then(response => response.json())
.then(json => console.log(json))
.catch(error=>console.log(`Error ${error}`));
