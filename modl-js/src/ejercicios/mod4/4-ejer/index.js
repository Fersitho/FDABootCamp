console.clear();
const divBox = document.createElement('div')
divBox.className = 'box'

document.querySelector('main').appendChild(divBox)

const elem = document.querySelector(".box");
let count = 0;

function changeColor() {
  const colorNum = count % 3;

  switch (colorNum) {
    case 0:
      elem.className = "box red";
      break;
    case 1:
      elem.className = "box blue";
      break;
    case 2:
      elem.className = "box green";
      break;
  }
  count++;
}

setInterval(changeColor, 500);
