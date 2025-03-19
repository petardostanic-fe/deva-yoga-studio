const hiddenElements = document.querySelectorAll(".hidden-animation");
const navigationMenu = document.getElementById("navigation-menu");
const navigationLinks = document.querySelectorAll(".navigation-link");
const navigationOpen = document.getElementById("navigation-open");
const navigationClose = document.getElementById("navigation-close");
const body = document.querySelector("body");
const questionsItems = document.querySelectorAll(".questions-item");

// Add shadow on scoll to the header element
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    document.querySelector(".header").classList.add("header-shadow");
  } else {
    document.querySelector(".header").classList.remove("header-shadow");
  }
});

// JS IntersectionObserver and CSS transitions to implement a native "animate on scroll" effect.
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    } else {
      entry.target.classList.remove("show-animation");
    }
  });
});

// Observe all hidden elements.
hiddenElements.forEach((el) => intersectionObserver.observe(el));

// Show the menu on click and disable scrolling.
if (navigationOpen) {
  navigationOpen.addEventListener("click", () => {
    navigationMenu.classList.add("activate-menu");
    bodyScrollLockUpgrade.disableBodyScroll(body);
  });
}

// Remove "activate-menu" class on click and enable scrolling.
if (navigationClose) {
  navigationClose.addEventListener("click", () => {
    navigationMenu.classList.remove("activate-menu");
    bodyScrollLockUpgrade.enableBodyScroll(body);
  });
}

// Close the menu when a link is clicked.
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationMenu.classList.remove("activate-menu");
    bodyScrollLockUpgrade.enableBodyScroll(body);
  });
});

// Accordion active on click.
questionsItems.forEach((questionsItem) => {
  questionsItem.addEventListener("click", () => {
    questionsItem.classList.toggle("active");
  });
});
