const ideas = [
  "Turn a messy list of thoughts into a clear plan.",
  "Compare a confusing bill or estimate and identify questions to ask.",
  "Practice for a difficult conversation before you have it.",
  "Turn a repetitive work task into a reusable process.",
  "Explain something complicated in language that actually makes sense.",
  "Brainstorm ways to save time on a task you do every week."
];

const ideaButton = document.querySelector("#ideaButton");
const ideaOutput = document.querySelector("#ideaOutput");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

ideaButton.addEventListener("click", () => {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  ideaOutput.textContent = randomIdea;
});
