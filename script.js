// For Clock
function updateClock() {
  let date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const day = days[date.getDay()];
  const d = date.getDate();
  const month = months[date.getMonth()];

  const clockElement = document.getElementById("clockTime");
  clockElement.textContent = `  ${hours}:${minutes}:${seconds} `;

  const dateElement = document.getElementById("clockDate");
  dateElement.textContent = `${day} ${d} ${month}`;
}
setInterval(updateClock, 1000);
updateClock();

// validation
const name = document.getElementById("contact-name");
// const textCount = document.getElementById("contact-text");
const form = document.getElementById("contact-form");
const errorBox = document.getElementById("error-box");

errorBox.style.display = "none";

form.addEventListener("submit", (e) => {
  const messages = [];

  // const textLenght = text;

  if (name.value === "" || name.value === null) {
    messages.push("- Name is required!");
  }

  // if (textCount > 100) {
  //   messages.push("- Message box is over 200 words!");
  // }

  if (messages.length > 0) {
    e.preventDefault();
    errorBox.innerHTML = messages.join("<br>");
    errorBox.style.display = "block";
  }
});
