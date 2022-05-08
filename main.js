let num = document.querySelectorAll("button");
let submit = document.querySelectorAll('[type="submit"]');
let span = document.querySelector("#spam");
let card1 = document.querySelector(".hero");
let card2 = document.querySelector(".rating");

let mostrarcarta = () => {
  card1.classList.add("hiden");
  card2.classList.remove("hiden");
};

let quitarcarta = () => {
  card2.classList.add("hiden");
  card1.classList.remove("hiden");
};

num.forEach((nums) => {
  nums.addEventListener("click", (e) => {
    e.preventDefault();
    nums.classList.toggle("checket");
    num = nums.textContent;
    span.textContent = num;
  });
});

submit.forEach((e) => {
  e.addEventListener("click", (btn) => {
    btn.preventDefault();
    submit[0].addEventListener("click", mostrarcarta);
    submit[1].addEventListener("click", quitarcarta);
  });
});
