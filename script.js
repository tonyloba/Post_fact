const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#fff" },
  { name: "science", color: "#fff" },
  { name: "finance", color: "#fff" },
  { name: "society", color: "#fff" },
  { name: "entertainment", color: "#fff" },
  { name: "health", color: "#fff" },
  { name: "history", color: "#fff" },
  { name: "news", color: "#fff" },
];

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// Selecting DOM Elements:
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Switch form visibility:
btn.addEventListener("click", function () {
  console.log("Clicked");
  //Creat DOM Elements and render post in the list
  factsList.innerHTML = "";

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

loadPosts();

async function loadPosts() {
  //Load DATA from Supabase:
  const response = await fetch(
    "https://nzhzhxhydfeyqnqvicci.supabase.co/rest/v1/Trips",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHpoeGh5ZGZleXFucXZpY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NTUxMjEsImV4cCI6MjA0NTEzMTEyMX0.DaupQ_XXj0gTA8HZmMVT4a9m0AARWqpsAZm2fxy79Yo",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHpoeGh5ZGZleXFucXZpY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NTUxMjEsImV4cCI6MjA0NTEzMTEyMX0.DaupQ_XXj0gTA8HZmMVT4a9m0AARWqpsAZm2fxy79Yo",
      },
    }
  );
  const data = await response.json();
  createFactsList(data);

  //console.log(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = initialFacts.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}</li>`
    //   <a
    //     class="source"
    //     href="${fact.source}"
    //     target="_blank"
    //   >(Source)</a>
    // </p>
    // <span class="tag" style="background-color: ${
    //   CATEGORIES.find((cat) => cat.name === fact.category).color
    // }">${fact.category}</span>
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
