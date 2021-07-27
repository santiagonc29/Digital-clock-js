function currentTime(){
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.getMonth();
    var currDate = date.getDate();
    var year = date.getFullYear();
    var monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var showDay = document.querySelectorAll(".day-w span");
    var midDay = "A.M";
    midDay = (hour >= 12) ? "P.M." : "A.M";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    currDate = updateTime(currDate);
    document.querySelector("#time").innerHTML = `${hour}:${min}`
    document.querySelector("#sec").innerHTML = `${sec}`
    document.querySelector("#md").innerHTML = `${midDay}`
    document.querySelector("#fecha").innerHTML = `${monthNames[month]} ${currDate} ${year}`
    showDay[day].style.opacity = "1";
}

function updateTime(k){
    if(k < 10) {
        return "0" + k;
    }
    else{
        return k;
    }
}

setInterval(currentTime, 1000);