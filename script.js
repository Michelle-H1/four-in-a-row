// const circle = document.createElement('div');
// circle.style.cssText =
// "width:200px; height: 200px; border:2px solid black; border-radius: 50%;";

// document.body.appendChild(circle);
const reset = document.getElementById("#reset");

const output = document.querySelector("#output");
let toggle = false;

function circles() {
  for (let i = 0; i < 42; i++) {
    const circle = document.createElement("div");
    circle.style.cssText =
      "width:80px; height: 80px; border:2px solid black; border-radius: 50%;background-color:white;";
    circle.style.cursor = "pointer";

    //Alternate Color
    circle.onclick = function () {
      if (toggle == false) {
        this.style.backgroundColor = "red";
        toggle = true;
      } else {
        this.style.backgroundColor = "yellow";
        toggle = false;
      }
    };
    //Reset button
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", reset);

    function reset() {
      circle.style.backgroundColor = "white";
    }

    reset();

    output.appendChild(circle);
  }
}

window.onload = () => {
  circles();
};
