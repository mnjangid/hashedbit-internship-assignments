const textContainer = document.getElementById("text-container");

// COLOR CHANGE
document.getElementById("colorchange").addEventListener("click", function () {
    const color = document.getElementById("colorbox").value;
    textContainer.style.color = color;
});

// FONT SIZE CHANGE 
document.getElementById("fontsize").addEventListener("input", function () {
    textContainer.style.fontSize = this.value + "px";
});

// ITALIC TOGGLE
document.getElementById("italic").addEventListener("click", function () {
    if (textContainer.style.fontStyle === "italic") {
        textContainer.style.fontStyle = "normal";
    } else {
        textContainer.style.fontStyle = "italic";
    }
});

// UNDERLINE TOGGLE
document.getElementById("underline").addEventListener("click", function () {
    if (textContainer.style.textDecoration === "underline") {
        textContainer.style.textDecoration = "none";
    } else {
        textContainer.style.textDecoration = "underline";
    }
});

// BOLD TOGGLE
document.getElementById("bold").addEventListener("click", function () {
    if (textContainer.style.fontWeight === "bold") {
        textContainer.style.fontWeight = "normal";
    } else {
        textContainer.style.fontWeight = "bold";
    }
});

// FONT FAMILY CHANGE 
document.getElementById("list").addEventListener("change", function () {
    textContainer.style.fontFamily = this.value;
});

// CSS PROPERTIES
document.getElementById("getstyle").addEventListener("click", function () {
    const styles = window.getComputedStyle(textContainer);

    const color = styles.color;
    const fontSize = styles.fontSize;
    const fontStyle = styles.fontStyle;
    const fontWeight = styles.fontWeight;
    const textDecoration = styles.textDecorationLine;
    const fontFamily = styles.fontFamily;

    document.getElementById("css-props").innerText =
        `color: ${color}; font-size: ${fontSize}; font-style: ${fontStyle}; font-weight: ${fontWeight}; text-decoration: ${textDecoration}; font-family: ${fontFamily};`;
});