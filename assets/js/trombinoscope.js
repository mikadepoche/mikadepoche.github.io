document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const container = document.getElementById("profilesContainer");
  const cards = Array.from(container.querySelectorAll(".profile-card"));

  // Au départ : cacher toutes les cartes
  cards.forEach(card => {
    card.style.display = "none";
  });

  input.addEventListener("input", function () {
    const search = input.value.toLowerCase().trim();

    // Filtrer les cartes
    let filtered = [];
    cards.forEach(card => {
      const name = card.querySelector(".profil-name")?.textContent.toLowerCase() || "";
      const prenom = card.dataset.prenom || "";

      if (search !== "" && (prenom.includes(search) || name.includes(search))) {
        filtered.push(card);
      } else {
        card.style.display = "none";
      }
    });

    // Trier les résultat filtrés par prénom (ordre alphabétique)
    filtered.sort((a, b) => {
      const prenomA = a.dataset.prenom.toLowerCase();
      const prenomB = b.dataset.prenom.toLowerCase();
      return prenomA.localeCompare(prenomB);
    });

    // Réinsérer les cartes triées dans le container
filtered.forEach(card => {
  card.style.display = "block";

  // Vérifier si c'est un ancien et réappliquer le style si besoin
  if (card.classList.contains("ancien")) {
    const img = card.querySelector("img");
    if (img) {
      img.style.filter = "grayscale(100%)";
      img.style.opacity = "0.8";
    }
  }

  container.appendChild(card); // réordonne dans le DOM
});

  });
});

