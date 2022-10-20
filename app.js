const submit = document.querySelector(".submit");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const thankYou = document.querySelector(".thank-you");
const ratingItem = document.querySelectorAll("rating-item");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const selected_rating = document.querySelector(".rating-choice");

submit.addEventListener("click", () => {
  main.classList.add("display-none");
  thankYou.classList.toggle("display-none");
});

one.addEventListener("click", () => {
  one.classList.add("selected");
  two.classList.remove("selected");
  three.classList.remove("selected");
  four.classList.remove("selected");
  five.classList.remove("selected");
  selected_rating.textContent = "You selected 1 out of 5";
});
two.addEventListener("click", () => {
  one.classList.remove("selected");
  two.classList.add("selected");
  three.classList.remove("selected");
  four.classList.remove("selected");
  five.classList.remove("selected");
  selected_rating.textContent = "You selected 2 out of 5";
});
three.addEventListener("click", () => {
  one.classList.remove("selected");
  two.classList.remove("selected");
  three.classList.add("selected");
  four.classList.remove("selected");
  five.classList.remove("selected");
  selected_rating.textContent = "You selected 3 out of 5";
});
four.addEventListener("click", () => {
  one.classList.remove("selected");
  two.classList.remove("selected");
  three.classList.remove("selected");
  four.classList.add("selected");
  five.classList.remove("selected");
  selected_rating.textContent = "You selected 4 out of 5";
});
five.addEventListener("click", () => {
  one.classList.remove("selected");
  two.classList.remove("selected");
  three.classList.remove("selected");
  four.classList.remove("selected");
  five.classList.add("selected");
  selected_rating.textContent = "You selcted 5 out of 5. Thats wonderful!!";
});
