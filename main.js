document.addEventListener("DOMContentLoaded", function () {
  const recommended = document.querySelector(".recommended");
  const similarSalesman = document.querySelector(".similarSalesman"); // ✅ Исправлено

  if (recommended) {
    recommended.addEventListener("click", toggleLike);
  }
  if (similarSalesman) {
    similarSalesman.addEventListener("click", toggleLike);
  }

  function toggleLike(event) {
    const target = event.target;
    if (target.classList.contains("greey")) {
      target.classList.remove("greey");
      target.classList.add("red");
    } else if (target.classList.contains("red")) {
      target.classList.remove("red");
      target.classList.add("greey");
    }
  }

  document.querySelectorAll(".showAll").forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentSection = this.closest("section");
      if (!parentSection) return;

      const content = parentSection.querySelector("ol, ul, p");
      if (!content) return;

      content.classList.toggle("expanded");

      const span = this.querySelector("span");
      if (span) {
        span.textContent = content.classList.contains("expanded")
          ? "Скрыть"
          : "Показать все";
      }

      const arrowIcon = this.querySelector("img");
      if (arrowIcon) {
        arrowIcon.style.transform = content.classList.contains("expanded")
          ? "rotate(180deg)"
          : "rotate(0deg)";
      }
    });
  });
});
