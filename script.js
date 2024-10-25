// SUPABASE_URL = "http://nzhzhxhydfeyqnqvicci.supabase.co";
// SUPABASE_ANON_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHpoeGh5ZGZleXFucXZpY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NTUxMjEsImV4cCI6MjA0NTEzMTEyMX0.DaupQ_XXj0gTA8HZmMVT4a9m0AARWqpsAZm2fxy79Yo";

// import { createClient } from "/node_modules/@supabase/supabase-js";
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// const rez = await supabase.from("Trips").select("*");
// const data2 = await rez.json();
// console.log(data2);

// Selecting DOM Elements:
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Creat DOM Elements and render post in the list
//factsList.innerHTML = "";

loadPosts();

async function loadPosts() {
  //Load DATA from Supabase:
  const response = await fetch(
    "https://nzhzhxhydfeyqnqvicci.supabase.co/rest/v1/Trips",
    //"https://nzhzhxhydfeyqnqvicci.supabase.co",
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

  console.log(data);
}

// Switch form visibility:
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
