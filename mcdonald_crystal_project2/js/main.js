//Crystal McDonald
//Visual Frameworks (VFW)
//Full Sail University
//September 3, 2011
//Project 2

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	//creating shortcut function whenever we want to get it.
	function $(x) {
		var theElement = document.getElementByID(x);
		return theElement;
	}
	//create select field element an populate it w/ options. exchanged createGuests from makeCats.
	function createGuests() {
				//created variable to target form tag
		var formTag = document.getElementsByTagName("form");  //form tag is an array. b/c plural getElements.
			//created a variable to target the list item w/ variable select 
			selectLi = $("select") 
			//created a variable to create an element and select the html element 
			makeSelect = document.createElement("select")
			//setting an attribute and id with guests.  switched guests with groups.
			makeSelect.setAttribute("id", "add guest"
			//populating the select tag w/ options by using the array guestGroup
		for(var i=0, j=guestGroups.length; i<j; i++) {
			var makeOption = document.createElement("option");
			//variable grabs the value in array and saves it.
			var optText = guestGroups[i];
			//give makeOption an attribute, give it a value instead of an id and set it equal to what text is.
			//grabs the data that = to value of the attributes to get right data.
			makeOption.setAttribute("value", optText);
			//put it somewhere and change property of innerHTML and set it to text.
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		//attaches to the page
		selectLi.appendChild(makeSelect);
	}
			//Variable defaults  (changed contactGroups to guestGroup)
		var guestGroup = ["Family","Friends","CoWorker","VIP"];
		//execute our function
		createGuests();



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