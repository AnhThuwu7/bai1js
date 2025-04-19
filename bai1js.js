function toggleFolder(header) {
    const folder = header.parentElement;
    const children = folder.querySelector(".children");
    const arrow = header.querySelector(".arrow");
  
    // Toggle active class
    header.classList.toggle("active");
  
    // Toggle children visibility
    if (children.style.display === "block") {
      children.style.display = "none";
      arrow.textContent = ">";
    } else {
      children.style.display = "block";
      arrow.textContent = "v";
    }
  }
  