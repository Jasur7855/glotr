document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".showAll").forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentSection = this.closest("section");
      if (!parentSection) return;

      const content = parentSection.querySelector("ol, ul, p");
      const arrowIcon = this.querySelector("img");

      if (content) {
        content.classList.toggle("expanded");
        if (content.classList.contains("expanded")) {
          this.querySelector("span").textContent = "Скрыть";
          arrowIcon.style.transform = "rotate(180deg)";
        } else {
          this.querySelector("span").textContent = "Показать все";
          arrowIcon.style.transform = "rotate(0deg)";
        }
      }
    });
  });
});
