var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var wrapper = document.querySelector(".wrapper");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var three = document.querySelector(".three");
var newGradient = document.createElement("input");


setRandomBackground();


function setGradient() {

    body.style.background = "linear-gradient(to right, " + colour1.value + ", "  + colour2.value + ")";

    css.innerHTML = body.style.background + ";";
}

function randomHexColour() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    n = '#' + n.slice(0, 6);
    return n;
}

function setRandomBackground() {
    colour1.value = randomHexColour();
    colour2.value = randomHexColour();
    setGradient();
    
}

setGradient();


function threeGradient() {


        newGradient.type = "color";
        newGradient.value = randomHexColour();
        setRandomBackground();
        newGradient.className = "colour3";
        wrapper.appendChild(newGradient);
        body.style.background = "linear-gradient(to right, " + colour1.value + ", "  + colour2.value + ", " + newGradient.value + ")";
        css.innerHTML = body.style.background + ";";
}



colour1.addEventListener("input", setGradient)

colour2.addEventListener("input", setGradient)

button.addEventListener("click", setRandomBackground);

three.addEventListener("click", threeGradient);

button.onclick = function() {
    newGradient.style.visibility = "hidden";
}

three.onclick = function() {
    newGradient.style.visibility = "visible";
}

