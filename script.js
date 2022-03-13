const h2 = document.createElement("h2");
h2.textContent = "Tanner Leroy: A Webpage Story"

document.querySelector("body").appendChild(h2);

let link = document.getElementById("link");
link.addEventListener("mouseover", function(event){
    event.target.style.color = "orange"
})
