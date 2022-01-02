// var icon = document.getElementById("toggle");
// var icons = document.getElementsByClassName("toggle");
// var icon = icons[0];


// icon.onclick = function() {
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

var elements = document.getElementsByTagName("form");

$(".toggle").click(function() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        element.onclick = function() {
            document.body.classList.toggle("dark-theme");
        
            var audio = new Audio();
            audio.src = "../click.mp3";
            audio.play();
        
            if (document.body.classList.contains("dark-theme")) {
                icon.innerHTML = "Too Dark? <i class='far fa-sun'></i>";
            } else {
                icon.innerHTML = "Too Bright? <i class='far fa-moon'></i>";
            }
        } 
    }
})
