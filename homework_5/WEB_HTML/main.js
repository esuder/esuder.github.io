//BACK BUTTON

function goBack() {
  window.history.back();
}

//CHANGE COLOR OF PREVIEW IMAGE FROM RADIO INPUT
var fillingResults = document.getElementsByName('filling'); 
var colorResults = document.getElementsByName('color'); 

function changeColor(){
	for ( var i = 0; i < colorResults.length; i++) {
    	if(colorResults[i].checked) {
    	console.log(colorResults[i].value);
        	if (colorResults[i].value === "After School Special"){
        		document.getElementById("pillowimage").src="bedpillow1afterschool.jpg";
			} else if (colorResults[i].value === "Morning Haze"){
				document.getElementById("pillowimage").src="bedpillow1morninghaze.jpg";
			} else if (colorResults[i].value === "Cozy Denim"){
				document.getElementById("pillowimage").src="bedpillow1cozydenim.jpg";
			} else if (colorResults[i].value === "Rainy Day"){
				document.getElementById("pillowimage").src="bedpillow1rainyday.jpg";
			}
		}
	}
}

//ADD TO CART POPUP

var ischecked_filling = false;
var ischecked_color = false;

localStorage.setItem('cartCount', 0);

function openPopup() {
	// check if filling radio is checked
	for ( var i = 0; i < fillingResults.length; i++) {
    	if(fillingResults[i].checked) {
        	ischecked_filling = true;
			break;
   		 }
	}
	// check if color radio is checked
	for ( var i = 0; i < colorResults.length; i++) {
    	if(colorResults[i].checked) {
        	ischecked_color = true;
			break;
   		 }
	}


	// if filling radio and color radio is checked, open the popup
	if(ischecked_color & ischecked_filling) {
      	  	modal = document.getElementById("myModal");
			modal.style.display = "block";
			//convert to number. Add 1 to number every time Add to Cart is clicked
			var newCartValue = Number(localStorage.getItem('cartCount')) + 1;
			localStorage.setItem('cartCount', newCartValue);
			console.log(localStorage.getItem('cartCount'));
			document.getElementById("cart-qty").innerHTML
			= localStorage.getItem('cartCount');

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

	for(i = 0; i < colorResults.length; i++) { 
		if(colorResults[i].checked) {
		document.getElementById("colorresult").innerHTML
			= "Color: "+colorResults[i].value;
		}
	}

	for(i = 0; i < fillingResults.length; i++) { 
		if(fillingResults[i].checked){
		document.getElementById("fillingresult").innerHTML
			= "Filling: "+fillingResults[i].value;
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