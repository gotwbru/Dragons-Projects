const buttonsCarousel = document.querySelectorAll(".button");
const imagens = document.querySelectorAll(".imagem");
const informations = document.querySelectorAll(".information");
buttonsCarousel.forEach((button, indice) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    markSelectedButton(button);

    hideActiveImage();

    showBackgroundImage(indice);

    hideActiveInformation();

    showInformation(indice);
  });
});

function markSelectedButton(button) {
    button.classList.add("selected");
}

function showInformation(indice) {
    informations[indice].classList.add("active");
}

function hideActiveInformation() {
  const informationsAtiva = document.querySelector(".information.active");
  informationsAtiva.classList.remove("active");
}

function showBackgroundImage(indice) {
  imagens[indice].classList.add("active");
}

function hideActiveImage() {
  const imagemAtiva = document.querySelector(".active");
  imagemAtiva.classList.remove("active");
}

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}