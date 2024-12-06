function displayContent(response) {
  new Typewriter("#content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateContent(event) {
  event.preventDefault();
  let textInput = document.querySelector("#text-input");
  let content = document.querySelector("#content");
  content.innerHTML = `<span class="blink">⏳ Generating your content about ${textInput.value}</span>`;
  content.classList.remove("hidden");

  let apiKey = "475c1b09tc9cf784eac1636c9abbbco2";
  let context =
    "You are an inspirational poem writer who loves to write short poems. Generate a 4 line poem in basic HTML and separate each senence with <br/>. Do not show '```html' or the title of the poem. Make sure to follow the user instructions. At the bottom of the poem, sign it 'SheCodes AI' in a <strong>";
  let prompt = `User instructions: Generate a poem about ${textInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayContent);
}

let inputElement = document.querySelector("#content-generator");
inputElement.addEventListener("submit", generateContent);
