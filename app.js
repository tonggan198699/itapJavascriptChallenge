let button = document.querySelector("#button");

$(function() {
    $('#table').removeAttr("style").hide();
});

function getPeople() {

    let apiPeopleUrl = "https://swapi.co/api/people/";

  axios.get(apiPeopleUrl).then(function(response){

    for(let i=0; i < 10; i++) {

    let result = response.data.results[i];

    $("tbody").append(`
      <tr>
      <td>${result.name}</td>
      <td>${result.height}</td>
      <td>${result.mass}</td>
      <td>${result.hair_color}</td>
      <td>${result.skin_color}</td>
      <td>${result.eye_color}</td>
      <td>${result.birth_year}</td>
      <td>${result.gender}</td>
      <td>${result.homeworld}</td>
      <td>${result.films}</td>
      <td>${result.species}</td>
      <td>${result.vehicles}</td>
      <td>${result.starships}</td>
      <td>${result.url}</td>
      <td>${result.created}</td>
      <td>${result.edited}</td>
      </tr>
    `);
    }

    $('#table').removeAttr("style").show();
    $("#films_thead").removeAttr("style").hide();
    $("#films_tbody").removeAttr("style").hide();
  });

}

function getFilms() {

    let apiFilmsUrl = "https://swapi.co/api/films/";

  axios.get(apiFilmsUrl).then(function(response){

    for(let i=0; i < 7; i++) {
    let result = response.data.results[i];

    $("tbody").append(`
      <tr>
      <td>${result.title}</td>
      <td>${result.episode_id}</td>
      <td>${result.opening_crawl}</td>
      <td>${result.director}</td>
      <td>${result.producer}</td>
      <td>${result.release_date}</td>
      <td>${result.characters}</td>
      <td>${result.planets}</td>
      <td>${result.starships}</td>
      <td>${result.vehicles}</td>
      <td>${result.species}</td>
      <td>${result.url}</td>
      <td>${result.created}</td>
      <td>${result.edited}</td>
    </tr>
    `);
    }

    $("#table").css("display", "block");
    $("#people_thead").css("display", "none");
    $("#people_tbody").css("display", "none");
  });

}



function displayInfo() {

  let selected = $('#selectable option:selected');

  if(selected.text() == "people") {
    return getPeople();
  }else if(selected.text() == "films") {
    return getFilms();
  }else{
    console.log("nothing is being selected!");
  }

}



button.addEventListener('click', displayInfo);
