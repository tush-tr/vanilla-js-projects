const getUsername = document.querySelector(".get-username");
const userFill = document.querySelectorAll(".usercard");
const userInput = document.querySelector("#userinput");
// array model
// let userData = [name,bio,repos,followers,company,location];
const userData = [];
getUsername.addEventListener("click",()=>{
    let url = `https://api.github.com/users/${userInput.value}`;
    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        let name = `Name: ${data.name}`;
        userData.push(name);
        let bio = data.bio;
        userData.push(bio);
        let repos = `Repos: ${data.public_repos}`;
        userData.push(repos);
        let followers = `Followers: ${data.followers}`;
        userData.push(followers);
        let company = data.company;
        userData.push(company);
        let location = data.location;
        userData.push(location);
        let image = `<img src="${data.avatar_url}">`;
        userData.push(image);
    })
    .catch((err) => {
        console.log(err);
    })
    console.log(userData);
    for(let i=0;i<7;i++){
        userFill[i].innerHTML = userData[i];
    }
});




