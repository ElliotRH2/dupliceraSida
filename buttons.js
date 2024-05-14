const rotateButton = document.getElementById("rotateButton");
const scaleXButton = document.getElementById("scaleXButton");
const skewButton = document.getElementById("skewButton");
const translateButton = document.getElementById("translateButton");
const scaleYButton = document.getElementById("scaleYButton");
const flipButton = document.getElementById("flipButton");

const clickButton = document.getElementsByClassName("clickButton");
const transitionButton = document.getElementById("optionButton")

let isTransitionOn = false;

let rotationAngle = 0;
rotateButton.addEventListener("click", function()
{
    rotationAngle += 45;
    rotateButton.style.transform = `rotate(${rotationAngle}deg)`;
});

let scaleX = 0;
scaleXButton.addEventListener("click", function()
{
    scaleX += 1.5;
    scaleXButton.style.transform = `scaleX(${scaleX})`
});

let skewX = 0;
let skewY = 0;
skewButton.addEventListener("click", function()
{
    skewX += 10;
    skewY += 10;
    skewButton.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
}); 

let translateX = 0;
let translateY = 0;
translateButton.addEventListener("click", function()
{
    translateX += 20;
    translateY += 10;
    translateButton.style.transform = `translate(${translateX}px, ${translateY}px)`
}); 

let scaleY = 0;
scaleYButton.addEventListener("click", function()
{
    scaleY += 1.5;
    scaleYButton.style.transform = `scaleY(${scaleY})`
});

let flipAngle = 180;
flipButton.addEventListener("click", function()
{
    flipAngle += 180;
    flipButton.style.transform = `rotate(${flipAngle}deg)`;
});

transitionButton.addEventListener("click", function()
{
    const clickButtons = document.querySelectorAll(".clickButton");

    isTransitionOn = !isTransitionOn;
    if (isTransitionOn)
    {
        transitionButton.innerText = "Transition: Yes"
    }
    else 
    {
        transitionButton.innerText = "Transition: No"
    }

    clickButtons.forEach(function(clickButton)
    {
        if (isTransitionOn)
        {
            clickButton.style.transition = "all 0.3s ease-in-out";
        }
        else
        {
            clickButton.style.transition = "";
        }
        
    });
});

