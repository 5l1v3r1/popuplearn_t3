export function setupPulWidgets() {
  // const widgets = document.querySelectorAll(".pul-widget");
  const closeBtns = document.querySelectorAll(".pul-close-btn");
  console.log("setupPulWidgets");

  closeBtns.forEach((btn) => {
    console.log("btn ");
    btn.addEventListener("click", (event) => {
      const widget = (event.target as Element)?.closest(".pul-widget");
      if (widget) {
        const content = widget.querySelector(".pul-content") as HTMLElement;
        if (content) {
          content.style.display =
            content.style.display === "none" ? "block" : "none";
        }
      }
    });
  });
}
