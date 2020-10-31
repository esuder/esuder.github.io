//BACK BUTTON

function goBack() {
  window.history.back();
}

//ADD TO CART POPUP

var ischecked_filling = false;
var ischecked_color = false;

function openPopup() {
	var fillingResult = document.getElementsByName('filling'); 
	var colorResult = document.getElementsByName('color'); 
	// check if filling radio is checked
	for ( var i = 0; i < fillingResult.length; i++) {
    	if(fillingResult[i].checked) {
        	ischecked_filling = true;
			break;
   		 }
	}
	// check if color radio is checked
	for ( var i = 0; i < colorResult.length; i++) {
    	if(colorResult[i].checked) {
        	ischecked_color = true;
			break;
   		 }
	}
	
	// if filling radio and color radio is checked, open the popup
	if(ischecked_color & ischecked_filling) {
      	  	modal = document.getElementById("myModal");
			modal.style.display = "block";
	} else if(!ischecked_color & !ischecked_filling) {
		// if neither filling radio and color radio is checked, alert the user
		alert("Please choose color and filling.");
	} else if(!ischecked_color & ischecked_filling)   {
    	//if color radio is not checked, alert the user
    	alert("Please choose color.");
	} else if(!ischecked_filling & ischecked_color)   {
    	//if filling radio is not checked, alert the user
    	alert("Please choose filling.");
	}

	for(i = 0; i < colorResult.length; i++) { 
		if(colorResult[i].checked) {
		document.getElementById("colorresult").innerHTML
			= "Color: "+colorResult[i].value;
		document.getElementById("cartmessage").innerHTML
			= "Item has been added to cart!"
		}
	}

	for(i = 0; i < fillingResult.length; i++) { 
		if(fillingResult[i].checked){
		document.getElementById("fillingresult").innerHTML
			= "Filling: "+fillingResult[i].value;
		}
	}
	
}

function openSpan() {
	modal = document.getElementById("myModal");
	// When the user clicks on <span> (x), close the modal
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}