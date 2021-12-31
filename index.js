var icon = document.getElementById("toggle");


icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML = "Too Dark? <i class='far fa-sun'></i>";
    } else {
        icon.innerHTML = "Too Bright? <i class='far fa-moon'></i>";
    }
}