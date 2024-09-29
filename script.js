const celestialName = "Mars";
let celestialType = "Planet";
var discoveryYear = 1659;

function populateHeader() {
  const nameElement = document.getElementById("celestial-name");
  nameElement.textContent = celestialName;
}

document.addEventListener("DOMContentLoaded", populateHeader);

const spaceFact = "Mars has two moons: Phobos and Deimos.";

function revealFact() {
  const factElement = document.getElementById("space-fact");
  factElement.textContent = spaceFact;
  factElement.style.display = "block";
}

document.getElementById("reveal-fact").addEventListener("click", revealFact);

function addCelestialDescription() {
  const infoSection = document.getElementById("celestial-info");
  const description = document.createElement("p");
  description.textContent = `${celestialName} is a ${celestialType}, and it was discovered in ${discoveryYear}. It is known for its reddish appearance.`;
  infoSection.appendChild(description);
}

document.addEventListener("DOMContentLoaded", addCelestialDescription);

const lightYearsToMiles = (lightYears) => lightYears * 5.879e+12;
const marsDistanceInLightYears = 0.00001581;
console.log(lightYearsToMiles(marsDistanceInLightYears));

try {
  nonexistentFunction();
} catch (error) {
  console.error("An error occurred:", error);
} finally {
  console.log("Error handling completed.");
}

const marsFacts = [
  "Mars has the largest volcano in the solar system, Olympus Mons.",
  "A day on Mars lasts 24 hours and 37 minutes.",
  "Mars's surface is covered in iron oxide, giving it a reddish color."
];

function displayFacts() {
  const ulElement = document.createElement("ul");
  marsFacts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    ulElement.appendChild(li);
  });
  document.getElementById("celestial-info").appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", displayFacts);

// New function to handle the "Show More Info" button click
function showMoreInfo() {
  const moreInfo = document.createElement("p");
  moreInfo.textContent = "Mars has seasons like Earth, due to its tilt of 25.2 degrees. It's also home to the Valles Marineris canyon system, which is over 4,000 km long.";
  
  const infoSection = document.getElementById("celestial-info");
  infoSection.appendChild(moreInfo);
}

document.getElementById("show-more-info").addEventListener("click", showMoreInfo); // Add event listener for the new button