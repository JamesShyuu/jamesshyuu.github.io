/* 規劃行程 */
var acc = document.getElementsByClassName("accordion-favorite");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

/* 規劃行程內層用 */
var ac = document.getElementsByClassName("accordion-in");
var ii;

for (ii = 0; ii < ac.length; ii++) {
    ac[ii].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}



// Get the modal
var modal = document.getElementById('myModal-plan');

// Get the button that opens the modal
var btn = document.getElementById("myBtn-plan");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-plan")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


