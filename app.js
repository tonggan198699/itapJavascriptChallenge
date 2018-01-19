let button = document.querySelector("#button");
let name = document.querySelector("#name");
let mass = document.querySelector("#mass");
let height = document.querySelector("#height");
let hair_color = document.querySelector("#hair_color");
let skin_color = document.querySelector("#skin_color");
let eye_color = document.querySelector("#eye_color");
let birth_year = document.querySelector("#birth_year");
let gender = document.querySelector("#gender");
let homeworld = document.querySelector("#homeworld");
let films = document.querySelector("#films");
let species = document.querySelector("#species");
let vehicles = document.querySelector("#vehicles");
let starships = document.querySelector("#starships");
let url = document.querySelector("#url");
let created = document.querySelector("#created");
let edited = document.querySelector("#edited");

function displayInfo() {

  let apiPeopleUrl = "https://swapi.co/api/people/";

  axios.get(apiPeopleUrl).then(function(response){

    for(let i=0; i < 10; i++) {

    let result = response.data.results[i];

    name.innerHTML += (result.name + "<br>");
    height.innerHTML += (result.height + "<br>");
    mass.innerHTML += (result.mass + "<br>");
    hair_color.innerHTML += (result.hair_color + "<br>");
    skin_color.innerHTML += (result.skin_color + "<br>");
    eye_color.innerHTML += (result.eye_color + "<br>");
    birth_year.innerHTML += (result.birth_year + "<br>");
    gender.innerHTML += (result.gender + "<br>");
    homeworld.innerHTML += (result.homeworld + "<br>");
    films.innerHTML += (result.films + "<br>");
    species.innerHTML += (result.species + "<br>");
    vehicles.innerHTML += (result.vehicles + "<br>");
    starships.innerHTML += (result.starships + "<br>");
    url.innerHTML += (result.url + "<br>");
    created.innerHTML += (result.created + "<br>");
    edited.innerHTML += (result.edited + "<br>");
    }

  });



}

button.addEventListener('click', displayInfo);
