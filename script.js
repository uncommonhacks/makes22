let updateSticky = function () {
  if (window.innerWidth < 951) {
    let lefts = document.querySelectorAll(".left");

    for (let i = 0; i < lefts.length; i++) {
      let left = lefts[i];

      left.style.position = "relative";
      left.style["padding-top"] = 0;
      left.style["padding-bottom"] = 0;
      left.style["margin-bottom"] = 0;
      left.style.top = "auto";
    }

    return;
  }

  let sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections.item(i);

    let left = null;
    let right = null;
    if (i % 2 == 0) {
      left = section.children[0];
      right = section.children[1];
    } else {
      left = section.children[1];
      right = section.children[0];
    }

    // Use sticky to get the images to stay centered
    if (right.clientHeight > window.innerHeight) {
      let img = left.children[0];
      let offset = window.innerHeight/2 - img.clientHeight/2 + "px";

      left.style.position = "sticky";
      left.style.position = "-webkit-sticky";
      left.style["padding-top"] = offset;
      left.style["padding-bottom"] = offset;
      left.style["margin-bottom"] = "auto";
      left.style.top = 0;
    }
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onload = function () { updateSticky(); };
window.onresize = function () { updateSticky(); };
