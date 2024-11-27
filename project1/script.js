
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



function circleFlow(xscale,yscale){
    window.addEventListener("mousemove",function(dets) {
        document.querySelector(".minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
       y: 0,
       ease: Expo.easeInOut,
       duration: 2,
       delay: -1,
       stagger: .2
    })

    .from(".herofooter",{
        y: -10,
        opacity: 0,
        duration:1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleFlowskew(){
    // define default scale value
    let xscale = 1;
    let yscale = 1;
    //global variable
    let xprev = 0;
    let yprev = 0;
    window.addEventListener("mousemove",function(dets){

        xscale =  gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
        yscale =  gsap.utils.clamp(.8,1.2,dets.clientY-yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleFlow(xscale,yscale);
        
    });
}

 let elemt = document.querySelectorAll(".elem");

 elemt.forEach(function (elem) {
    let rotate = 0;
    let diffrote = 0;


    elem.addEventListener("mousemove", function(detils){
        let diff = detils.clientY - elem.getBoundingClientRect().top;

        diffrote = detils.clientX -rotate;
        rotate = detils.clientX;
        


        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top: diff,
            left : detils.clientX,
           rotate: gsap.utils.clamp(-20,20,diffrote * 0.5),
        });
        
    });

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
});










circleFlow();
firstPageAnim();
circleFlowskew();