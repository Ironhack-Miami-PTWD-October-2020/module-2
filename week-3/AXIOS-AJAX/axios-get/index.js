axios
  .get(
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo"
  )
  .then((responseFromAPI) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    const stockData = responseFromAPI.data;
    const dailyData = stockData["Time Series (Daily)"];
    const stockDates = Object.keys(dailyData);
    const stockPrices = stockDates.map((date) => dailyData[date]["4. close"]);
    var chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: stockPrices,
        datasets: [
          {
            label: "Stock Chart",
            backgroundColor: "red",
            borderColor: "black",
            data: stockPrices,
          },
        ],
      },
    });
  })
  .catch((err) => console.log(err));
