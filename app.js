let circleProgress = document.querySelector('.circle-progress');
let numberOfBreaths = document.querySelector('.breaths-input');
let start = document.querySelector('.start');
let instructions = document.querySelector('.instructions');
let breathsText = document.querySelector('.breaths-text');
let breathsLeft = 3;

//Watching for number of breaths

numberOfBreaths.addEventListener('change',() =>{
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
})

//Grow Shirnk circle

let growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() =>{
        circleProgress.classList.remove("circle-grow");
    }, 8000);
};

//Breathing Instructions

let breathingTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breath In ";
    setTimeout(() =>{
        instructions.innerText ="Hold Breath";
        setTimeout(() =>{
            instructions.innerText ="Exhale Breath"
        },4000)
    }, 4000);
};




//Breathing App Function 
let breathinApp = () => {
    let breathingAnimation = setInterval(() =>{
        if(breathsLeft === 0){
            clearInterval(breathingAnimation);
            instructions.innerText = "Breathing session completed.Click 'Begin";
            start.classList.remove('button-inactive');
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growCircle();
        breathingTextUpdate();
    }, 12000)
}


//same as onclick in html
start.addEventListener('click', () =>{
    start.classList.add("button-inactive");
    instructions.innerText = "Get Relaxed & ready to begin"
    setTimeout(() =>{
            instructions.innerText = "Breathing is about to begin";
            setTimeout(() =>{
                breathinApp();
                growCircle();
                breathingTextUpdate();
            },2000);
    },2000);
});
