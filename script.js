let basket = document.getElementById("basket");
let ball = document.getElementById("ball");
let scoreDisplay = document.getElementById("score");
let score = 0;

document.addEventListener("keydown", moveBasket);

function moveBasket(event) {
  let basketLeft = parseInt(
    window.getComputedStyle(basket).getPropertyValue("left")
  );

  if (event.key === "ArrowLeft" && basketLeft > 0) {
    basket.style.left = basketLeft - 20 + "px";
  } else if (event.key === "ArrowRight" && basketLeft < 340) {
    basket.style.left = basketLeft + 20 + "px";
  }
}

function dropBall() {
  let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  let ballLeft = parseInt(
    window.getComputedStyle(ball).getPropertyValue("left")
  );
  let basketLeft = parseInt(
    window.getComputedStyle(basket).getPropertyValue("left")
  );

  if (ballTop >= 470 && ballLeft >= basketLeft && ballLeft <= basketLeft + 60) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    resetBall();
  } else if (ballTop >= 500) {
    resetBall();
  } else {
    ball.style.top = ballTop + 5 + "px";
  }
}

function resetBall() {
  ball.style.top = "-30px";
  ball.style.left = Math.random() * 380 + "px";
}

setInterval(dropBall, 30);
