$(document).ready(function(){
  $('figcaption').hide();
  $('figure').on('click', function(){
    $(this).find('figcaption').slideToggle();
  });
});
