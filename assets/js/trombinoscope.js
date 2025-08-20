document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".profile-card");

  input.addEventListener("input", function () {
    const search = input.value.toLowerCase();

    cards.forEach(card => {
      const prenom = card.dataset.prenom;
      if (prenom.includes(search)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
