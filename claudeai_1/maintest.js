// Kies je taalbestand
const lang = "en"; // of "nl"
const dataFile = `data_cv_${lang}.json`;

// Laad de gegevens en genereer de CV
fetch(dataFile)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cv-container");

    // Maak een header-element aan
    const header = document.createElement("header");

    // Voeg de naam en achternaam toe
    const firstName = document.createElement("h1");
    firstName.textContent = identification.["firstName"];

    const lastName = document.createElement("h1");
    lastName.textContent = data.lastName;

    // Voeg de elementen toe aan de header
    header.appendChild(firstName);
    header.appendChild(lastName);


    // Voeg de header toe aan de container
    container.appendChild(header);
  })
  .catch(error => console.error("Error loading CV data:", error));