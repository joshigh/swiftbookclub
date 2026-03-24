/* ═══════════════════════════════════════
   Swift Business Book Club — club.js
   Update this file to change site content
═══════════════════════════════════════ */

const CLUB = {

  currentBook: {
    title:       "Atomic Habits",
    author:      "James Clear",
    sessionDate: "Thursday, April 23 · 4:00 pm",
    coverImage:  "images/atomic-habits.jpg",
    summary:     "Tiny habits compound into remarkable outcomes. Clear's framework for building systems — and breaking the ones that aren't working — applies directly to how you run a business, a team, and a day.",
    topics: [
      "Identity vs. outcomes — who you are shaping what you do",
      "Systems over goals — why process beats targets",
      "Habit formation in business and daily routines",
      "One habit you're working to build or break"
    ]
  },

  upcomingBook: {
    title:       "To be announced",
    author:      "",
    sessionDate: "May 2025"
  },

  pastBooks: [
    // Add entries here after each session. Example:
    // { title: "Deep Work", author: "Cal Newport", sessionDate: "March 2025" },
  ]

};

// ── Render current book ──
const cb = CLUB.currentBook;

const coverWrap = document.getElementById("book-cover-wrap");
const img = document.createElement("img");
img.src = cb.coverImage;
img.alt = cb.title + " by " + cb.author;
img.onerror = function () {
  const placeholder = document.createElement("div");
  placeholder.className = "book-cover-placeholder";
  placeholder.textContent = cb.title;
  this.replaceWith(placeholder);
};
coverWrap.appendChild(img);

document.getElementById("book-info-wrap").innerHTML =
  '<span class="badge">' + cb.sessionDate + " Session</span>" +
  "<h2>" + cb.title + "</h2>" +
  '<span class="author">' + cb.author + "</span>" +
  '<p style="font-size:14px;max-width:480px;">' + cb.summary + "</p>" +
  '<div class="discussion-topics">' +
  '<h4>Discussion will focus on</h4>' +
  '<ul class="topic-list">' +
  cb.topics.map(function(t) { return "<li>" + t + "</li>"; }).join("") +
  "</ul></div>";

// ── Render upcoming book ──
const up = CLUB.upcomingBook;
document.getElementById("upcoming-list").innerHTML =
  '<div class="book-row">' +
  '<span class="book-row-date">' + up.sessionDate + "</span>" +
  '<span class="book-row-title">' + up.title + "</span>" +
  '<span class="book-row-author" style="' + (!up.author ? "font-style:italic;font-size:12px;" : "") + '">' +
  (up.author || "TBA") +
  "</span></div>";

// ── Render past sessions ──
const pastList = document.getElementById("past-list");
if (CLUB.pastBooks.length === 0) {
  pastList.innerHTML =
    '<div class="book-row" style="opacity:0.35;font-style:italic;">' +
    '<span class="book-row-date">—</span>' +
    '<span class="book-row-title">No past sessions yet</span>' +
    "</div>";
} else {
  pastList.innerHTML = CLUB.pastBooks.map(function(b) {
    return '<div class="book-row">' +
      '<span class="book-row-date">' + b.sessionDate + "</span>" +
      '<span class="book-row-title">' + b.title + "</span>" +
      '<span class="book-row-author">' + b.author + "</span>" +
      "</div>";
  }).join("");
}
