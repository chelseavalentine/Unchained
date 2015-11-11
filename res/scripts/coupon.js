var starClicked = false;

(function(){
	var back = document.getElementsByClassName("backButton")[0];
    back.addEventListener('click', function() {
        window.history.back();
    });

    var star = document.getElementById('rateStar');
    star.addEventListener('click', function() {
        if (starClicked === false) {
            starClicked = true;
            star.src = "./res/images/filled-star.svg";
        } else {
            starClicked = false;
            star.src = "./res/images/unfilled-star.svg";
        }
    })
})();
