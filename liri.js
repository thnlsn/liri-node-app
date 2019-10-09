require("dotenv").config();

var fs = require("fs");

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
  spotify(term);

} else if (search === "movie-this") {
/*   tv.findActor(term); // CHANGE */
  console.log("Searching for movie title, release year, IMDB rating, Rotten Tomatoes rating, producing country, language, plot, and actors...");
  movie(term);

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

    console.log("Venue Name: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.city + "\nTime: " + response.data[0].datetime);
/*     console.log(moment(response.data[0].datetime).format("MM/DD/YYYY")); */
  }
)};

//////////////////////////////////////////////////////////////////////
// SPOTIFY-THIS-SONG
//////////////////////////////////////////////////////////////////////

function spotify(songName) {
  if (!search) {
    search = "spotify-this-song";
  }
  if (!term) {
    term = "The Sign";
  }

  var spotify = new Spotify({
    id: spotifyKeyInfo["spotify"].id,
    secret: spotifyKeyInfo["spotify"].secret
  });

  spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function(error, response) {
      if (error){
          return console.log(error);
      };
      console.log("Artist: " + response.tracks.items[0].artists[0].name);
      console.log("Song: " + response.tracks.items[0].name);
      console.log("URL: " + response.tracks.items[0].preview_url);
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
console.log("WEWEWEWEWEWEWE#@#@#@#@#@#@");