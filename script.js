var cur=document.querySelector(".cursor");
var blu=document.querySelector(".cursorBlur");
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px";
    cur.style.top=dets.y+"px";
    blu.style.left=dets.x-50+"px";
    blu.style.top=dets.y-39+"px";

})
var h4all=document.querySelectorAll(".nav p")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    cur.style.scale=3
    cur.style.border="0.3px solid #fff"
    cur.style.backgroundColor="transparent"

  }
    )
 elem.addEventListener("mouseleave",function(){
  cur.style.scale=1
  cur.style.border="0px solid rgb(102, 165, 8)"
  cur.style.backgroundColor="rgb(102, 165, 8)"

 })   
})


gsap.to(".nav", {
    backgroundColor: "#000",
    duration:2,
    delay:1,
    height: "60px",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
     
     start:"top -7%",
     end:"top -20%",
scrub:2
      
    }
  });
  gsap.to(".main", {
    backgroundColor: "#000",
   duration:2,
   delay:2,
   
   
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
     
     start:"top -40%",
     end:"top -100%",

      scrub:3
    }
  });
  gsap.from([".aboutimg",".content"],{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      trigger:".about",
      scroller:"body",
      start:"top 60%",
      end:"top 50%",
      scrub:4,
    },

  });
  gsap.from(["#cardSection"],{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      trigger:".card",
      scroller:"body",
      start:"top 70%",
      end:"top 65%",
      scrub:4,
    },

  });
  gsap.from([".lastques h2"],{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      trigger:".lastques",
      scroller:"body",
      start:"top 70%",
      end:"top 65%",
      scrub:4,
    },

  });

  gsap.from([".pic1"],{
    y:-70,
    x:-70,
    scrollTrigger:{
      trigger: ".quotes",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  })
  gsap.from([".pic2"],{
    y:70,
    x:70,
    scrollTrigger:{
      trigger: ".quotes",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  })