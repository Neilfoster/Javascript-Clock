const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


//To display the current day and date
var date = new Date()
document.getElementById("date").innerHTML = date.toDateString();

// Function for setting clock hands 
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    const day = now.getUTCDay();

}

setInterval(setDate, 1000);

