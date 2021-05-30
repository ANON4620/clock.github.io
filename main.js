const clock = document.getElementById('clock');

function updateTime() {
  const time = new Date();

  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  if(h > 12)
    h = h - 12;
    
  if(h < 10)
    h = `0${h}`;
  if(m < 10)
    m = `0${m}`;
  if(s < 10)
    s = `0${s}`;

  clock.innerText = `${h} : ${m} : ${s}`;
}

updateTime();
setInterval(updateTime, 1000);

