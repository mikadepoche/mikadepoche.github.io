<script>
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const grid = document.getElementById("trombinoscopeGrid");
  const cards = Array.from(grid.querySelectorAll(".profil-card"));

  // Recherche en temps réel
  searchInput.addEventListener("input", filterAndSort);
  sortSelect.addEventListener("change", filterAndSort);

  function filterAndSort() {
    const searchValue = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;

    let filtered = cards.filter(card => {
      const nom = card.dataset.nom;
      const prenom = card.dataset.prenom;
      return nom.includes(searchValue) || prenom.includes(searchValue);
    });

    if (sortBy === "prenom") {
      filtered.sort((a, b) => a.dataset.prenom.localeCompare(b.dataset.prenom));
    } 
    else if (sortBy === "anciennete") {
      filtered.sort((a, b) => parseInt(a.dataset.anciennete) - parseInt(b.dataset.anciennete));
    }

    grid.innerHTML = "";
    filtered.forEach(card => grid.appendChild(card));
  }
</script>
