//BACK BUTTON

function goBack() {
  window.history.back();
}

//ADD TO CART POPUP

function openPopup() {
	modal = document.getElementById("myModal");
	// When the user clicks on the button, open the modal
	modal.style.display = "block";
}

function openSpan() {
	modal = document.getElementById("myModal");
	// When the user clicks on <span> (x), close the modal
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}