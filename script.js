console.log("Helllllos");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  console.log("Clicked");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});
