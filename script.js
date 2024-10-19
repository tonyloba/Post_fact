// Selecting DOM Elements:
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Creat DOM Elements and render post in the list
//factsList.innerHTML = "";

loadPosts();

async function loadPosts() {
  //Load DATA from Supabase:
  const res = await fetch(
    "https://nzhzhxhydfeyqnqvicci.supabase.co/rest/v1/Trips",
    {
      //mode: "no-cors",
      headers: {
        apikeys:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHpoeGh5ZGZleXFucXZpY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMzMwMTksImV4cCI6MjA0NDYwOTAxOX0.grwBrpB8DAKTOajH4zhneBiiOatWFix6yOVgksNfyz4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHpoeGh5ZGZleXFucXZpY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMzMwMTksImV4cCI6MjA0NDYwOTAxOX0.grwBrpB8DAKTOajH4zhneBiiOatWFix6yOVgksNfyz4",
      },
    }
  );
  const data = await res.json();
  // here shoud be whih load from DB to DOM html:  createFactsList(data)
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
