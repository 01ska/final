document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница 'Чрезвычайная Ситуация' загружена!");

    
    const listItems = document.querySelectorAll("main ul li");

    listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "red"; 
        });

        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "transparent"; 
        });

        item.addEventListener("click", () => {
            console.log("Элемент списка нажат:", item.textContent);
        });
    });
});
