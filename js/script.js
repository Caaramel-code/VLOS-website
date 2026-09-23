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

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Dropdowns op mobiel via klik i.p.v. hover laten werken
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // voorkomt meteen doorklikken naar de link
            link.parentElement.classList.toggle('open');
        }
    });
});