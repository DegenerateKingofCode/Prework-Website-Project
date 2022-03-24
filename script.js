const h3 = document.createElement("h3");
h3.textContent = "Let's see how this works out."

document.querySelector("body").appendChild(h3);


let inputBox = document.getElementById("inputBox")
inputBox.addEventListener('mouseover', inputWrite)

function inputWrite(e){
    alert("This Input will eventually work?")
}