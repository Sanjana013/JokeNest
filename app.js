let url = "https://official-joke-api.appspot.com/random_joke";

let jokeBtnOne = document.querySelector("#card1 button");

jokeBtnOne.addEventListener("click", async() => {
    let ques = document.querySelector("#card1 .questn");
    let ans = document.querySelector("#card1 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

let jokeBtnTwo = document.querySelector("#card2 button");

jokeBtnTwo.addEventListener("click", async() => {
    let ques = document.querySelector("#card2 .questn");
    let ans = document.querySelector("#card2 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

let jokeBtnThree = document.querySelector("#card3 button");

jokeBtnThree.addEventListener("click", async() => {
    let ques = document.querySelector("#card3 .questn");
    let ans = document.querySelector("#card3 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

let jokeBtnFour = document.querySelector("#card4 button");

jokeBtnFour.addEventListener("click", async() => {
    let ques = document.querySelector("#card4 .questn");
    let ans = document.querySelector("#card4 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

let jokeBtnFive = document.querySelector("#card5 button");

jokeBtnFive.addEventListener("click", async() => {
    let ques = document.querySelector("#card5 .questn");
    let ans = document.querySelector("#card5 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

let jokeBtnSix = document.querySelector("#card6 button");

jokeBtnSix.addEventListener("click", async() => {
    let ques = document.querySelector("#card6 .questn");
    let ans = document.querySelector("#card6 .ans");
    let joke = await getJokes();
    ques.innerText = joke.setup;
    ans.innerText = joke.punchline;
});

async function getJokes() {
    try {
        let res = await axios.get(url);
        return (res.data); 
    } catch(err) {
        console.log(err);
    }
}

let likeArr = [];

let likeVals = document.querySelectorAll(".like p");

likeVals.forEach((likeVal,index) => {
    let likeNum = Math.floor(Math.random() * (111 - 100)) + 100;
    likeVal.innerText = likeNum;
    likeArr[index] = likeNum;
});

let likeBtns = document.querySelectorAll(".like i");

likeBtns.forEach((btn,index) => {
    btn.addEventListener("click", () => {
        likeColor(btn);
        likeCountIncrement(index);
        
    });
});

function likeColor(btn) {
    let color = window.getComputedStyle(btn).color;
    if (color == "rgb(211, 211, 211)") {
        btn.style.color = "red";
    } else {
        btn.style.color = "rgb(211, 211, 211)";
    }
};

function likeCountIncrement(index) {
    let para = document.querySelector(`#like${index+1} p`);
    let likeCount = likeArr[index] + 1;
    para.innerText = likeCount;
    likeArr[index] = likeCount;
};

let maxLike = likeArr[0];
let maxLikeIndex = 0;

for (let i=0; i<likeArr.length; i++) {
    if (likeArr[i] > maxLike) {
        maxLike = likeArr[i];
        maxLikeIndex = i;
    }
}

let mainJokeSetup = document.querySelector(".joke-of-the-day .joke-body h2");
let mainJokePunch = document.querySelector(".joke-of-the-day .joke-body h3");

let SetupLine = document.querySelector(`#card${maxLikeIndex+1} .questn`).textContent;
let PunchLine = document.querySelector(`#card${maxLikeIndex+1} .ans`).textContent;

mainJokeSetup.innerText = `${SetupLine}`;
mainJokePunch.innerText = `${PunchLine}`;