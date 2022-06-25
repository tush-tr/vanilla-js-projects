const pricesInput = document.querySelector("input");
const button = document.querySelector("button");
const answerDiv = document.querySelector(".answer");
const answerSection = document.querySelector("section")
const ctx = document.getElementById("myChart").getContext("2d");

const getChartData = (labels, data) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Stocks",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const maxProfit = (prices) => {
  const aux = new Array(prices.length).fill(0);
  const n = prices.length;
  for (let i = n - 1; i >= 0; i--) {
    if (i == n - 1) {
      aux[i] = prices[i];
    }
    if (prices[i] >= aux[i + 1]) {
      aux[i] = prices[i];
    }
    if (prices[i] < aux[i + 1]) {
      aux[i] = aux[i + 1];
    }
  }
  let mxProfit = 0;
  prices.forEach((price, i) => {
    if (aux[i] - price > mxProfit) {
      mxProfit = aux[i] - price;
    }
  });
  return mxProfit;
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  const pricesString = pricesInput.value;
  const pricesChars = pricesString.split(",");
  const prices = pricesChars.map((char) => parseInt(char));
  answerSection.classList.remove("hide");
  answerSection.classList.add("answer-section")
  answerDiv.innerHTML = "Maximum profit is: " + maxProfit(prices);
  const labels = prices.map((price, i) => i);
  const data = getChartData(labels, prices);
  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});