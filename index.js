
const experience = ()=>{
    modal1.style.display = "block"; 
}

const challenges = ()=>{
    modal2.style.display = "block"; 
}


// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
// Get the <span> element that closes the modal

var span1 = document.getElementById("mod1");
var span2 = document.getElementById("mod2");

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}