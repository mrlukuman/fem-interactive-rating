const submit = document.querySelector(".submit");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const thankYou = document.querySelector(".thank-you");

submit.addEventListener("click", () => {
  main.classList.add("display-none");
  thankYou.classList.toggle("display-none");
});
