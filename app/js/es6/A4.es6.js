/* global _:true */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(getNums);
  }

  function getNums(){
    var nums = $('#string').val().split(',').map(n=>n.trim());
    var array = _.range(nums[0], nums[1], nums[2]);
    var numbers = _(array).map(n=>Math.pow(n,3)).value();
    for(var i = 0; i < numbers.length; i++){
      var $block = $('<div>').addClass('box');
      var div = numbers[i];
      $block.text(div);
      $('#output').append($block);
    }
  }
})();
