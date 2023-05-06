import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const LOCAL_STORAGE_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(playTime, 1000));

saveCurrentTime(LOCAL_STORAGE_TIME);

function playTime(time) {
  const currentTime = time.seconds;

  localStorage.setItem(LOCAL_STORAGE_TIME, currentTime);
}
function saveCurrentTime(key) {
  const getLocalStorage = localStorage.getItem(key);

  if (getLocalStorage) {
    player.setCurrentTime(getLocalStorage);
  }
}
