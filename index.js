// Your code here
const dodger = document.getElementById('dodger');
document.addEventListener("keydown", function (event) {
    console.log(event);
  });
  document.addEventListener("keydown",function (event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px","");
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`;
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
	var rightside = dodger.style.left.replace("px", "");
	var rightInt = parseInt(rightside, 10);

	if (rightInt < 360) {
		dodger.style.left = `${rightInt + 1}px`;
	}
}
//position dodger to top right

// dodger.style.bottom = "380px";
// dodger.style.left = "360px";

