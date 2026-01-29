const setOfWords = [
    "HTML is used to create the structure and content of a web page.",
    "CSS helps in styling the website with colors, layouts, and animations.",
    "JavaScript is responsible for adding logic and interactivity to web applications.",
    "Together, HTML, CSS, and JavaScript form the core technologies of front-end development.",
    "Using these three technologies, developers can build responsive and user-friendly websites."
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

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = " You typed total at " +speed+ " words per minutes. ";

    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;  
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })
    let errorWords = ( words1.length - cnt );
    return (cnt + " correct out of " + words1.length + " words and the total number of error are "+ errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click", function() {
    if(this.innerText == "Start"){
        typeWords.value = "";
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
        
    }
})