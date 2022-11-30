// let count = 0;

// const value = document.querySelector("#value");
// const decBtn = document.querySelector(".decrease");
// const incBtn = document.querySelector(".increase");
// const resBtn = document.querySelector(".reset");

// decBtn.addEventListener("click", function () {
//   count--;
//   value.textContent = count;
// });

// incBtn.addEventListener("click", function () {
//   count++;
//   value.textContent = count;
// });

// resBtn.addEventListener("click", function () {
//   count = 0;
//   value.textContent = count;
// });

let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
