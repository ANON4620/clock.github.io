const clock = document.getElementById('clock');

function updateTime() {
  const time = new Date();

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  if(s < 10)
    s = `0${s}`;

  clock.innerText = `${h} : ${m} : ${s}`;
}

updateTime();
setInterval(updateTime, 1000);

