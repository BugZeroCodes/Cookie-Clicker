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
});
