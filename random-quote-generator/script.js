const quote = document.querySelector("#quotename");
const author = document.querySelector("#author");
const api_url = "https://api.quotable.io/random";
setInterval(()=>{
    fetch(api_url).then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = `This Quote is By -- ${data.author}`;
    }).catch((err)=>{
        console.log(err);
    });

},5000)