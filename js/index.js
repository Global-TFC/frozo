function show() {
    document.getElementById("sidebar").style.left = "0%";
    document.getElementById("clbtnid").style.display = "block";
    document.getElementById("opbtnid").style.display = "none";
}

function hide() {
    document.getElementById("sidebar").style.left = "-100%";
    document.getElementById("clbtnid").style.display = "none";
    document.getElementById("opbtnid").style.display = "block";
}