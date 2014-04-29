/* jshint unused:false */
/* global _:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  var rating;

  function init(){
    $('#get').click(fetch);
  }

  function fetch(){
    var number = $('#num').val();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+number+'&country=us&apikey=q9xn2vha2hcw67cny7h2syfb&callback=?';
    rating = $('#rating').val();
    $.getJSON(url, getMovies);
  }

  function getMovies(info){
    info.movies.filter(m=>m.ratings.audience_score >= rating).forEach(m=>$('#output').append(`<img src=${m.posters.thumbnail}><div>${m.title}</div>`));
  }
})();
