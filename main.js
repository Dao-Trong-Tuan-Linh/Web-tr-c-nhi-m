let seconds = 59;
let minutes = 09;
let hours = 0;

function countDown() {
    seconds--;
    
    if(seconds < 0)
    {
        seconds = 59;
        minutes--;
    }
    if(seconds <10)
    {
        seconds=0+seconds.toString();
    }
    if(minutes < 10)
    {
        minutes=minutes.toString();
    }
    if(minutes < 0)
    {
        alert('Het gio');
    }
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}


window.setInterval(countDown,1000)