var nightMode = false;
$(document).ready(function() {
  $('#standard, #creative').hide();
  $('#toClassic').hover(function() {
    $('#standard').show(2000);
  });
  $('#toCreative').hover(function() {
    $('#creative').show(2000);
  });
  $('#toClassic').mouseleave(function() {
    $('#standard').hide(2000);
  });
  $('#toCreative').mouseleave(function() {
    $('#creative').hide(2000);
  });
  $('#toggleNightMode').click(function() {
    if (nightMode) {
      nightMode = false;
      $('body').css('background-color', 'white');
      $('p, #standard, #creative').css('color', 'black');
      $('#toggleNightMode').text('Day Mode');
    } else {
      nightMode = true;
      $('body').css('background-color', 'black');
      $('p, #standard, #creative').css('color', 'white');
      $('#toggleNightMode').text('Night Mode');
    }
  });
});
