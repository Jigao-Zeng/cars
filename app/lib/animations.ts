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

export const animateCarHeader = () => {
  const header = document.getElementById("cars-header");

  if (!header) {
    console.error('Element with id "car-container" not found');
    return;
  }

  if (!gsap) {
    return;
  }

  gsap.fromTo(
    header,
    { opacity: 0 },
    { opacity: 1, duration: 4, ease: "power1.inOut" }
  );
};
