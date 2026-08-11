const leesMeerKnoppen = document.querySelectorAll(".lees-meer-knop");

leesMeerKnoppen.forEach(function(knop) {

    knop.addEventListener("click", function() {

        const kaart = knop.closest(".werking-kaart");
        kaart.classList.toggle("uitgeklapt");

        if (kaart.classList.contains("uitgeklapt")) {
            knop.textContent = "Lees minder ▲";
        } else {
            knop.textContent = "Lees meer ▼";
        }

    });

});