function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "A name is given, a name is earned, Through every lesson we have learned. It marks our place, both near and far— A quiet guide to who we are. It may be common, bold, or rare—But every name is made with care.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
