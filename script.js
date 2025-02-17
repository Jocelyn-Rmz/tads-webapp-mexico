document.addEventListener("DOMContentLoaded", function () {
    const greenRange = document.getElementById("greenRange");
    const redRange = document.getElementById("redRange");
    const greenBox = document.getElementById("greenBox");
    const redBox = document.getElementById("redBox");
    const greenHex = document.getElementById("greenHex");
    const redHex = document.getElementById("redHex");

    greenRange.addEventListener("input", function () {
        const greenValue = parseInt(greenRange.value).toString(16).padStart(2, "0");
        const color = `#${greenValue}9900`;
        greenBox.style.backgroundColor = color;
        greenHex.textContent = color;
    });

    redRange.addEventListener("input", function () {
        const redValue = parseInt(redRange.value).toString(16).padStart(2, "0");
        const color = `#${redValue}0000`;
        redBox.style.backgroundColor = color;
        redHex.textContent = color;
    });
});
