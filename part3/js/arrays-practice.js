//STEP 1
var movies_1 = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
window.console.log(movies_1[0]);

STEP 2
var movies = new Array (5);
movies[0] = "Predestination";
movies[1] = "The Godfather";
movies[2] = "John Wick";
movies[3] = "Gladiator";
movies[4] = "Casablanca";
window.console.log(movies[0]);

//STEP 3
//using same array defined above for step 3
movies.splice(2, 0, "Frozen");
window.console.log(movies.length);

//STEP 4
var movie1 = [];
var i;
for (i = 0; i < fMovies.length; i++)
{
    movie1.push(movies_1[i]);
}
delete movie1[0];
window.console.log(movie1);

// STEP 5
var movie2 = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
for (i = 0; i < movie2.length; i++) {
    window.console.log(movie2[i]);
}

//STEP 6
for (i in movie2) {
    window.console.log(movie2[i]);
}

// STEP 7
var sMovie = movie2.sort();
for (i in sMovie)
{
    window.console.log(sMovie[i]);
}

//STEP 8
var leastFavMovies = ["Cars", "Coco", "Conjuring"];
var movie3 = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
window.console.log("\nMovies I like\n\n");
for (i in movie3) {
    window.console.log(movie3[i]);
}
window.console.log("\nMovies I regret watching\n\n");
for (i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

//STEP 9
var movie = movie3.concat(leastFavMovies);
var Rsortmovie = movie.sort().reverse();
window.console.log(Rsortmovie);

//STEP 10
var last = movie.pop();
window.console.log(last);
