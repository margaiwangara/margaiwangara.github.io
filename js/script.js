document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".f");
  const box = document.querySelector(".box-ref");
  el.addEventListener("mouseover", () => {
    box.classList.add("box-active");
  });

  el.addEventListener("mouseout", () => {
    box.classList.remove("box-active");
  });
});
