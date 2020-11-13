// Renders an easter egg in console at page load.
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
 */
function isVisible(element) {
  let elementBox = element.getBoundingClientRect();

  // Change value to affect where the text should fade in.
  /**
   * The distance from top of the page
   * @type {number}
   */
  let distanceFromTop = -200;

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
function removeHidden() {
  /** Targets a certain class */
  let targetClass = document.querySelectorAll(".hidden");
  targetClass.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove("hidden");
    }
  });
}

document.addEventListener("scroll", removeHidden);
