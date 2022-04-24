function preload(){

}

function setup(){
canvas =  createCanvas(700,530)
canvas.parent(document.getElementById("canvas"))

video = createCapture(VIDEO)
video.size(700, 600)
video.position(328,125)
}
   
function draw(){

}

function modal(){
    window.location=("modal.html")
}