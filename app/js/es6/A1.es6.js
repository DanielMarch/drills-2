/* jshint unused:false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go-strings').click(strings);
  }

  function strings(){
    var first = $('#first').val().toLowerCase();
    var last = $('#last').val().toLowerCase();
    var movie = $('#movie').val().toUpperCase();
    var string = `${first} ${last} loves ${movie}`;
    $('#strings-output').append(string);
  }
})();
