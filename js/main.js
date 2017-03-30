$(function() {
  // Event on keyup on search
  $('#filter').keyup(function() {
    // save the value
    var srch = this.value;
    // get all the <li> elements in the gallery
    // and iterate over them
    $('.imageGallery li').each(function() {
      // get the title by using this to target
      // the select on <a>
      var title = $('a', this).data('title');
      // Check if the srch exists in the title
      // show and hide accordingly
      if (title.indexOf(srch) != -1) {
        $(this).show()
      }
      else {
        $(this).hide();
      }
    });
  });
});
