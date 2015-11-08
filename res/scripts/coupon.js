(function(){
	var nav = document.getElementsByClassName('app-bar')[0],
		navHeight = nav.offsetHeight,
		container = document.getElementsByClassName('content-container')[0];

	container.style.paddingTop = navHeight + "px";

	var back = document.getElementsByClassName('backButton')[0];
    back.addEventListener('click', function() {
        // window.history.back();
    })
})();
