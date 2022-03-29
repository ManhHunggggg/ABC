
   audio = new Audio("https://quynhhoa.org/y2meta.com - Hello Viet Nam║Pham Quynh Anh HD║Lyrics[HD Kara + Vietsub] (320 kbps).mp3");

document.onclick = function() {
  audio.play();
  if (typeof audio.loop == 'boolean')
{
    audio.loop = true;
}
else
{
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
audio.play();
  
}
         
