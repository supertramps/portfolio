/**
 * Small easter egg in console
 *
 */
window.addEventListener("load", (event) => {
  console.log(
    `%c 
< Animals are friends! >
 
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    "font-family:monospace"
  );
});

/**
 * Function sees if desired element is in the viewport or not.
 *
 */
function isVisible(element) {
  let elementBox = element.getBoundingClientRect();

  // Change value to affect where the text should fade in.
  let distanceFromTop = -100;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}
/**
 * Function removes the .hidden class if element is in the viewport.
 *
 */
function scanDocument() {
  let sectionList = document.querySelectorAll(".hidden");
  sectionList.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove("hidden");
    }
  });
}

document.addEventListener("scroll", scanDocument);
