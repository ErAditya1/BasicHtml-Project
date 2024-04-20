 function digitalTimer(){


let date = new Date();
let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();

document.getElementById("time").innerHTML = date.toLocaleTimeString().padStart(2,"0");
document.getElementById("date").innerHTML = date.toLocaleDateString("en-US",{year: "numeric",month: "short",day: "numeric", format:"dd-mm-yyyy"}).padStart(2,"0");
document.getElementById("da").innerHTML = date.toLocaleString('en-us', {  weekday: 'long' });



if(hh>12){
    hh = hh%12 ;
    document.getElementById("am").innerHTML = "PM";
}

document.getElementById("hor").innerHTML = hh.toString().padStart(2,"0");
document.getElementById("mnt").innerHTML = mm.toString().padStart(2,"0");
document.getElementById("scnd").innerHTML = ss.toString().padStart(2,"0");


}



setInterval(digitalTimer, 1000);

 function analogTimer() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
  
    const secondDegrees = (second / 60) * 360 + 90;
    const minuteDegrees = (minute / 60) * 360 + 90;
    const hourDegrees = ((hour % 12) / 12) * 360 + 90;
  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(analogTimer, 1);
  