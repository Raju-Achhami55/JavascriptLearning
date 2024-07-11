const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  });
});
