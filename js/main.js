$("#filter").keyup(function(){
  var $filter = $(".imageGallery img").filter().attr("data-title");
  if $(("#filter").search() === $filter.toLowerCase()) {
    $("imageGallery img").show();
  } else {
    $("imageGallery img").hide();
  }
});