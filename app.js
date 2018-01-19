let button = document.querySelector("#button");
let name = document.querySelector("#name");

function displayInfo() {

  let apiPeopleUrl = "https://swapi.co/api/people/";

  axios.get(apiPeopleUrl).then(function(response){

    for(let i=0; i < 10; i++) {
    name.innerHTML += (response.data.results[i].name + "<br>");
    }
  });

}

button.addEventListener('click', displayInfo);
