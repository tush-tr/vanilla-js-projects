const button = document.querySelector("button");
const nam = document.querySelector("#input1");
const crush = document.querySelector("#input2");
const show = document.querySelector(".show");

button.addEventListener("click", () => {
    let one = nam.value;
    let two = crush.value;
    if (two == "") {
        show.innerHTML = "Please Enter values";
    }
    else {

        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (one == "Prince" && two == "Cheenu") {
            show.innerHTML = `<h3>Your Love probability is: 100%</h3>`
        }
        else {
            let result;
            switch (randomNumber) {
                case 1:
                    result = 56;
                    break;
                case 2:
                    result = 89;
                    break;
                case 3:
                    result = 95;
                    break;
                case 4:
                    result = 65;
                    break;
                case 5:
                    result = 49;
                    break;
                case 6:
                    result = 100;
                    break;
                case 7:
                    result = 0;
                    break;
                case 8:
                    result = 29;
                    break;
                case 9:
                    result = 77;
                    break;
                case 10:
                    result = 82;
                    break;
                default:
                    break;
            }

            show.innerHTML = `<h3>Your Love probability is: ${result}%</h3>`;
        }
    }
})

