//CART

let products = [
	{
		name: 'comfy pillow',
		tag: 'comfypillow',
		price: 5,
		inCart: 0
	}
]

//this function is to keep localStorage values on screen after page refresh
function onLoadCartNumbers() {
      let productNumbers = localStorage.getItem('cartNumbers');
      if(productNumbers) {
        document.querySelector('.cart-qty span').textContent = productNumbers;
      }
    }
//load the above function every time the window is loaded
window.onload = onLoadCartNumbers;

//add number every time add to cart is clicked
function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
    //convert string of productNumbers into Int
	productNumbers = parseInt(productNumbers);
    //if something is in the cart
	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers+1);
		document.querySelector('.cart-qty span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		//update all instances of .cart-qty span with the new number
		document.querySelector('.cart-qty span').textContent = 1;
	}
}

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
        		document.getElementById("pillowimage").src="assets/bedpillow1afterschool.jpg";
			} else if (colorResults[i].value === "Morning Haze"){
				document.getElementById("pillowimage").src="assets/bedpillow1morninghaze.jpg";
			} else if (colorResults[i].value === "Cozy Denim"){
				document.getElementById("pillowimage").src="assets/bedpillow1cozydenim.jpg";
			} else if (colorResults[i].value === "Rainy Day"){
				document.getElementById("pillowimage").src="assets/bedpillow1rainyday.jpg";
			}
		}
	}
}

//ADD TO CART POPUP

var ischecked_filling = false;
var ischecked_color = false;

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
			cartNumbers();

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