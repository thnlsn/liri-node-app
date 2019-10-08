require("dotenv").config();

var keys = require("./keys.js");

//THIS WILL ALLOW ACCESS TO SPOT API
var spotify = new Spotify(keys.spotify);


var search = process.argv[2];
console.log()
var term = process.argv.slice(3).join(" ");

//////////////////////////////////////////////////////////////////////
// 
//////////////////////////////////////////////////////////////////////

if (!search) {
  search = "spotify-this-song";
}
if (!term) {
  term = "The Sign";
}

if (search === "spotify-this-song") {
  console.log("Searching for the artist, song name, a preview link, and the album");
  tv.findShow(term);
} else {
  tv.findActor(term);
  console.log("Searching for TV Actor...");
}













