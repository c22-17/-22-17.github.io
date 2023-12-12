document.addEventListener("DOMContentLoaded", function () {
    const themeBlocks = document.querySelectorAll(".theme__block");
    let themeLink = document.querySelector('#theme');

    themeBlocks.forEach(function (block) {
        block.addEventListener("click", function () {
            const themeValue = block.querySelector("input").value;
            localStorage.setItem("selectedTheme", themeValue);

            // Оновлюємо атрибут href зі стилями
            updateThemeStyles(themeValue);
        });
    });

    const savedTheme = localStorage.getItem("selectedTheme");

    if (savedTheme) {
        const selectedBlocks = document.querySelectorAll(`input[value="${savedTheme}"]`);
        selectedBlocks.forEach(function (selectedBlock) {
            selectedBlock.checked = true;
        });

        // Оновлюємо атрибут href зі стилями
        updateThemeStyles(savedTheme);
    }

    function updateThemeStyles(themeValue) {
        console.log(themeValue);
       
        if (themeValue == "day") {
            themeLink.href = './css/day.css';
        } else if (themeValue == "night") {
            themeLink.href = './css/night.css'; 
        }
    }
});
