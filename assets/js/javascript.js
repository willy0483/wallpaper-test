const img = document.querySelectorAll(".image-hover");
const logogrid1 = document.getElementById("logo-grid-1");
const logogrid2 = document.getElementById("logo-grid-2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const container = document.getElementById("container");

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
logogrid1.addEventListener("mouseover", () => {
  image2.style.transform = "scale(1.3)";
});

logogrid1.addEventListener("mouseout", () => {
  image2.style.transform = "scale(1.2)";
});

logogrid2.addEventListener("mouseover", () => {
  image3.style.transform = "scale(1.3)";
});

logogrid2.addEventListener("mouseout", () => {
  image3.style.transform = "scale(1.2)";
});

// legion
const legion = document.getElementById("legion");
const legionImage = document.getElementById("legionImage");

image2.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  legion.style.display = "block";
  container.style.display = "none";
});

legionImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  legion.style.display = "none";
  container.style.display = "block";
});

// king
const king = document.getElementById("king");
const kingImage = document.getElementById("kingImage");

image4.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  king.style.display = "block";
  container.style.display = "none";
});

kingImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  king.style.display = "none";
  container.style.display = "block";
});

// panda
const panda = document.getElementById("panda");
const pandaImage = document.getElementById("pandaImage");

image3.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  panda.style.display = "block";
  container.style.display = "none";
});

pandaImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  panda.style.display = "none";
  container.style.display = "block";
});

// dragon
const dragon = document.getElementById("dragon");
const dragonImage = document.getElementById("dragonImage");

image1.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  dragon.style.display = "block";
  container.style.display = "none";
});

dragonImage.addEventListener("click", (e) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Show the dragon element and hide the container element
  dragon.style.display = "none";
  container.style.display = "block";
});

const srcollDown = document.getElementById("srcollDown");

srcollDown.addEventListener("click", (e) => {
  e.preventDefault();
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition === 0) {
    window.scrollTo({ top: 360, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
