require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

// require spotify-web-api-node package here:
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// Our routes go here:
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/artist-search", (req, res) => {
  console.log({ searchQuery: req.query.search });
  spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
      //   console.log(
      //     "The received data from the API: ",
      //     data.body.artists.items[0]
      //   );

      res.render("artist-search-results", { data: data.body.artists });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/albums/:artistId", (req, res, next) => {
  // .getArtistAlbums() code goes here
  spotifyApi.getArtistAlbums(req.params.artistId).then(
    function (data) {
      //   console.log("Artist albums", data.body.items[0]);
      res.render("albums", data.body.items);
    },
    function (err) {
      console.error(err);
    }
  );
});

app.get("/albums/:albumId/tracks", (req, res, next) => {
  // Get tracks in an album
  spotifyApi.getAlbumTracks(req.params.albumId).then(
    function (data) {
      const tracks = data.body.items;
      console.log("Tracks", tracks);
      res.render("tracks", { tracks });
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
