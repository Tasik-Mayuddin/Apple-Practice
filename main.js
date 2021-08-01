"use strict"

var buyList = document.getElementsByClassName("buy")

for (var i = 0; i < buyList.length; i++) {
    let z = buyList[i]
    let w = z.getAttribute("data-revert")
    let x = z.getAttribute("data-buy");
    let y = z.getAttribute("data-idref");
    z.addEventListener("mouseover", function() {buy(x,y)});
    z.addEventListener("mouseout", function() {revert(w,y)});
}

function buy(link,id) {
    document.getElementById(id).setAttribute("href",link);
}

function revert(link,id) {
    document.getElementById(id).setAttribute("href",link);
}