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

// To check validation
const loginButton = document.getElementById("loginButton");
const mainBody = document.getElementById("mainBody");
const formBody = document.getElementById("formBody");
const userName = document.getElementById("userName");
const password = document.getElementById("password");

formBody.addEventListener("submit", (e) => {
  const errorBox = document.getElementById("error");

  // console.log(userName.value);
  // console.log(password.value);

  let messageBox = [];

  if (userName.value === "" || userName.value === null) {
    messageBox.push("- Username is required!");
  } else if (userName.value != "admin") {
    messageBox.push("-  Username is invalid!");
  }

  if (password.value === "" || password.value === null) {
    messageBox.push("- Password is required!");
  } else if (password.value != "admin") {
    messageBox.push("- Password is incorrect!");
  }
  // console.log(messageBox.length);

  if (messageBox.length > 0) {
    e.preventDefault();
    errorBox.innerHTML = messageBox.join("<br>");
    errorBox.style.display = "block";
  } else {
    mainBody.classList.remove("hidden");
    formBody.classList.add("hidden");
  }
});

// To Reset
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  const userName = document.getElementById("userName");
  const password = document.getElementById("password");

  userName.value = "";
  password.value = "";
});

// To Logout
const logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  const errorBox = document.getElementById("error");
  const userName = document.getElementById("userName");
  const password = document.getElementById("password");

  errorBox.style.display = "none";
  userName.value = "";
  password.value = "";

  mainBody.classList.add("hidden");
  formBody.classList.remove("hidden");
});
