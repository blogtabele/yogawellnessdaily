var modal = document.getElementById("myModal"),
        btn = document.getElementById("myBtn"),
        span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none"
      };
      window.onclick = function(a) {
        a.target == modal && (modal.style.display = "none")
      };