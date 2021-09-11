// Add/Remove Elements task section

function addElement() {
  const taskDisplay = document.getElementById("firstTaskDisplay");
  const newElement = document.createElement("p");
  newElement.style = "text-align: center; animation: fadein 1.5s;";
  const newNode = document.createTextNode(
    `New text element: ${taskDisplay.children.length}`
  );
  newElement.appendChild(newNode);
  taskDisplay.appendChild(newElement);
}

function removeElement() {
  const taskDisplay = document.getElementById("firstTaskDisplay");
  if (taskDisplay.children.length > 0) {
    taskDisplay.removeChild(taskDisplay.lastChild);
  } else {
    alert("No text elements left to remove!");
  }
}

// Change Atributes task section

var isSelecting = false;

function toggleSelection() {
  isSelecting ? removeFocus() : initSelection();
  isSelecting = !isSelecting;
}

var currentNode = null;

function initSelection() {
  currentNode = document.body.firstElementChild;
  showFocus();
}

function showFocus() {
  currentNode.classList.add("focus");
}

function removeFocus() {
  currentNode.classList.remove("focus");
}

function navigateOut() {
  if (currentNode.parentElement != document.body) {
    removeFocus();
    currentNode = currentNode.parentElement;
    showFocus();
  } else {
    alert(
      "This element is the body's root element!\nYou can only go down from here!"
    );
  }
}

function navigateIn() {
  if (currentNode.firstElementChild != null) {
    removeFocus();
    currentNode = currentNode.firstElementChild;
    showFocus();
  } else {
    alert(
      "This element either was removed or has no children!\nYou can only go up or through this level!"
    );
  }
}

function navigatePrevious() {
  removeFocus();
  if (currentNode.previousElementSibling == null) {
    currentNode = currentNode.parentElement.lastElementChild;
  } else {
    currentNode = currentNode.previousElementSibling;
  }
  showFocus();
}

function navigateNext() {
  removeFocus();
  if (currentNode.nextElementSibling == null) {
    currentNode = currentNode.parentElement.firstElementChild;
  } else {
    currentNode = currentNode.nextElementSibling;
  }
  showFocus();
}

function getRandomColor() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

function changeNodeColor() {
  if (isSelecting) {
    currentNode.style.setProperty("background-color", getRandomColor(), "");
  }
}

document.onkeydown = checkKey;

function checkKey(event) {
  event = event || window.event;
  if (event.keyCode == 13) {
    toggleSelection();
  } else if (event.keyCode == 27) {
    location.reload();
    return false;
  }
  if (isSelecting) {
    switch (event.keyCode) {
      case 38:
        navigateOut();
        break;
      case 40:
        navigateIn();
        break;
      case 37:
        navigatePrevious();
        break;
      case 39:
        navigateNext();
        break;
      case 32:
        changeNodeColor();
        break;
    }
  }
}

// Event Handling task section
var isPaintOnHover = false;

function togglePaintOnHover() {
  isPaintOnHover
    ? document.removeEventListener("mouseover", paintMe)
    : document.addEventListener("mouseover", paintMe);
  isPaintOnHover = !isPaintOnHover;
}

function paintMe(event) {
  event.target.style.setProperty("color", getRandomColor(), "");
}

var fallOnClick = false;

function toggleFallOnClick() {
  fallOnClick
    ? document.removeEventListener("click", fallMe)
    : document.addEventListener("click", fallMe);
  fallOnClick = !fallOnClick;
}

function fallMe(event) {
  if (event.target != document.body.firstElementChild) {
    event.target.style.setProperty("animation", "fall 3s", "");
    // Reset animation
    setTimeout(function () {
      event.target.style.setProperty("animation", "none", "");
    }, 3100);
  }
}
