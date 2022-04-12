// let rect = document.querySelector(".rect")
// let innerrect =document.querySelector(".innerrect")
// rect.addEventListener("mousemove",function(dets){
//     let xlocation = dets.clientX - rect.getBoundingClientRect().x
//     let ylocation = dets.clientY - rect.getBoundingClientRect().y

//  innerrect.style.clipPath=`circle(17% at ${xlocation}px ${ylocation}px)`

// })


// let rect = document.querySelector(".rect");
// let innerrect = document.querySelector(".innerrect");

// rect.addEventListener("mousemove",function(dets){
//     let xlocation = dets.clientX - rect.getBoundingClientRect().x
//     let ylocation = dets.clientY - rect.getBoundingClientRect().y

//     innerrect.style.clipPath = `circle(17% at ${xlocation}px ${ylocation}px)`
// })


let rect =document.querySelector(".rect");
let innerrect = document.querySelector(".innerrect");
rect.addEventListener("mousemove",function(dets){
    let xlocation= dets.clientX - rect.getBoundingClientRect().x
    let ylocation= dets.clientY - rect.getBoundingClientRect().y

    innerrect.style.clipPath = `circle(17% at ${xlocation}px ${ylocation}px)`
})

