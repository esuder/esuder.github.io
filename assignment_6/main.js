
var cartList = [];

//CART

//this function is to keep localStorage value of cartNumbers on screen after page refresh
function onLoadCartNumbers() {
      let productNumbers = localStorage.getItem('cartNumbers');
      if(productNumbers) {
        document.querySelector('.cart-qty span').textContent = productNumbers;
		document.querySelector('.itemsInCart span').textContent = productNumbers;
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

//add to array if add to cart is clicked
function cartItems() {
//create object with color and filling information and add to cartList array
	let listOfItems = localStorage.getItem('list');
	console.log("this is cartlist array string:"+JSON.stringify(cartList));
	localStorage.setItem('list', JSON.stringify(cartList));
	console.log("this is list of items:"+listOfItems);
	//document.querySelector('.myCartList span').textContent = listOfItems;
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
			cartList.push({
				"Color" : colorResults[i].value,
				"Filling" : fillingResults[i].value});
			cartNumbers();
			cartItems();

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