document.getElementById("buy2").addEventListener("mouseover", buy2);
document.getElementById("buy2").addEventListener("mouseout", buy2out);

function buy2() {
    document.getElementById("switch2").setAttribute("href","https://www.google.com/");
}

function buy2out() {
    document.getElementById("switch2").setAttribute("href","");
}