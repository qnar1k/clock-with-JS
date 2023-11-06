setInterval(Clock, 1000);

let secondSlaq = document.getElementById("sec");
let minuteSlaq = document.getElementById("min");
let hourSlaq = document.getElementById("hr");

function Clock(){
    let now = new Date();
    let second = now.getSeconds() / 60;
    let minute = (second + now.getMinutes()) / 60;
    let hour = (minute + now.getHours()) / 12;
    Rotation(secondSlaq, second);
    Rotation(minuteSlaq, minute);
    Rotation(hourSlaq, hour);
}

function Rotation(element, unit) {
    element.style.setProperty("--rotation", unit * 360);
}

Rotation();