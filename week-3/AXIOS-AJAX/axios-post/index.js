getCharacters();

document.getElementById("add-character").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const occupation = document.getElementById("occupation").value;
  const weapon = document.getElementById("weapon").value;
  console.log(name, occupation, weapon);
  axios
    .post("https://ih-crud-api.herokuapp.com/characters", {
      name,
      occupation,
      weapon,
    })
    .then((responseFromApi) => {
      console.log(responseFromApi);
      getCharacters();
    });
});

document.getElementById("update-character").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("id").value;
  const name = document.getElementById("name-update").value;
  const occupation = document.getElementById("occupation-update").value;
  const weapon = document.getElementById("weapon-update").value;
  console.log(name, occupation, weapon);
  axios
    .put(`https://ih-crud-api.herokuapp.com/characters/${id}`, {
      name,
      occupation,
      weapon,
    })
    .then((responseFromApi) => {
      console.log(responseFromApi);
      getCharacters();
    });
});

function getCharacters() {
  axios
    .get("https://ih-crud-api.herokuapp.com/characters/")
    .then((responseFromApi) => {
      //   we only care about data from the response
      const characters = responseFromApi.data;
      // here we get the ul element reference from dom
      let list = document.getElementById("characters");
      // here we iterate over every character we got back from the api
      list.innerHTML = "";
      characters.forEach((character) => {
        // here for every character we create an li and append it to the ul
        list.innerHTML += `<li onclick="deleteCharacter(${character.id})">${character.name}</li>`;
      });
    });
}

function deleteCharacter(id) {
  console.log(id);
  axios
    .delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then((response) => {
      console.log(response);
      getCharacters();
    });
}
