(function(){
	// get switches
	var foodSwitch = document.getElementById("switch1"),
		entertainmentSwitch = document.getElementById("switch2"),
		clothingSwitch = document.getElementById("switch3"),
		souvenirsSwitch = document.getElementById("switch4"),
		surpriseSwitch = document.getElementById("switch5");

	// get interests
	var food = document.getElementById("interest-food"),
		entertainment = document.getElementById("interest-entertainment"),
		clothing = document.getElementById("interest-clothing"),
		souvenirs = document.getElementById("interest-souvenirs"),
		surprise = document.getElementById("interest-surprise");

	// set on click listeners
	food.addEventListener('click', function() { enable(food, foodSwitch) });
	entertainment.addEventListener('click', function() { enable(entertainment, entertainmentSwitch) });
	clothing.addEventListener('click', function() { enable(clothing, clothingSwitch) });
	souvenirs.addEventListener('click', function() { enable(souvenirs, souvenirsSwitch) });
	surprise.addEventListener('click', function() { enable(surprise, surpriseSwitch) });
})();

function enable(div, toggle) {
	// Visualize toggle being unchecked if it's already checked
	if (toggle.checked === true) {
		toggle.checked = false;
		div.setAttribute('toggled', 'false');
	}

	// visualize the toggle being checked if it's not checked
	else {
		toggle.checked = true;
		div.setAttribute('toggled', 'true');
	}
}
