// Kies je taalbestand
const lang = "en"; // of "nl"
const dataFile = `data-${lang}.json`;

// Laad de gegevens en genereer de CV
fetch(dataFile)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cv-container");
    container.innerHTML = `
      <h1>${data.name}</h1>
      <h2>${data.title}</h2>
      <p>${data.summary}</p>
      <h3>Experience</h3>
      <ul>
        ${data.experience.map(exp => `
          <li>
            <strong>${exp.position}</strong> at ${exp.company} (${exp.date})
            <p>${exp.description}</p>
          </li>
        `).join("")}
      </ul>
      <h3>Education</h3>
      <ul>
        ${data.education.map(edu => `
          <li>
            <strong>${edu.degree}</strong> at ${edu.institution} (${edu.date})
          </li>
        `).join("")}
      </ul>
    `;
  })
  .catch(error => console.error("Error loading CV data:", error));