document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".profile-card");

  // Au départ : cacher toutes les cartes
  cards.forEach(card => {
    card.style.display = "none";
  });

  // Quand on tape dans la recherche
  input.addEventListener("input", function () {
    const search = input.value.toLowerCase().trim();

    cards.forEach(card => {
      const name = card.querySelector(".profil-name")?.textContent.toLowerCase() || "";
      const prenom = card.dataset.prenom || "";

      // Si recherche vide → tout cacher
      if (search === "") {
        card.style.display = "none";
      } else {
        // Sinon → afficher seulement ceux qui correspondent
        card.style.display = prenom.includes(search) || name.includes(search) ? "block" : "none";
      }
    });
  });
});
