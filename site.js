function menuFirstMobil() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("nav-active");
  });
}
menuFirstMobil();
