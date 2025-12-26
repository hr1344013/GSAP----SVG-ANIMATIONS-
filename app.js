var initialPath = `M 10 100 Q 250 100 490 100`;
var finalPath   = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  let bounds = string.getBoundingClientRect();
  let y = dets.clientY - bounds.top;

  let path = `M 10 100 Q 250 ${y} 490 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out"
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.5,
    ease: "elastic.out(1, 0.3)"
  });
});
