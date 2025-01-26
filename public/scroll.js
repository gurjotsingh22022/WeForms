document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("create-key-btn");
    button?.addEventListener("click", () => {
      document.getElementById("steps")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });