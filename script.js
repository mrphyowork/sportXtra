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

// For Fetch API
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    renderData(data); // Log the data to the console
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error); // Handle errors
  });

function renderData(data) {
  const getData = document.getElementById("data");
  getData.innerHTML = "";

  let count = 0;
  data.forEach((element) => {
    if (count < 3) {
      const card = document.createElement("card");
      card.innerHTML = `
    <div class="card-api row mt-3 justify-content-center">
    <div class="card mx-2">
    <img src="${element.image}" class="w-25 mx-auto" />
    <p>ID: ${element.id}</p>
    <p>Title: ${element.title}</p>
    <p>Price: ${element.price}</p>
    <p>Category: ${element.category}</p>
    </div>
    </div>
    `;
      getData.appendChild(card);
      count++;
    }
  });
}
