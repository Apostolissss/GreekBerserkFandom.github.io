document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();
            const targetTab = tab.getAttribute("data-tab");
            const targetContent = document.getElementById(targetTab);

            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            targetContent.classList.add("active");
        });
    });

    // Activate the first tab by default
    if (tabs.length > 0 && contents.length > 0) {
        tabs[0].classList.add("active");
        contents[0].classList.add("active");
    }

    // Preloader
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", function() {
        setTimeout(function() {
            preloader.style.display = "none";
        }, 1000); // Ensures the preloader is visible for at least 1 second
    });
});