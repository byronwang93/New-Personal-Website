// var icons = document.getElementsByClassName("toggle");
// var icon = icons[0];

// var elements = document.getElementsByTagName("form");
var elements = document.getElementsByClassName("toggle");

$(".toggle").click(toggleFunction());

function toggleFunction() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        element.onclick = function() {
            document.body.classList.toggle("dark-theme");
        
            var audio = new Audio();

            // audio.src = "click.mp3";
            if (document.body.classList.contains("mainToggle")) {
                audio.src = "click.mp3";
            } else {
                audio.src = "../click.mp3";
            }

            audio.play();
        
            if (document.body.classList.contains("dark-theme")) {
                element.innerHTML = "Too Dark? <i class='far fa-sun'></i>";
            } else {
                element.innerHTML = "Too Bright? <i class='far fa-moon'></i>";
            }
        } 
    }
}


// var icon = document.getElementsByClassName("mainToggle");

// icon[0].onclick = function() {
//     document.body.classList.toggle("dark-theme");

//     var audio = new Audio();
//     audio.src = "click.mp3";
//     audio.play();

//     if (document.body.classList.contains("dark-theme")) {
//         icon.innerHTML = "Too Dark? <i class='far fa-sun'></i>";
//     } else {
//         icon.innerHTML = "Too Bright? <i class='far fa-moon'></i>";
//     }
// } 