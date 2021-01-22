const secondHand = document.querySelector('.hand.second');
const minuteHand = document.querySelector('.hand.minute');
const hourHand = document.querySelector('.hand.hour');

function setClock(){
  const currentDate = new Date();
  const msRatio = currentDate.getMilliseconds() / 1000;
  const secondsRatio = (msRatio + currentDate.getSeconds() ) / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(target, rotationRatio) {
  target.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
setInterval(setClock, 100);