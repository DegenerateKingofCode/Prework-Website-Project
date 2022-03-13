const h2 = document.createElement("h2");
h2.textContent = "Tanner Leroy: A Webpage Story"

document.querySelector("body").appendChild(h2);

const imageDescription = document.getElementsByClassName("imageDescription");
imageDescription.addEventListener("click", function() {
    alert('Swagger Alert!') 
})
