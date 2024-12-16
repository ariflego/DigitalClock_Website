function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString
}

function timeMessage(){
    const now = new Date();
    const hours = now.getHours();
    let timeMessage = document.getElementById("timeMessage");
    let timeEmoji = document.getElementById("timeEmoji");
    let inspQuotes = document.getElementById("inspQuotes");

    if(hours == 6 || hours == 7){
        timeMessage.textContent = "Rise and shine!";
        timeEmoji.textContent = "🌄";
        inspQuotes.textContent = "Today will always be another day!"
    }
    else if(hours > 7 && hours <= 12){
        timeMessage.textContent = "Prepare to go to class!";
        timeEmoji.textContent = "🏫";
        inspQuotes.textContent = "Learning is priority!"
    }
    else if(hours == 13){
        timeMessage.textContent = "Take a break!";
        timeEmoji.textContent = "🍪";
        inspQuotes.textContent = "Always keep your mind fresh the entire day!"
    }
    else if(hours > 13 && hours < 19){
        timeMessage.textContent = "Keep on going!";
        timeEmoji.textContent = "💪";
        inspQuotes.textContent = "Never give up on your dreams!"
    }
    else if(hours > 19 && hours < 22){
        timeMessage.textContent = "Relax time! You had done well for today.";
        timeEmoji.textContent = "🕹️";
        inspQuotes.textContent = "Calm down your mind after a long day of work."
    }
    else {
        timeMessage.textContent = "Sleep time! Go to sleep...";
        timeEmoji.textContent = "💤";
        inspQuotes.textContent = "Sleeping is the best way to gain energy for tommorow."
    }
}

updateClock();
timeMessage();

setInterval(updateClock, 1000);
setInterval(timeMessage, 1000);