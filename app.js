// switch

// document.body.addEventListener("click", (e) => {
//   console.log(e.target.id);

//   switch (e.target.id) {
//     case "javascript":
//       document.body.style.background = "yellow";
//       break;
//     case "php":
//       document.body.style.background = "purple";
//       break;
//     case "python":
//       document.body.style.background = "blue";
//       break;
//     default:
//       null;
//   }
// });

// Animation text

const target = document.getElementById("target");
const im = document.getElementById("im");
let array = ["Facteur", "Développeur", "Motard"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2400);
};

const loop = () => {
  checkColor();
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 3500);
    }
  }, 100);
};

const checkColor = () => {
  if (wordIndex == 0) {
    target.style.color = "yellow";
  }
  if (wordIndex == 1) {
    target.style.color = "blue";
  }
  if (wordIndex == 2) {
    target.style.color = "green";
  }
};

loop();

console.log(array[wordIndex].length);
