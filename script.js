//your JS code here. If required.
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = ["img1", "img2", "img3", "img4", "img5"];
shuffle(arr);

const repeat = Math.floor(Math.random() * (arr.length - 1));
const at = Math.floor(Math.random() * (arr.length - 1));
const element = arr[repeat];
arr.splice(at, 0, element);
console.log(arr);
const div = document.getElementById("images");
arr.forEach((img) => {
  div.innerHTML += `<img class="${img}"/>`;
});

let selected = [];
const verify_btn = document.getElementById("verify");
verify_btn.style.display = "none";
verify_btn.onclick = verify;

function verify() {
  if (selected.length == 2) {
    if (selected[0] == selected[1]) {
      para.innerHTML = "You are a human. Congratulations!";
    } else {
      para.innerHTML =
        "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verify_btn.style.display = "none";
  }
}

const images = document.querySelectorAll("img");
const para = document.getElementById("para");
images.forEach((img) => {
  img.addEventListener("click", () => {
    reset_btn.style.display = "block";
    if (img.classList.contains("selected")) {
      return;
    } else img.classList.add("selected");
    if (img.classList.contains("selected")) {
      selected.push(img.classList[0]);
    }
    if (selected.length == 2) {
      verify_btn.style.display = "block";
    } else {
      verify_btn.style.display = "none";
    }
  });
});

const reset_btn = document.getElementById("reset");
reset_btn.style.display = "none";

function reset() {
  selected = [];
  images.forEach((img) => {
    img.classList.remove("selected");
  });
  para.innerHTML = "";
  reset_btn.style.display = "none";
  verify_btn.style.display = "none";
}

reset_btn.onclick = reset;
