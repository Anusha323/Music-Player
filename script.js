
    function rotateImage() {
      var image = document.getElementById("image");
      image.style.transform = "rotate(360deg)";
    }

    // Optional: rotate image continuously
    var angle = 0;
    setInterval(function() {
      angle += 10;
      document.getElementById("image").style.transform = "rotate(" + angle + "deg)";
    }, 100);

