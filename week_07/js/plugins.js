$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", "img/"+arguments[i]);
  }
}

$.preloadImages("background-1.jpg","background-2.jpg","wall-1.jpg","wall-2.jpg","wall-3.jpg");