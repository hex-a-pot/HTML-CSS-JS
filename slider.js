const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")

const bottom = document.querySelector(".bottom")

let slideNumber = 1;

for(let i = 0; i<images.length; i++)
{
    const button = document.createElement("div")
    button.className = "button";
    bottom.append(button);
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white";

const resetButtonBg = ()=>{
    buttons.forEach(button=>{button.style.backgroundColor = "transparent"})
}

buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetButtonBg();
        slider.style.transform = `translateX(-${i*800}px)`
        button.style.backgroundColor = "white";
        slideNumber = i+1;
    })
})

const nextSlide = ()=>{
    resetButtonBg();
    slider.style.transform = `translateX(-${slideNumber++ *800}px)`
    buttons[slideNumber - 1].style.backgroundColor = "white";
}
const getFirstSlide = ()=>{
    resetButtonBg();
    slider.style.transform = `translateX(0px)`
    slideNumber = 1;
    buttons[slideNumber - 1].style.backgroundColor = "white";
}

const getLastSlide = ()=>{
    resetButtonBg();
    slider.style.transform = `translateX(-${800*(images.length-1)}px)`
    slideNumber = images.length
    buttons[slideNumber - 1].style.backgroundColor = "white";
}

const getPrevSlide = ()=>{
    resetButtonBg();
    slider.style.transform = `translateX(-${(slideNumber-2) * 800 }px)`
    slideNumber--;
    buttons[slideNumber - 1].style.backgroundColor = "white";
}


right.addEventListener("click",()=>{
    slideNumber < images.length ? nextSlide() : getFirstSlide()
})

left.addEventListener("click",()=>{
    slideNumber === 1 ? getLastSlide() : getPrevSlide()
})


