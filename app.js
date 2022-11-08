let menuIcon = document.querySelectorAll(".icon");
menuIcon.forEach((element, index) => {
  element.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    const root = document.querySelector(':root');
    root.style.setProperty('--distance', `${70.5 * index}px`);
  });
});