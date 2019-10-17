require("dotenv").config();

var Spotify = require('node-spotify-api');

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

console.log("WORKING")

if (!search) {
  search = "spotify-this-song";
}
if (!term) {
  term = "The Sign";
}

console.log("!@#@!#@!#!@#" + keys.spotify.id);

//THIS WILL ALLOW ACCESS TO SPOTIFY API
var spotify = new Spotify(keys.spotify);


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
  spotifyfunc(term);

} else if (search === "movie-this") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching for movie title, release year, IMDB rating, Rotten Tomatoes rating, producing country, language, plot, and actors...");
  movie(term);

} else if (search === "do-what-it-says") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching through random.txt...");
  doWhatItSays();
}




//////////////////////////////////////////////////////////////////////
// CONCERT-THIS
//////////////////////////////////////////////////////////////////////

function concert(artistName) {
  axios.get("http://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
  function(response) {

    console.log("Venue Name: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.city + "\nTime: " + response.data[0].datetime);
/*     console.log(moment(response.data[0].datetime).format("MM/DD/YYYY")); */
  }
)};

//////////////////////////////////////////////////////////////////////
// SPOTIFY-THIS-SONG
//////////////////////////////////////////////////////////////////////

function spotifyfunc(songName) {

  var spotifyConstructor = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

  spotifyConstructor.request('https://api.spotify.com/v1/search?q=track:' + term + '&type=track&limit=10', function(error, response) {
      if (error){
          return console.log(error);
      };
      console.log("Artist: " + response.tracks.items[0].artists[0].name);
      console.log("Song: " + response.tracks.items[0].name);
      console.log("Link: " + response.tracks.items[0].preview_url);
      console.log("Album: " + response.tracks.items[0].album.name);
  });
};



//////////////////////////////////////////////////////////////////////
// MOVIE-THIS
//////////////////////////////////////////////////////////////////////

function movie(movieName) {
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(movieResponse){
      console.log("Title: " + movieResponse.data.Title + "\nRelease Year: " + movieResponse.data.Year + "\nIMDB Rating: " + movieResponse.data.imdbRating + "\nCountry: " + movieResponse.data.Country + "\nLanguage: " + movieResponse.data.Language + "\nPlot: " + movieResponse.data.Plot + "\nActors: " + movieResponse.data.Actors + "\nRotten Tomatoes Rating: " + movieResponse.data.Ratings[1].Value);
})};















//////////////////////////////////////////////////////////////////////
// DO-WHAT-IT-SAYS
//////////////////////////////////////////////////////////////////////

function doWhatItSays() {

  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
      var output = data.split(",");
      for (var i = 0; i < output.length; i++) {
          console.log(output[i]);
      }
    });
};