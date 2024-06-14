const img = document.querySelectorAll(".image-hover");
const logogrid1 = document.getElementById("logo-grid-1");
const logogrid2 = document.getElementById("logo-grid-2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");





// hover 
img.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.3)";
  });
  e.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1.2)";
  });
});



// hover over logo
logogrid1.addEventListener("mouseover", (e) => {
  image2.style.transform = "scale(1.3)";
});

logogrid1.addEventListener("mouseout", (e) => {
  image2.style.transform = "scale(1.2)";
});

logogrid2.addEventListener("mouseover", (e) => {
  image3.style.transform = "scale(1.3)";
});

logogrid2.addEventListener("mouseout", (e) => {
  image3.style.transform = "scale(1.2)";
});


// legion
const legion = document.getElementById("legion");
const legionImage = document.getElementById("legionImage");

image2.addEventListener("click", (e) => {
  legion.style.display = "block";
});

legionImage.addEventListener("click", (e) => {
  legion.style.display = "none";
});



// king
const king = document.getElementById("king");
const kingImage = document.getElementById("kingImage");

image4.addEventListener("click", (e) => {
  king.style.display = "block";
});

kingImage.addEventListener("click", (e) => {
  king.style.display = "none";
});




// panda
const panda = document.getElementById("panda");
const pandaImage = document.getElementById("pandaImage");

image3.addEventListener("click", (e) => {
  panda.style.display = "block";
});

pandaImage.addEventListener("click", (e) => {
  panda.style.display = "none";
});



// dragon
const dragon = document.getElementById("dragon");
const dragonImage = document.getElementById("dragonImage");

image1.addEventListener("click", (e) => {
  dragon.style.display = "block";
});

dragonImage.addEventListener("click", (e) => {
  dragon.style.display = "none";
});
