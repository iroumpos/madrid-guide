console.log("Madrid Guide Website Loaded");

const toggleButton = document.getElementById("language-toggle");
let currentLang = "en"; // default language

toggleButton.addEventListener("click", () => {
  // Switch language
  currentLang = currentLang === "en" ? "gr" : "en";

  // Update all text elements with data-en / data-gr
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = currentLang === "en" ? el.dataset.en : el.dataset.gr;
  });

  // Update button text
  toggleButton.textContent = currentLang === "en" ? "Ελληνικά" : "English";
});
