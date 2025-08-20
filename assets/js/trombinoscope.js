document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const container = document.getElementById("profilesContainer");
  if (!input || !container) return;

  const cards = Array.from(container.querySelectorAll(".profile-card"));
  const DURATION = 250; // ms (voir CSS)

  function filter() {
    const q = (input.value || "").trim().toLowerCase();
    let order = 0;

    cards.forEach(card => {
      const prenom = (card.dataset.prenom || "").toLowerCase();
      const match = prenom.includes(q);

      if (match) {
        if (card.classList.contains("hidden")) {
          card.style.display = "";
          requestAnimationFrame(() => {
            card.classList.remove("hidden", "hiding");
          });
        }
        card.style.order = order++;
      } else {
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
  filter();
});
