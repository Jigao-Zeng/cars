import gsap from "gsap";

export const animateLoadingBar = () => {
  const loadingBar = document.getElementById("loading-bar");
  if (!loadingBar) return;

  const tl = gsap.timeline({ repeat: -1 });

  tl.to(loadingBar, {
    rotation: 360,
    duration: 1,
    ease: "linear",
  });
};

export const animateCarContainer = () => {
  const carContainer = document.getElementById("car-container");

  if (!carContainer) {
    console.error('Element with id "car-container" not found');
    return;
  }

  // Debugging: Check if GSAP is loaded
  if (!gsap) {
    console.error("GSAP is not loaded");
    return;
  }

  // Debugging: Log when animation starts
  console.log("Starting animation for carContainer");

  gsap.fromTo(
    carContainer,
    { opacity: 0 },
    { opacity: 1, duration: 2, ease: "power1.inOut" }
  );
};
