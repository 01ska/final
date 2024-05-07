document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница 'Контакты' загружена!");

    const contactItems = document.querySelectorAll("main ul li");

    contactItems.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("Контакт выбран:", item.textContent);
            item.style.color = "#2980b9"; 
        });
    });

    const TOGGLE_TEXT_SHOW = "Показать больше";
    const TOGGLE_TEXT_HIDE = "Скрыть";

    const toggleButton = document.createElement("button");
    toggleButton.textContent = TOGGLE_TEXT_SHOW;
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.margin = "20px 0";
    toggleButton.style.cursor = "pointer";

    const additionalInfo = document.createElement("div");
    additionalInfo.textContent = "Дополнительная контактная информация...";
    additionalInfo.style.display = "none";
    
    const mainSection = document.querySelector("main");
    mainSection.appendChild(toggleButton);
    mainSection.appendChild(additionalInfo);

    toggleButton.addEventListener("click", () => {
        const isHidden = additionalInfo.style.display === "none";
        additionalInfo.style.display = isHidden ? "block" : "none";
        toggleButton.textContent = isHidden ? TOGGLE_TEXT_HIDE : TOGGLE_TEXT_SHOW;
    });
});
