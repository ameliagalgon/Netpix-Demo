const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5f892bba&";

var movies = [];

fetch(url + "t=Saw")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=Tangled")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

var updateMovies = function(movie){
  movies.push(movie);
  displayMovies();
}

var displayMovies = function(){
  var movieDisplay = "";
  for(var i = 0; i < movies.length; i++){
    //console.log(i);
    movieDisplay += "<img class='movie' id=" + movies[i]["Title"] + " src=" + movies[i]["Poster"] + ">"
  }
  document.getElementById("response").innerHTML = movieDisplay;
}
