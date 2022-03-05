window.addEventListener("load", () => {
  const increaseBtn = document.querySelector(".increase");
  const count = document.querySelector(".count");
  const decreaseBtn = document.querySelector(".decrease");

  increaseBtn.addEventListener("click", () => {
    count.innerHTML = parseInt(count.innerHTML) + 1;
    changeColorBasedOnCount();
  });

  decreaseBtn.addEventListener("click", () => {
    count.innerHTML = parseInt(count.innerHTML) - 1;
    changeColorBasedOnCount();
  });

  function changeColorBasedOnCount() {
    if (count.innerHTML >= 5) {
      document.body.style.backgroundColor = "green";
    } else if (count.innerHTML <= -5) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "yellow";
    }
  }
});
