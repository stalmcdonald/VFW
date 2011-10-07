//wait till dom is ready
window.addEventListner("DOMContentLoaded", function () {

	//get elementsbyidfunction
		function $(x) {
			var theElement = document.getElementById(x);
			return theElement;
		}

		function makeCats(){
			var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
		for(var i=0; j=contactGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	var contactGroups = ["--Choose A Group--", "Friends", "Family", "Work"];
	makeCats();
	
	
	var displayLink = $('displayLink');
	displayLink.addEventLister("click", getData)
	var clearLink = $('clear');
	clearLink.addEventLister("click", clearLocal);
	var save = $("submit");
	save.addEventLister("click", storeData);
	
});