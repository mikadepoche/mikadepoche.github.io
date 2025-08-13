document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const container = document.getElementById("profilesContainer");
  if (!input || !container) return;

  const cards = Array.from(container.querySelectorAll(".profile-card"));
  const DURATION = 250; // ms (doit matcher le CSS)

  function filter() {
    const q = (input.value || "").trim().toLowerCase();
    let order = 0;

    cards.forEach(card => {
      const prenom = (card.dataset.prenom || "").toLowerCase();
      const match = prenom.includes(q);

      if (match) {
        // ré-afficher si cachée
        if (card.classList.contains("hidden")) {
          card.style.display = ""; // remet dans le flux
          // petit tick pour déclencher la transition
          requestAnimationFrame(() => {
            card.classList.remove("hidden", "hiding");
          });
        }
        card.style.order = order++;
      } else {
        // lancer la sortie animée puis retirer du flux
        if (!card.classList.contains("hidden") && !card.classList.contains("hiding")) {
          card.classList.add("hiding");
          setTimeout(() => {
            card.classList.remove("hiding");
            card.classList.add("hidden");
            card.style.display = "none";
          }, DURATION);
        }
      }
    });
  }

  input.addEventListener("input", filter);
  filter(); // passe initiale
});
