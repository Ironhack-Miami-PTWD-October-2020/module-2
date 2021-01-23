document.getElementById("get-country").addEventListener("click", () => {
  const name = document.getElementById("country-name").value;
  axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((responseFromAPI) => {
      console.log(responseFromAPI.data);
      document.getElementById("name").innerHTML = responseFromAPI.data[0].name;
      document.getElementById("flag").src = responseFromAPI.data[0].flag;
    })
    .catch((err) => console.log(err));
});
