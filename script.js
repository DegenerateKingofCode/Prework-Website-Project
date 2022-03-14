const h2 = document.createElement("h2");
h2.textContent = "Tanner Leroy: A Webpage Story"

document.querySelector("body").appendChild(h2);


let inputBox = document.getElementById("inputBox")
inputBox.addEventListener('mouseover', inputWrite)

function inputWrite(e){
    alert("This Input will eventually work?")
}