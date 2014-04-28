/* global moment:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#format').click(format);
  }

  function format(){
    var date = $('#date').val();
    var fmt = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    $('#output').text(fmt);
    }
})();
