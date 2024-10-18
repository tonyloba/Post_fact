// console.log("Helllllos");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  console.log("Clicked");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Set a trip";
  }
});

function calcPostAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return `Wrong Year! Should less or equal ${currentYear}`;
}

let votesYes = 0;
let votesNo = 0;
let votesDontKnow = 0;
let votesBadIdea = 0;
