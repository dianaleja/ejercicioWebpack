import "./index.js"
import "./styles/styles.css"
const featuresLink = document.getElementById("features-link");
const companyLink = document.getElementById("company-link");

featuresLink.addEventListener("click", () => {
  console.log("Hiciste clic en el enlace de Features");
  const featuresDropdown = document.querySelector(".features-dropdown");
  featuresDropdown.classList.toggle("show-dropdown");
});

companyLink.addEventListener("click", () => {
  console.log("Hiciste clic en el enlace de Company");
  const companyDropdown = document.querySelector(".company-dropdown");
  companyDropdown.classList.toggle("company-dropdown--show");
});
