$(document).ready(function(){
  $(.fig).on('click',(function(){
    $(this).find(figcaption).slideToggle();
  });
});
