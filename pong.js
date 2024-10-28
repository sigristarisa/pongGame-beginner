let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = 50;
let xSpeed = Math.random() * 5 + 2; // Random speed between 2 and 7
let ySpeed = -(Math.random() * 5 + 2); // Random speed between -7 and -2
let score = 0;
let paddleWidth = 90;
let paddleHeight = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);

  // Paddle
  let paddleX = mouseX - paddleWidth / 2; // Center paddle on the mouse
  rect(paddleX, windowHeight - paddleHeight, paddleWidth, paddleHeight);

  // Ball
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, 20, 20);

  // Bounce off walls
  if (xBall > windowWidth - 10 || xBall < 10) {
    xSpeed *= -1;
  }
  if (yBall < 10) {
    ySpeed *= -1;
  }

  // Bounce off paddle
  if (
    yBall + 10 >= windowHeight - paddleHeight &&
    xBall > paddleX &&
    xBall < paddleX + paddleWidth
  ) {
    ySpeed *= -1;
    score++; // Increase score on paddle bounce
  }

  // Reset if ball goes off the bottom
  if (yBall > windowHeight) {
    xBall = Math.floor(Math.random() * 300) + 50;
    yBall = 50;
    xSpeed = Math.random() * 5 + 2;
    ySpeed = -(Math.random() * 5 + 2);
    score = 0; // Reset score
  }
}
