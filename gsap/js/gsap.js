gsap.from(".chucked", {
duration:5,
rotation: 720,
ease: "bounce",
stagger: 0.5,
x:-500,
y: -500,
});

gsap.from(".headline", {
    duration: 2.5,
    stagger: 0.3,
    opacity:0,
    y:380
})

gsap.from(".paraAnimate", {
    duration: 2,
    stagger: 0.5,
    opacity:0,
    y: 530
    


})

gsap.from(".images", {
duration: 2,
stagger: 0.9,
ease: "slide",
opacity:0,
y: -430
})

