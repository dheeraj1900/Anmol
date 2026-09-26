/*
  ================================
  EDIT YOUR MUSEUM HERE
  ================================
*/

const MUSEUM = {
  person: "My Favourite Person",
  yourName: "Your Name",
  relationship: "Soulmate",

  // Quotes for each room
  quotes: {
    intro: "“In all the world, there is no heart for me like yours.” — Maya Angelou",
    reasons: "“I love you not only for what you are, but for what I am when I am with you.” — Roy Croft",
    memory: "“We do not remember days, we remember moments.” — Cesare Pavese",
    silly: "“Life is short. Smile while you still have teeth.”",
    promises: "“Whatever our souls are made of, his and mine are the same.” — Emily Brontë",
    collage: "“To love and be loved is to feel the sun from both sides.” — David Viscott",
    video: "“Every video is a time machine to a moment where time stood still.”",
    letter: "“You are my today and all of my tomorrows.” — Leo Christopher",
    ending: "“The best is yet to be.” — Robert Browning"
  },

  intro:
    "Eight little rooms, filled with the things I don't always say out loud. Walk slowly. There is no admission fee — just bring your heart.",

  introImage: "./assets/1.png",

  // Room 1: Reasons
  reasonsImg: "./assets/8.PNG",
  message1: "I rarely mention it, but I see everything you do for this relationship, even the little things.",
  message2: "You're still the best part of my everyday, even on the completely ordinary days.",
  message3: "I keep finding new little reasons to fall for you, probably more often than you know.",

  // Room 2: Memory
  memoryImg: "./assets/2.png",
  memory:
    "No matter how ordinary the day was, somehow having you there made it one I wanted to remember. Those little moments are the ones I keep coming back to.",

  // Room 3: Silly
  sillyImg: "./assets/3.png",

  // Room 4: Promises
  promiseImg: "./assets/10.png",

  // Room 5: Collage Photos & Captions
  collage: [
    {
      url: "./assets/5.png",
      caption: "First sunny day together ☀️"
    },
    {
      url: "./assets/6.jpg",
      caption: "Unplanned roadtrips 🚗"
    },
    {
      url: "./assets/7.png",
      caption: "Pure unfiltered happiness ✨"
    },
    {
      url: "./assets/9.png",
      caption: "That smile I adore ♥"
    }
  ],

  // Room 6: Video Links & Embed
  // Tip: For YouTube embed, use 'https://www.youtube.com/embed/VIDEO_ID'
  videoEmbed: "./assets/13.mp4",
  videoLink1: { label: "▶ Our Memory Reel (YouTube)", url: "./assets/14.mp4" },
  videoLink2: { label: "▶ Favorite TikTok / Drive Video", url: "./assets/4.mp4" },

  // Room 7: Letter
  letterSideImg: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
  letter:
`My love,

I don't always know how to put everything I feel into words, but I hope you know how much you mean to me.

Thank you for the laughs, the little moments, the patience, the silly conversations, and all the ordinary days that somehow became special because you were there.

You're still the person I want to tell things to first. You're the person who makes the good days better and the difficult ones feel a little lighter.

I don't know what every chapter ahead will look like, but I know I want to keep writing them with you.

I'm so grateful for you.

Always yours,`,

  // Room 8: Ending
  endingImg: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",

  signature: "Your Name"
};

let currentRoom = 0;
const TOTAL_ROOMS = 7; // Rooms 1 to 7

function $(id){ return document.getElementById(id); }

function setup(){
  // Brand & Intro
  $("navBrand").textContent = MUSEUM.person ? `${MUSEUM.person} ♥` : "Our Little Museum";
  $("introText").textContent = MUSEUM.intro;
  $("introImage").src = MUSEUM.introImage;

  // Quotes
  $("quoteIntro").textContent = MUSEUM.quotes.intro;
  $("quoteReasons").textContent = MUSEUM.quotes.reasons;
  $("quoteMemory").textContent = MUSEUM.quotes.memory;
  $("quoteSilly").textContent = MUSEUM.quotes.silly;
  $("quotePromises").textContent = MUSEUM.quotes.promises;
  $("quoteCollage").textContent = MUSEUM.quotes.collage;
  $("quoteVideo").textContent = MUSEUM.quotes.video;
  $("quoteLetter").textContent = MUSEUM.quotes.letter;
  $("quoteEnding").textContent = MUSEUM.quotes.ending;

  // Section Images
  $("reasonsImg").src = MUSEUM.reasonsImg;
  $("message1").textContent = MUSEUM.message1;
  $("message2").textContent = MUSEUM.message2;
  $("message3").textContent = MUSEUM.message3;

  $("memoryImg").src = MUSEUM.memoryImg;
  $("memoryText").textContent = MUSEUM.memory;

  $("sillyImg").src = MUSEUM.sillyImg;
  $("promiseImg").src = MUSEUM.promiseImg;

  // Collage setup
  if(MUSEUM.collage && MUSEUM.collage.length >= 4){
    $("collage1").src = MUSEUM.collage[0].url;
    $("caption1").textContent = MUSEUM.collage[0].caption;
    $("collage2").src = MUSEUM.collage[1].url;
    $("caption2").textContent = MUSEUM.collage[1].caption;
    $("collage3").src = MUSEUM.collage[2].url;
    $("caption3").textContent = MUSEUM.collage[2].caption;
    $("collage4").src = MUSEUM.collage[3].url;
    $("caption4").textContent = MUSEUM.collage[3].caption;
  }

  // Video Section
  $("videoPlayer").src = MUSEUM.videoEmbed;
  $("videoLink1").textContent = MUSEUM.videoLink1.label;
  $("videoLink1").href = MUSEUM.videoLink1.url;
  $("videoLink2").textContent = MUSEUM.videoLink2.label;
  $("videoLink2").href = MUSEUM.videoLink2.url;

  // Letter & Ending
  $("letterSideImg").src = MUSEUM.letterSideImg;
  $("endingImg").src = MUSEUM.endingImg;

  $("letter").textContent = MUSEUM.letter;
  $("letterTo").textContent = MUSEUM.person;
  $("from").textContent = MUSEUM.signature || MUSEUM.yourName;

  createDots();
  showRoom(0);
}

function createDots(){
  const dots = $("dots");
  dots.innerHTML = "";
  for(let i=1; i <= TOTAL_ROOMS; i++){
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", `Room ${i}`);
    d.onclick = () => showRoom(i);
    dots.appendChild(d);
  }
}

function showRoom(number){
  document.querySelectorAll(".room").forEach(r => r.classList.remove("active"));
  const target = document.querySelector(`.room[data-room="${number}"]`);
  if(!target) return;
  target.classList.add("active");
  currentRoom = number;

  $("currentNo").textContent = number === 0 ? "00" : number === 8 ? "♥" : String(number).padStart(2, "0");

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i + 1 === number);
  });

  window.history.replaceState(null, "", number === 0 ? location.pathname : `#room-${number}`);
}

function nextRoom(){
  if(currentRoom < 7) showRoom(currentRoom + 1);
  else if(currentRoom === 7) showRoom(8);
  else showRoom(1);
}

function previousRoom(){
  if(currentRoom > 1) showRoom(currentRoom - 1);
  else if(currentRoom === 1) showRoom(0);
  else if(currentRoom === 8) showRoom(7);
}

function openLetter(){
  $("letterModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLetter(){
  $("letterModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLetter();
  if(e.key === "ArrowRight") nextRoom();
  if(e.key === "ArrowLeft") previousRoom();
});

window.addEventListener("popstate", () => loadHash());
window.addEventListener("hashchange", () => loadHash());

function loadHash(){
  const match = location.hash.match(/room-(\d+)/);
  if(match) showRoom(Math.min(8, Math.max(0, Number(match[1]))));
}

setup();
