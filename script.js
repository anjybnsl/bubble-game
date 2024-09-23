var timer = 60;
var score = 0;
var hitrn = 0;
//these above variable are created outsite any functions, because of which these can be used anywhere.

function increaseScore(){
    score += 10; //+= means to add the new data into the previous data.
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    // here Math.floor() is used to o/p decimal number to single non decimal number eg, 1.7435 will be 1 and Math.random() is used to
    // give random number b/w 0-1 and it gives decimal numbers, so we multiplied it with ten so that it can be a proper number and then we
    // passed it inside the Math.floor() to have a non decimal number.
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble() {
    var clutter = "";
    var bubbleCount = Math.floor(window.innerWidth / 65); // Dynamically calculate bubble count based on screen width

    for (var i = 1; i <= bubbleCount * 10; i++) { // Adjust total number of bubbles for better distribution
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}


//the above all is with the makeBubble function

function runTimer(){
    var timerint = setInterval(function (){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h2>Game Over!<h2 />`;
        }
        
    }, 1000);
}

// upon clicking the required number the program should check it the hit number is same as resured, if yes the score should increase,
// new random bubbles shoould be created and new hit should be available

// EVENT BUBBLING
document.querySelector(".pbtm").addEventListener("click", function (details){ //click event applied on parent of bubbles i.e. "pbtm" 
    var clickedNum = Number(details.target.textContent); //here we are extracting the number on which we have clicked in the game, how
    // is this working: "details.target" will get the details of the div of the number clicked, but we only want the number, for this we are using
    // "textContent" it will give us the number/text inside the div but the resulted o/p will be a string value not a proper number, to
    // achive that we will put this all in "Number" as it will give us the actual number value.
    if(clickedNum === hitrn){ //here we are checking if the clickedNum is "strictly" equal to (===) "hitrn", if yes run the following.
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

// now, the above concept is EVENT BUBBLING: this means that we will apply some event to a and element if the the event is found on 
// that element the event will run but if not the program will hop to its parent to find the event and if not found on parent as well,
// it will search on the parent's parent and so on till it does not find the event applied.

// calling of the functions
getNewHit();
makeBubble();
runTimer();