import axios from "axios";

export default {

  login: function (userName, password) {
    const loginData = {
      userName: userName,
      password: password
    };
    return axios.post('/login', loginData);
  },

  signUp: function (userName, password) {
    const loginData = {
      userName: userName,
      password: password
    };
    return axios.post('/signUp', loginData);
  },

  getUser: function (userName) {
    return axios.get(`/api/user/${userName}`);
  },

  addWatched: function (userName, movieId) {
    return axios.get(`/api/user/${userName}/watched/${movieId}`);
  },

  addWanted: function (userName, movieId) {
    return axios.get(`/api/user/${userName}/wanted/${movieId}`);
  },

  movieDiscover: function () {
    return axios.get('/api/movies');
  },

  movieSearch: function (name) {
    return axios.get(`/api/movies/search/${name}`);
  },

  movieDetails: function (movieId) {
    return axios.get(`/api/movies/${movieId}`);
  },

  movieAddReview: function (userName, movieId, quality, entertainment, scariness, comment) {
    const reviewData = {
      userName: userName,
      movieId: movieId,
      quality: quality,
      entertainment: entertainment,
      scariness: scariness,
      comment: comment
    };
    return axios.post('/api/movies/review', reviewData);
  },

};