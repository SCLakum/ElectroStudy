function showMenu() {
  var menu = document.getElementById("menu");
  var menuIcon = document.getElementById("menu-icon");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menuIcon.innerHTML = "&#9776;";
  } else {
    menu.style.display = "block";
    menuIcon.innerHTML = "&#10005;";
  }
}

var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
  if (mousein) return
  document.getElementById('demo' + count++)
    .classList.toggle('hover')

}

function demo2() {
  if (mousein) return
  document.getElementById('demo2')
    .classList.toggle('hover')
}

function reset() {
  count = 1
  var hovers = document.querySelectorAll('.hover')
  for (var i = 0; i < hovers.length; i++) {
    hovers[i].classList.remove('hover')
  }
}

document.addEventListener('mouseover', function () {
  mousein = true
  reset()
})

// ---------------------------------------------------- Copy Code Button function -----------------------------------
// Below Code Used For Text Inside Div is Copy to Clipboard 📋 
const copyButton = document.querySelector("#copy-button");
const textToCopy = document.querySelector("#code");
copyButton.addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
});

//If Copy Code button press then text Change to Copied !!! for 2 second 
const copyBtn = document.querySelector("#copy-button");
copyBtn.addEventListener("click", function () {
  copyBtn.textContent = "Copied !!!";
  setTimeout(function () {
    copyBtn.textContent = "Copy Code";
  }, 2000);
});





var button = document.getElementById("Code_Explain_Button");
var paragraph = document.getElementById("Full_program_discription");

button.addEventListener("click", function () {
  paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
});



