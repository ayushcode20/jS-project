let time = document.getElementById("show");
let interval = null;
let sectime = 0;

function padding(value){
    return String(value).padStart(2,0)
}
function timerr(sectime){
    let minute =Math.floor(sectime/60); 
    let second = Math.floor(sectime%60);

    time.innerHTML=`${padding(minute)}:${padding(second)}`;
}

function timer(){
    sectime++;
    timerr(sectime);

}
function start(){
    if(interval) stop()
    interval = setInterval(timer,1000);

}

function stop(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    sectime=0;
    timerr(sectime);
}