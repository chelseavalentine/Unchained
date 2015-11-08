(function(){
	var nav = document.getElementsByClassName('app-bar')[0],
		navHeight = nav.offsetHeight,
		body = document.getElementsByTagName('body')[0];

	body.style.paddingTop = navHeight + "px";

	var back = document.getElementsByClassName('backButton')[0];
    back.addEventListener('click', function() {
        // window.history.back();
    })
})();
