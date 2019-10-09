require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
console.log("WORKING")


//THIS WILL ALLOW ACCESS TO SPOTIFY API
/* var spotify = new Spotify(keys.spotify); */


var search = process.argv[2];
console.log(process.argv[2]);
var term = process.argv.slice(3).join(" ");
console.log(process.argv.slice(3).join(" "));


if (search === "concert-this") {
/*   tv.findShow(term); // CHANGE */
  console.log("Searching for the venue name, location, and date...");
  concert(term);

} else if (search === "spotify-this-song") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching for the artist, song name, a preview link, and the album...");

} else if (search === "movie-this") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching for movie title, release year, IMDB rating, Rotten Tomatoes rating, producing country, language, plot, and actors...");

} else if (search === "do-what-it-says") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching through random.txt...");
}




//////////////////////////////////////////////////////////////////////
// CONCERT-THIS
//////////////////////////////////////////////////////////////////////

function concert(artistName) {
  axios.get("http://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
  function(response) {

    console.log("Venue Name: " + response.data[0].venue.name);
    console.log("Location: " + response.data[0].venue.city);
    console.log("Time: " + response.data[0].datetime);
/*     console.log(moment(response.data[0].datetime).format("MM/DD/YYYY")); */
  }
)}






//////////////////////////////////////////////////////////////////////
// SPOTIFY-THIS-SONG
//////////////////////////////////////////////////////////////////////

if (!search) {
  search = "spotify-this-song";
}
if (!term) {
  term = "The Sign";
}




















//////////////////////////////////////////////////////////////////////
// MOVIE-THIS
//////////////////////////////////////////////////////////////////////
















//////////////////////////////////////////////////////////////////////
// DO-WHAT-IT-SAYS
//////////////////////////////////////////////////////////////////////


















var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
  };
};

module.exports = TV;