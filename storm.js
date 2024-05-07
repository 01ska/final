
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("main ul li");

    listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transition = "transform 1s";
            item.style.transform = "scale(1.2)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1.0)";
        });
    });
});

