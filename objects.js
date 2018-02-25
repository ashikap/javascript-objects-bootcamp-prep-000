var playlist = new Object({keys: '0'});

function updatePlaylist(playlist, artist, song){
   playlist[artist] = song;
   return playlist;
}