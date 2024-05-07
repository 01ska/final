document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница 'Благотворительность' загружена!");

    const links = document.querySelectorAll("main ul li a");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            console.log(`Ссылка нажата: ${link.getAttribute("href")}`);
        });

        link.addEventListener("mouseenter", () => {
            link.style.color = "#f39c12";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "white";
        });
    });
});
