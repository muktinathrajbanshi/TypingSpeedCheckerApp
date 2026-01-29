const setOfWords = [
    "My name is muktinath rajbanshi and I am a youtuber.",
    "Hope you are having fun this is a simple game you can make.",
    "If you want the source code then link is given in the github so you can create your own version of this challenge."
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log(totalTime);
    
}

btn.addEventListener("click", function() {
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})