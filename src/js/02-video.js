import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const storageTime = throttle((data) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000);

  player.on('timeupdate', function(data) {

    storageTime(data);
  });

  
  const localData = JSON.parse(localStorage.getItem('videoplayer-current-time'));

  if(localStorage.length === 0) {
  return
} 
player.setCurrentTime(localData.seconds).then(function(seconds) {
  seconds = localData.seconds;
});




