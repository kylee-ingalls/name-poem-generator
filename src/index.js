function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poet who writes short, creative poems about a person's name that rhyme. Each poem is approximately 4-6 lines, and separate each line with a <br />. Make sure to follow the user instructions.";
  let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⏳ Generating your poem about ${instructionsInput.value}...`;

  console.log("Generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
