/* testing a push */ 

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

var splide;
      var previousButton, nextButton;

      document.addEventListener('DOMContentLoaded', function() {
        previousButton = document.querySelector('.carousel .previous-button');
        nextButton = document.querySelector('.carousel .next-button');

        splide = new Splide('.splide', {
          gap: '15px',
          padding: {
            left: '50px',
            right: '50px'
          },
          arrows: false,
          perPage: 3,
          type: 'loop',
          pagination: false,
          keyboard: false,  // Splide listens to key events at the document level and moves ALL carousels when arrow keys are used. Since keyboard and screen reader users use these keys to operate the tabs, this creates a very unusual experience.
          slideFocus: false,  // removes tabindex="0" from each slide wrapper, since we only want our links inside each slide to receive focus.

          breakpoints: {
            575: {
              perPage: 2
            },
            375: {
              perPage: 1
            }
          }
        }).mount();

        // To prevent animation issues, let's make every slide visible before a transition happens. Splide will then automatically remove the `.is-visible` class from non-visible slides once the transition is finished.
        splide.on('move', function() {
          var slides = document.querySelectorAll('.splide .splide__slide');

          slides.forEach(function(slide) {
            slide.classList.add('is-visible');
          });
        });

        // Go to the previous slide when the Previous button is activated
        previousButton.addEventListener('click', function(e) {
          splide.go('<');
        });

        // Go to the next slide when the Next button is activated
        nextButton.addEventListener('click', function(e) {
          splide.go('>');
        });
      });