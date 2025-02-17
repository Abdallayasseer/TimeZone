window.addEventListener("load", function () {
  const loader = document.getElementById("loading");
  setTimeout(() => {
    loader.classList.add("hidden");
    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
  }, 500);
});
const $hoverDropdown = document.querySelector("[hover-dropdown]");
const $drobDownToggle = document.querySelectorAll("[drobDownToggle] ");
$hoverDropdown.addEventListener("mouseenter", () => {
  $drobDownToggle.forEach((item) => {
    item.style.visibility = "visible";
    item.style.opacity = 1;
    item.style.transtion = "all ease-in 0.3s";
  });
});

$hoverDropdown.addEventListener("mouseleave", () => {
  $drobDownToggle.forEach((item) => {
    item.style.visibility = "hidden";
    item.style.opacity = 0;
    item.style.transition = "all ease-out 0.3s";
  });
});
const $hoverDropdown2 = document.querySelector("[hover-dropdown2]");
const $drobDownToggle2 = document.querySelectorAll("[drobDownToggle2] ");
$hoverDropdown2.addEventListener("mouseenter", () => {
  $drobDownToggle2.forEach((item) => {
    item.style.visibility = "visible";
    item.style.opacity = 1;
    item.style.transtion = "all ease-in 0.3s";
  });
});

$hoverDropdown2.addEventListener("mouseleave", () => {
  $drobDownToggle2.forEach((item) => {
    item.style.visibility = "hidden";
    item.style.opacity = 0;
    item.style.transition = "all ease-out 0.3s";
  });
});
const $hoverDropdown3 = document.querySelector("[hover-dropdown3]");
const $drobDownToggle3 = document.querySelectorAll("[drobDownToggle3] ");
$hoverDropdown3.addEventListener("mouseenter", () => {
  $drobDownToggle3.forEach((item) => {
    item.style.visibility = "visible";
    item.style.opacity = 1;
    item.style.transtion = "all ease-in 0.3s";
  });
});

$hoverDropdown3.addEventListener("mouseleave", () => {
  $drobDownToggle3.forEach((item) => {
    item.style.visibility = "hidden";
    item.style.opacity = 0;
    item.style.transition = "all ease-out 0.3s";
  });
});
const $headerActive = document.querySelector("[headerActive]");
const $heroSectionContentActive = document.querySelector(
  "[hero-section-Content-active]"
);
const $heroSectionImgActive = document.querySelector(
  "[hero-section-Img-active]"
);
const scrollTop = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  $headerActive.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  $heroSectionContentActive.classList[window.scrollY > 30 ? "add" : "remove"](
    "active"
  );
  $heroSectionImgActive.classList[window.scrollY > 30 ? "add" : "remove"](
    "active"
  );
  scrollTop.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
scrollTop.addEventListener("scroll", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const heartItems = document.querySelectorAll(".heart-item");

heartItems.forEach((heartItem) => {
  heartItem.addEventListener("click", () => {
    heartItem.classList.toggle("red");
  });
});
heartItems.forEach((heartItem) => {
  heartItem.addEventListener("mouseenter", () => {
    heartItem.classList.add("active");
  });
  heartItem.addEventListener("mouseleave", () => {
    heartItem.classList.remove("active");
  });
});
const popularImgs = document.querySelectorAll(".popular-imgs img");
for (let i = 0; i < popularImgs.length; i++) {
  popularImgs[i].addEventListener("mouseenter", () => {
    const heartItems = document.querySelectorAll(".heart-item");
    heartItems[i].classList.toggle("active");
  });
  popularImgs[i].addEventListener("mouseleave", () => {
    const heartItems = document.querySelectorAll(".heart-item");
    heartItems[i].classList.toggle("active");
  });
}
