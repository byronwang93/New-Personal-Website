var icon = document.getElementById("toggle");


icon.onclick = function() {
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