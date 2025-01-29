var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrBlur.style.left = dets.x - 200 + "px";
  crsrBlur.style.top = dets.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "rgb(0, 0, 0)",
  duration: 0.5,
  height: "105px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers: true,
    start: "top -10%",
    end: "bottom -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "rgba(0, 0, 0,1)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top",
    //end: "bottom",
    scrub: 2,
  },
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});
gsap.from("#about-us,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
   // markers: true,
    start: "top 60%",
    end: "bottom 58%",
    scrub: 1,
  },
});
gsap.from(".card", {
scale:0.8,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "bottom 65%",
    scrub: 1,
  },                  
});
gsap.from("#colon1",{
  y:-80,
  x:-80,
  duration: 1,
  scrollTrigger: {
    trigger:"#colon1",
    scroller: "body",
    //  markers: true,
    start: "top 50%",
    end: "bottom 27%",
    scrub: 4,

  }
})
gsap.from("#colon2", {
  y: 80,
  x: 80,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    // start: "top 55%",
    // end: "bottom 105%",
    scrub: 4,
  },
});