(function(){
	// readjust the carousel's container width depending on screen view
	var carousel = document.getElementById("carousel"),
		items = document.getElementsByClassName("item"),
		captions = document.getElementsByClassName("carousel-caption");

	// get height of sign-up section
	var signUpDiv = document.getElementById("sign-up"),
		signUpHeight = signUpDiv.offsetHeight;

	
	// get height of window
	var windowHeight = window.innerHeight - signUpHeight,
		navHeight = document.getElementsByTagName("nav")[0].offsetHeight;
	carousel.style.height = windowHeight + "px";

	// set each carousel slide to 90% window height
	for (var i = 0; i < items.length; i++) {
		items[i].style.height = windowHeight + "px";
		captions[i].style.height = windowHeight - navHeight + "px";
	}
})();
