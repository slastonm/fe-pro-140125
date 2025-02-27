const posts= [
    {id:1, text:'Hello'},
    {id:2, text:'World'}
];

function getData(){
    setTimeout(()=>{
        let dataItem = '';
        posts.forEach((post)=>{
            dataItem +=`
            <p>${post.text}</p>
            `;
            document.body.innerHTML = dataItem;
        })
    },2000);
}



function createData(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error in promise')
            }
        }, 3000);
    })
}

// async function startPage() {
//     await createData({id:3, text:'World 3333333'});
//     getData();
// }

// startPage();


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then((response) => response.json())
// .then((json) => console.log(json));

async function fetchData() {

    let firstRes = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await firstRes.json();
    console.log(data);

    let firstRes2 = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let data2 = await firstRes2.json();
    console.log(data2);

    let firstRes3 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data3 = await firstRes3.json();
    console.log(data3);
    
}

fetchData();