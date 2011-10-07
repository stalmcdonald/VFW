//Crystal McDonald
//Visual Frameworks (VFW)
//Full Sail University
//September 3, 2011
//Project 2

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	//creating shortcut function whenever we want to get element.
	function $(x) {
		var theElement = document.getElementByID(x);
		return theElement;
	}
	//create select field element an populate it w/ options. exchanged createGuests from makeCats.
	function createGuests() {
				//created variable to target form tag
		var formTag = document.getElementsByTagName("form"),  //form tag is an array. b/c plural getElements.
			//created a variable to target the list item  
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "guests");
		for(var i=0, j=contactGroups.length; i<j;  i++) {
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		//attaches to the page
		selectLi.appendChild(makeSelect);
	}
	//Find value of selected radio button.
	function getSelectedRadio() {
		var radios = document.getElementbyId.guestForm[0].rsvp; 
		for(var i=0; i<radios.length; i++) {
			if(radios[i].checked) {
				answerValue = radios[i].value;
			}
		}
	}
	function getCheckboxValue() {
		if($("rsvp'd").checked) {
			rsvpValue = $("rsvp'd").value;
		}else{
			rsvpValue = "No";
		}
	}
	
	//changing css properties to turn html on off
	function toggleControls(n) {
		switch(n) {
			case "on":
				$("guestForm").style.display = "none";
				//on an anchor tag 
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				//reloads page back to form
				$("addNew").style.display = "inline";
				break;
				//when not looking at data
			case "off":
				$("guestForm").style.display = "block";
				//on an anchor tag 
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				//reloads page back to form
				$("addNew").style.display = "none";
				//were hiding not leaving, data still there
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
	}
		function storeData() {
			//everytime submit guest it generates a new id creating a new random number
			var id = Math.floor(Math.random() * 100000001);
			//Gather up all our form field values and store in an object
			//object properties contain array w/ form label and input values. 
			getSelectedRadio();
			getCheckboxValue();
			var item   = {};
				item.guest = ["Guest:", $('guests').value];
				item.fname = ["First Name:", $('fname').value];
				item.lname = ["Last Name:", $('lname').value];
				item.date = ["Date Invitation Mailed:", $('date').value];
				item.RSVPd = ["RSVP'd",rsvpValue];  //checkbox
				item.rsvp = ["Guest Count Info:",answerValue]; //radio
				item.additionalGuest= ["Additional Guests:", $("Additional Guests").value];
				item.notes = ["Notes:", $("notes").value];
		
			//save data in local storage using stringify to convert object to a string with all of our values
			localStorage.setItem(id, JSON.stringify(item) );
			alert("Guest Saved!");
		}
		
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage.");
		}
		//write data from local storage to the browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		//unordered list that holds items
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		//precaution for to display
		$("items").style.display = "block";
		//getting data out of local storage
		for(var i=0; len=localStorage.length; i<len; i++) {
			//putting key value pair in list item
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//convert string from local storage value back to an object using JSON.parse
			var obj = JSON.parse(value);
			//loop through all the data (loops inside of loops)
			//create another unordered list item (sublist)
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				//looks at obj property grabs 1st index of array for label and then second for the value
				var optSubText = obj[n][0]+" " +obj[n][1];
				//assigning to a variable
				makeSubli.innerHTML = optSubText;
				}
				SelectLi.appendChild(makeSelect);
			}
			
		}
		
		function clearLocal() {
			if(localStorage.length === 0) {
				alert("There is no data to clear.");
			}else{
				localStorage.clear();
				alert("All contacts are deleted.");
				window.location.reload();
				return false;
			}
		}
		//Variable defaults  array for drop down menu
		var contactGroups = ["--Choose A Guest","Family","Friends","CoWorker","VIP","Honored Guest"],
			answerValue,
			rsvpValue = "No";
			//execute our function
			createGuests();

		//Set Link & Submit Click Events using id =display data
		var displayLink = $("displayLink");
		//do something w/ the element so when click something happens  addEventListner doesnt do () for the function
		displayLink.addEventListener("click", getData);
		var clearLink = $("clear");
		clearLink.addEventListener("click", clearLocal);
		var save = $("submit");
		save.addEventListener("click", storeData);
		


//ensures nothing will run until DOM content is loaded.
});
