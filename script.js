const h2 = document.createElement("h2");
h2.textContent = "Tanner Leroy: A Webpage Story"

document.querySelector("body").appendChild(h2);

const link = document.getElementById("link");
link.addEventListener("click", function(){
    alert('Swagger Alert!') 
})
