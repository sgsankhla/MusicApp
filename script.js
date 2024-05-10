console.log("welcome to SPOTIFY")

let songIndex = 0;
let audioElement = new Audio('song/1.mp3')
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"))


let songs = [
    { songName: "Slam-e-Ishq",                         filePath: "./song/1.mp3",    coverPath: "covers/01.jpg" },
    { songName: "Rang Ishq Ka -  Vishal Mishra",       filePath: "./song/2.mp3",    coverPath: "./covers/02.jpg" },
    { songName: "Ishq Mitaye -  Mohit Chauhan",        filePath: "./song/3.mp3",    coverPath: "./covers/03.jpg" },
    { songName: "Soulmate - Badshah and Arijit Singh", filePath: "./song/4.mp3",    coverPath: "./covers/04.jpg" },
    { songName: "Barse More Naina -  Khosla Raghu",    filePath: "./song/5.mp3",    coverPath: "./covers/05.jpg" },
    { songName: "Mirza - Richa Sharma ",               filePath: "./song/2.mp3",    coverPath: "./covers/04.jpg" },
    { songName: "Vida Karo - Arijit Singh and Jonita Gandhi", filePath: "./song/1.mp3", coverPath: "./covers/05.jpg" },
    

]

songItem.forEach((element , i)=>{
    console.log(element , i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})

///Listen to events
audioElement.addEventListener('timeupdate', ()=> {
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress
})


myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('fa-regular fa-2x fa-circle-play')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('fa-regular fa-2x fa-circle-play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex +1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})


//Next Button
document.getElementById("next").addEventListener("click" , ()=>{
    if(songIndex >= 9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
   
} )


//Back Button
document.getElementById("back").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})