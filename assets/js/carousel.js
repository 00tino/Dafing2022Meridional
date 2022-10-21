// Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = images.querySelectorAll(".image")

// Utility Vars
let index = 0


// Set interval
let interval = setInterval(startInterval, 1500)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 1500)
}

function moveCarousel() {
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }
 
    images.style.transform = `translateX(-${index * 400}px)`
}