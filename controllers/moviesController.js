const axios = require("axios");
const db = require("../models");

const HORROR_GENRE = 27;
const THRILLER_GENRE = 53;
const MAX_SEARCH_RESULTS = 40;
const MAX_SEARCH_PAGES = 30;
const MAX_RECOMMENDATIONS = 5;

// Defining methods for the moviesController
module.exports = {

  // discover
  discover: async function (req, res) {
    try {
      var page = req.body.page;
      if (page === undefined) {
        page = 1;
      }
      var url = `https://api.themoviedb.org/3/discover/movie?api_key=a57716cc5f32391a19f6f29ee191775c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=200&with_genres=27`;
      const response = await axios.get(url);
      res.json(response.data.results);
    } catch (err) {
      res.status(422).json(err.message)
    }
  },

  // search by name
  search: async function (req, res) {
    try {
      var searchName = req.params.name;
      if (searchName === undefined) {
        searchName = "Saw";
      }

      var foundMovies = [];
      var page = 1;
      done = false;
      while (!done) {
        var url = `https://api.themoviedb.org/3/search/movie?api_key=a57716cc5f32391a19f6f29ee191775c&language=en-US&query=${searchName}&page=${page}&include_adult=false`;
        var response = await axios.get(url);
        const movieList = response.data.results;
        for (movie of movieList) {
          if (movie.genre_ids.indexOf(HORROR_GENRE) != -1) {
            foundMovies.push(movie);
          }
        }

        // keep searching until it has either:
        //  found max results
        //  searched max pages
        //  finished all pages
        if (foundMovies.length >= MAX_SEARCH_RESULTS) {
          done = true;
        } else {
          var totalPages = response.data.total_pages;
          if (page == totalPages || page == MAX_SEARCH_PAGES) {
            done = true;
          } else {
            page++;
          }
        }
      }
      res.json(foundMovies);
    } catch (err) {
      res.status(422).json(err.message)
    }
  },

  // get detail
  details: async function (req, res) {
    try {
      var id = req.params.id;
      if (id === undefined) {
        res.json({});
        return;
      }

      // get movie details
      var url = `https://api.themoviedb.org/3/movie/${id}?api_key=a57716cc5f32391a19f6f29ee191775c&language=en-US`;
      const details = await axios.get(url);

      // get recommendations
      url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a57716cc5f32391a19f6f29ee191775c&language=en-US&page=1`;
      const recommendations = await axios.get(url);

      
      // get credits
      url =`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a57716cc5f32391a19f6f29ee191775c`
      const credits = await axios.get(url);
      var director = '';
      const crew = credits.data.crew;
      for ( var crewIndex=0; crewIndex<crew.length; crewIndex++)
      {
        if ( crew[crewIndex].job == 'Director')
        {
          director = crew[crewIndex].name;
          break;
        }
      }
      
      
      // get any reviews
      const reviews = await db.Review.find().byMovieId(id);

      var movie = details.data;
      movie.recommendations = recommendations.data.results.slice( 0, MAX_RECOMMENDATIONS );
      movie.reviews = reviews;
      movie.director = director;

      res.json(movie);
    } catch (err) {
      res.status(422).json(err.message)
    }
  },

};