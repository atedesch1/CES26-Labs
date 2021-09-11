var canvas = document.getElementById("annimation-canvas");
var canvasRect = canvas.getBoundingClientRect();
var context = canvas.getContext("2d");
var mousePos = {
  x: 0,
  y: 0,
};
const cat = {
  img: document.getElementById("cat-image"),
  width: 200,
  height: 200,
  eyeCenter: 46,
  pupilRadius: 13,
  maxEyeRadius: 8,
  eyeColor: "#4c5359",
  furColor: "#dadee0",
};
const mouse = {
  img: document.getElementById("mouse-image"),
  width: 100,
  height: 50,
};

var catAttack = false;
var mouseAlive = true;
var steps = 800;
var step = -20;
var catPos = {
  x: canvas.width / 2,
  y: canvas.height - cat.height / 2 - 20,
};
var blinkStep = 0;
var blinkSteps = 60;
var catBlink = false;
var blinkDown = true;
var mute = false;
var munchSound = document.getElementById("munch-sound");
var themeSong = document.getElementById("theme-song");

main();

window.addEventListener("resize", resizeCanvas);

function toggleMute() {
  mute = !mute;
  toggleThemeSong();
}

function toggleThemeSong() {
  mute ? themeSong.pause() : themeSong.play();
}

function resizeCanvas() {
  var display = document.getElementById("annimation-container");
  canvas.width = display.offsetWidth - 100;
  canvas.height =
    display.offsetHeight -
    100 -
    document.getElementById("top-container").offsetHeight;
  canvasRect = canvas.getBoundingClientRect();
  resetCatPos();
}

function main() {
  canvas = document.getElementById("annimation-canvas");
  context = canvas.getContext("2d");
  resizeCanvas();

  canvas.addEventListener("mousemove", function (e) {
    mousePos.x = e.clientX - canvasRect.left;
    mousePos.y = e.clientY - canvasRect.top;
  });

  canvas.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    catAttack = true;
  });

  canvas.addEventListener("click", function (e) {
    e.preventDefault();
    catBlink = true;
  });
  setInterval(draw, 0.1);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCat();
  drawMouse();
}

function drawMouse() {
  if (mouseAlive) {
    context.drawImage(
      mouse.img,
      mousePos.x - mouse.width / 2,
      mousePos.y - mouse.height / 2,
      mouse.width,
      mouse.height
    );
  }
}

function resetCatPos() {
  catAttack = false;
  step = -20;
  catPos.x = canvas.width / 2;
  catPos.y = canvas.height - cat.height / 2 - 20;
}

function drawCat() {
  var dy = -(mousePos.y - catPos.y);
  var dx = mousePos.x - catPos.x;
  var dz = Math.sqrt(dx * dx + dy * dy);
  var cosAngle = dx / dz;
  var sinAngle = dy / dz;
  if (dz < 20 && mouseAlive) {
    mouseAlive = false;
    catAttack = false;
    if (!mute) {
      munchSound.play();
    }
    resetCatPos();
  }
  if (catAttack && step < steps && mouseAlive) {
    step++;
    catPos.x += (step / steps) * dx;
    catPos.y -= (step / steps) * dy;
  }

  var eyesPos = {
    x: catPos.x + cat.maxEyeRadius * cosAngle,
    y: catPos.y - cat.maxEyeRadius * sinAngle,
  };

  drawCatEyes(eyesPos);
  context.drawImage(
    cat.img,
    catPos.x - cat.width / 2,
    catPos.y - cat.height / 2,
    cat.width,
    cat.height
  );
}

function drawCatEyes(eyesPos) {
  context.fillStyle = "#FFFFFF";
  context.fillRect(catPos.x - 80, catPos.y - 40, 160, 80);
  context.beginPath();
  context.arc(
    eyesPos.x - cat.eyeCenter,
    eyesPos.y,
    cat.pupilRadius,
    0,
    2 * Math.PI
  );
  context.arc(
    eyesPos.x + cat.eyeCenter,
    eyesPos.y,
    cat.pupilRadius,
    0,
    2 * Math.PI
  );
  context.fillStyle = cat.eyeColor;
  context.fill();

  if (catBlink) {
    var blinkLen = (blinkStep / blinkSteps) * 48;
    context.beginPath();
    context.arc(
      catPos.x - cat.eyeCenter,
      catPos.y - 48 + blinkLen,
      30,
      0,
      2 * Math.PI
    );
    context.arc(
      catPos.x + cat.eyeCenter,
      catPos.y - 48 + blinkLen,
      30,
      0,
      2 * Math.PI
    );
    context.fillStyle = cat.furColor;
    context.fill();
    blinkDown ? blinkStep++ : blinkStep--;
    if (blinkStep == blinkSteps) {
      blinkDown = false;
    }
    if (blinkStep == 0) {
      blinkDown = true;
      catBlink = false;
    }
  }
}
