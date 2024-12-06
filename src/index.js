function generateContent(event) {
  event.preventDefault();

  new Typewriter("#content", {
    strings: "content tbc",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let inputElement = document.querySelector("#content-generator");
inputElement.addEventListener("submit", generateContent);
