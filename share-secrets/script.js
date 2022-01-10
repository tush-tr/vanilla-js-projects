const form = document.querySelector('#form')
const {hash} = window.location;
const message = atob(hash.replace('#',''))
if(message){
    // document.querySelector('#show').classList.remove('hide')
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('#take').classList.add('hide')
    const showMessage = document.querySelector('h1')
    showMessage.innerHTML = message

}



form.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = document.querySelector('#message-input')
    const outputValue = document.querySelector("#showlink")

    const encrypted = btoa(inputValue.value)
    inputValue.value = null

    document.querySelector('#show').classList.remove('hide')
    document.querySelector('#take').classList.add('hide')
    outputValue.value = `${window.location}#${encrypted}`
    outputValue.select();
})
