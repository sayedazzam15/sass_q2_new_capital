const text = "OUTDOOR";
let displayed_text = "";
const main = document.querySelector(".heading-primary--main");
let text_pointer = 0;
setInterval(() => {
    displayed_text += text[text_pointer];
    main.textContent = displayed_text;
    text_pointer++;
    if (displayed_text.length == text.length) {
        displayed_text = "";
        text_pointer = 0;
    }
}, 500);