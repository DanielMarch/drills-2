(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(fetch);
  }

  function fetch(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country=us&apikey=q9xn2vha2hcw67cny7h2syfb&callback=?';
    $.getJSON(url, getMovies);
  }

  function getMovies(info){
    var movies = info.movies;
    for(var i = 0; i < movies.length; i++){
      var thumbnail = movies[i].posters.thumbnail;
      var title = movies[i].title;
      display(title, thumbnail);
    }
  }

  function display(title, thumbnail){
    var results = '<div class="thumbnail"><img src ="'+thumbnail+'"></img><div class="title">'+title+'</div></div>';
    $('#output').append(results);
  }
})();
