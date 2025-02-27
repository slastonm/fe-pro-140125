let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // console.log(xhr.response);
        xhr.response.forEach(element => {
            let pEl = document.createElement('p');
            pEl.innerHTML = `User name ${element.name} phone:${element.phone}`;
            document.querySelector('body').appendChild(pEl);
        });
    }
}
xhr.responseType = 'json';
xhr.send(null);