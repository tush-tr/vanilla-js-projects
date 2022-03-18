const integerX = document.querySelector("#integer-x");
const integerY = document.querySelector("#integer-y");
const calculateButton = document.querySelector("#calculate");
const showAnswer = document.querySelector(".answer h3");
const solutionContainer = document.querySelector(".solution");
const countSetBits = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = num & (num - 1);
  }
  return count;
};

const hammingDistance = (x, y) => {
  let result = x ^ y;
  return countSetBits(result);
};

calculateButton.addEventListener("click", () => {
  let hD = hammingDistance(integerX.value, integerY.value);
  showAnswer.innerHTML += hD;
  solutionContainer.classList.remove("hidden");
});
