

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360);
    console.log(seconds);
}

setInterval(setDate, 1000);