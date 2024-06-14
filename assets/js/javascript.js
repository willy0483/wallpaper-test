const img = document.querySelectorAll(".image-hover");
const logogrid1 = document.getElementById("logo-grid-1");
const logogrid2 = document.getElementById("logo-grid-2");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

img.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.3)";
  });
  e.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1.2)";
  });
});

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

const legion = document.getElementById("legion");
const legionImage = document.getElementById("legionImage");

image2.addEventListener("click", (e) => {
  legion.style.display = "block";
});

legionImage.addEventListener("click", (e) => {
  legion.style.display = "none";
});
