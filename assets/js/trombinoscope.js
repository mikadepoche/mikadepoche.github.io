document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const container = document.getElementById("profilesContainer");
  const cards = Array.from(container.querySelectorAll(".profile-card"));

  // Cacher toutes les cartes au départ
  cards.forEach(card => {
    card.style.display = "none";
  });

  input.addEventListener("input", function () {
    const search = input.value.toLowerCase().trim();

    let filtered = [];
    cards.forEach(card => {
      const fullname = card.querySelector(".profil-name")?.textContent.toLowerCase() || "";
      const prenom = card.dataset.prenom?.toLowerCase() || "";

      // recherche possible sur prénom OU nom de famille
      if (search !== "" && (fullname.includes(search) || prenom.includes(search))) {
        filtered.push(card);
      } else {
        card.style.display = "none";
      }
    });

    // 🔹 Tri uniquement par prénom
    filtered.sort((a, b) => {
      const prenomA = a.dataset.prenom || "";
      const prenomB = b.dataset.prenom || "";
      return prenomA.localeCompare(prenomB);
    });

    // Réinsérer les cartes triées
    filtered.forEach(card => {
      card.style.display = "block";
      container.appendChild(card);
    });
  });
});

