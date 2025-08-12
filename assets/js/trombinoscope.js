document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const profilesContainer = document.getElementById("profilesContainer");
    const profiles = Array.from(profilesContainer.getElementsByClassName("profile-card"));

    function filterProfiles() {
        const searchValue = searchInput.value.toLowerCase();

        profiles.forEach(profile => {
            const prenom = profile.dataset.prenom.toLowerCase();

            if (prenom.includes(searchValue)) {
                profile.classList.remove("hidden");
            } else {
                profile.classList.add("hidden");
            }
        });

        // Réorganise visuellement
        const visibleProfiles = profiles.filter(p => !p.classList.contains("hidden"));
        visibleProfiles.forEach((profile, index) => {
            profile.style.order = index;
        });
    }

    searchInput.addEventListener("input", filterProfiles);
});
