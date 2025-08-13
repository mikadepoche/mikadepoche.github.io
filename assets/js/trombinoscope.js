document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const profiles = Array.from(document.querySelectorAll(".profile-card"));

    if (!searchInput || profiles.length === 0) {
        console.warn("Recherche ou cartes de profil introuvables.");
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchValue = this.value.toLowerCase();

        profiles.forEach(profile => {
            const prenom = profile.dataset.prenom.toLowerCase();
            if (prenom.includes(searchValue)) {
                profile.classList.remove("hidden");
            } else {
                profile.classList.add("hidden");
            }
        });
    });
});
