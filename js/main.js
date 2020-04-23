$(document).ready(function(){

  $('figure').each(function()
  {
      $(this).find("a").attr('data-caption', $(this).find('figcaption').text());
  });

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("figure").css({"margin-left":"0px"}).css({"margin-right":"0px"});
    $("figure").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
