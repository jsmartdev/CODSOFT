function moveElementAtBreakpoint() {
  const elementToMove = document.getElementById("hero-image");
  const targetParent = document.getElementById("big-image-container");
  const firstParent = document.getElementById("image-container")

  if (window.matchMedia("(min-width: 1200px)").matches) {
      // If the breakpoint is matched, move the element to the second parent
      targetParent.appendChild(elementToMove);
  } else {
      // If the breakpoint is not matched, move the element back to the first parent
      firstParent.appendChild(elementToMove);
  }
}

// Call the function initially and add event listener for resize
moveElementAtBreakpoint();
window.addEventListener('resize', moveElementAtBreakpoint);

/*

*/