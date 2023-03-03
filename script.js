const buttons = document.querySelectorAll("button");

const modal = document.getElementById("modal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("hide"); 
  });
});
