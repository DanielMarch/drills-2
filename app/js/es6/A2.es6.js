(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(numbers);
  }

  function numbers(){
    var nums = $('#numbers').val().split(',').map(n=>n*n);
    for(var i = 0; i < nums.length; i++){
      var $block = $('<div>').addClass('box');
      var div = nums[i];
      $block.text(div);
      $('#output').append($block);
    }
  }
})();
