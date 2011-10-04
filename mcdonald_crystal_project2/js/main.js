//Crystal McDonald
//Visual Frameworks (VFW)
//Full Sail University
//September 3, 2011
//Project 2
<link rel="stylesheet" href="additem.html" type="text/area" />
//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	//creating shortcut function whenever we want to get it.
	function $(x) {
		var theElement = document.getElementByID(x);
		return theElement;
	}

	//Variable defaults
	var guestGroup = ["--Choose A Group--", "Family","Friends","CoWorker","VIP"];





	//Set Link & Submit Click Events
	var displayLink = $("displayLink");
	//do something w/ the element so when click something happens  addEventListner doesnt do () for the function
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);


//ensures nothing will run until DOM content is loaded.
});






















/*function filedCheck () {
	if (this.value == "") {
	this.className += "highlight";
	this.focus();
}
else {
	this.className = "read";
	}
}

//Clears the value of MyKey

window.localStorage.clear("MyKey");

//Clears all the local storage data

window.localStorage.clear();*/