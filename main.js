window.onload = function () {
  main_ani();
};

function main_ani() {
  gsap.from(".main-img", {
    opacity: 0,
    delay: 1,
  });

  gsap.from("h2", {
    x: 600,
    delay: 1.5,

    stagger: 0.2,
  });

  gsap.from(".btn", {
    x: 600,
    delay: 2,

    stagger: 0.2,
  });
}
