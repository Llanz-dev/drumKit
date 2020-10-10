const numberOfDrums = document.querySelectorAll(".drum").length;
let tom1 = new Audio("/sounds/tom-1.mp3");
for(let i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){        
        tom1.play();
    });
}