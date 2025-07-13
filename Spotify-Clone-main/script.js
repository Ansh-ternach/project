console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "AisayKaisay-Hasan Raheem", filePath: "songs/1.mp3", coverPath: "covers/Aisay Kaisay - Hasan Raheem.jpg" },
    { songName: "Attention-Charlie Puth", filePath: "songs/2.mp3", coverPath: "covers/Attention - Charlie Puth.jpg" },
    { songName: "Bikhra-Abdul Hannan", filePath: "songs/3.mp3", coverPath: "covers/Bikhra - Abdul Hannan.jpg" },
    { songName: "Blinding Lights-TheWeeknd", filePath: "songs/4.mp3", coverPath: "covers/Blinding Lights - The Weeknd.jpg" },
    { songName: "Call Out My Name-TheWeeknd", filePath: "songs/5.mp3", coverPath: "covers/Call Out My Name - The Weeknd.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "songs/6.mp3", coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "songs/7.mp3", coverPath: "covers/Heat Waves - Glass Animals.jpg" },
    { songName: "Hope-XXXTENTACION", filePath: "songs/8.mp3", coverPath: "covers/Hope -XXXTENTACION.jpg" },
    { songName: "JOONA-Hasan Raheem", filePath: "songs/9.mp3", coverPath: "covers/JOONA -Hasan Raheem.jpg" },
    { songName: "Light Switch-Charlie Puth", filePath: "songs/10.mp3", coverPath: "covers/Light Switch -Charlie Puth.jpg" },
    
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})