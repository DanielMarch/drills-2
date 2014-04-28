/* global moment:true */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(addTwo);
  }

  function addTwo(){
    var date = $('#date').val();
    var out = moment(date).startOf('day').fromNow();
    $('#output').append(out);
  }
})();
