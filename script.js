// Song data - customize with your own songs!
const songs = [
    {
        title: "Golden Line",
        artist: "Djo",
        dedication: "Esta canción seguramente no es la primera vez que la escuchas, pero me gustaría dedicartela porque cuando la escuche, like really heard it, pensé en ti con tanta intensidad que lloré. To me this song screams us being so intense for each other, to better ourselves everyday for US? Me encanta. (I still cry when listening to it)",
        youtubeUrl: "https://youtu.be/VWbgR4LAPUU?si=agBOODqVg-_-QNyT",
        coverImageJPG: "album_covers/goldenline-djo.jpg"
    },
    {
        title: "Snooze",
        artist: "SZA",
        dedication: "Esta es un estilo/género un poco distinto al resto de la playlist pero amo tanto esta canción, creo que GRITA amor, which for me, screams YOU! Así que por eso te la dedico. The idea of missing even a moment with you (in a snooze) is so scary.",
        youtubeUrl: "https://youtu.be/muPO1c6pxXg?si=TmKK_TPLwlp6pcqy",
        coverImageJPG: "album_covers/snooze-sza.jpg"
    },
    {
        title: "Life Ethernal",
        artist: "Ghost",
        dedication: "The first Ghost song on here jijiji, simplemente wow, there’s a verse that I specifically wanted to highlight for this one cause it’s just so beautifully poetic, “Would you let me touch your soul, forever?”, yeah,I wanted to ask that. But the whole thing just feels so magical.",
        youtubeUrl: "https://youtu.be/xUSf1bjd4I8?si=RQy0AbmWJj0W-MDP",
        coverImageJPG: "album_covers/life-eternal-ghost.jpg"
    },
    {
        title: "Emergence",
        artist: "Sleep Token",
        dedication: "Well, you obviously know this one pero I felt like I had to officially include it as one of our songs. The lyrics of “Go ahead and wrap your arms around me”, it’s so fucking romantic, feels like such a love call, a call from me to you.",
        youtubeUrl: "https://youtu.be/JJpFTUP6fIo?si=ZS72yci19LkbcTds",
        coverImageJPG: "album_covers/emergence-sleeptoken.jpg"
    },
    {
        title: "Missilia Amori",
        artist: "Ghost",
        dedication: "Esta también es una que tu me presentaste, pero I truly loved it, the way we have connected through GHOST makes me so happy.",
        youtubeUrl: "https://youtu.be/nx-jo3VLw4Y?si=IbLLm2EdLlmYLU3F",
        coverImageJPG: "album_covers/missilia-amori-ghost.jpg"
    },
    {
        title: "Drag Me Under",
        artist: "Sleep Token",
        dedication: "Another Sleep Token song, cause I feel like their sound is so ethereal, I posted us to this song and want to hightlight the first line, the one that really caught me, “And I know the angels tonight are as lost for words” porque la idea de que seres divinos or even the universe itself, nos ven a NOSOTROS?!!?!?! WOW.",
        youtubeUrl: "https://youtu.be/c6Cqvgjql_Q?si=slK0tUczn5c8Byya",
        coverImageJPG: "album_covers/drag-me-under-sleeptoken.jpg"
    },
    {
        title: "Yen",
        artist: "Slipknot",
        dedication: "Esta canción tbh was very hard to pick, porque se que los últimos albums no son tus favoritos pero creo que esta canción es tan intensa y raw, feels very dark romance, que, aqunque creo que nuestro amor es más on the wholesome side, sometimes this intensity drives deeper. Also, I wanted to include Slipknot somehow.",
        youtubeUrl: "https://youtu.be/XCyF-NPcnBo?si=1gbqmcxFqgmSZdSR",
        coverImageJPG: "album_covers/yen-slipknot.jpg"
    },
    {
        title: "Dance Macabre",
        artist: "Ghost",
        dedication: "Of course I had to include this one!!!!! OUR FIRST SONG. Para mi esta canción siempre estará conectada a nosotros, you dedicated this song to me when we were just starting and I treasure it eternally. Cada que escucho esta rola sonrio por pensar en ti.",
        youtubeUrl: "https://youtu.be/7Gr63DiEUxw?si=QoWkOkBVqlQndiNu",
        coverImageJPG: "album_covers/dance-macabre-ghost.jpg"
    },
    {
        title: "Eternos",
        artist: "Marte",
        dedication: "La primera canción con la que nos publique, con la que compartí con el mundo uno de mis días más felices. Esta es una declaración porque creo que nuestro amor puede ser eterno si nos lo permitirnos. Simplemente quiero que seamos ETERNOS.",
        youtubeUrl: "https://youtu.be/nRB5JKOZTkw?si=ZY-417_2Ii4CnRuU",
        coverImageJPG: "album_covers/eternos-marte.jpg"
    },
    {
        title: "Call Me Little Sunshine",
        artist: "Ghost",
        dedication: "Another Ghost song, what a surprise, this one is simple, I liked it, and I wanted  you to know that you will always have me, I’ll be there when you call.",
        youtubeUrl: "https://youtu.be/DD2m_iqD7dI?si=YpJBfWP82JCN9TQt",
        coverImageJPG: "album_covers/call-me-little-sunshine-Ghost.jpg"
    },
    {
        title: "Figure You Out",
        artist: "Djo",
        dedication: "Most recent dedication from YOU, viva Djo, this one is just an appreciation from me for the love you give me, just, thank you my love.",
        youtubeUrl: "https://youtu.be/JvXm1deRVT4?si=98FO7pesbX2y1gBS",
        coverImageJPG: "album_covers/figure-you-out-djo.jpg"
    },
    {
        title: "Nothing Else Matters",
        artist: "Matallica",
        dedication: "An interesting pull, I know, a long song was must  needed and I think you will appreciate the musicality on this one, I really liked that. But just in general, this is a pretty romantic song I think, that whatever happens in the outside world, we have US.",
        youtubeUrl: "https://youtu.be/ozXZnwYTMbs?si=jRQMiKuXfmFSKze1",
        coverImageJPG: "album_covers/nothing-else-matters.jpg"
    },
    {
        title: "Alkaline",
        artist: "Sleep Token",
        dedication: "Last but definitely not least another Sleep Token song , I just feel like their songs are so intense, just like my love for you, just our connection, our chemistry, I'm in love with us.",
        youtubeUrl: "https://youtu.be/uU5vVT_Cp7c?si=JPNyg_OnPhyrGevh",
        coverImageJPG: "album_covers/alkaline-sleeptoken.jpg"
    }
];

// State variables
let currentIndex = 0;
let isOpen = false;

// DOM elements
const albumWrapper = document.getElementById('albumWrapper');
const albumCover = document.getElementById('albumCover');
const coverImage = document.getElementById('album-cover-image');
const coverSong = document.getElementById('coverSong');
const coverArtist = document.getElementById('coverArtist');
const labelSong = document.getElementById('labelSong');
const labelArtist = document.getElementById('labelArtist');
const songInfo = document.getElementById('songInfo');
const infoTitle = document.getElementById('infoTitle');
const infoArtist = document.getElementById('infoArtist');
const dedication = document.getElementById('dedication');
const playButton = document.getElementById('playButton');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');
const clickHint = document.getElementById('clickHint');

// Update display with current song
function updateDisplay() {
    const song = songs[currentIndex];
    
    // Update cover
    coverImage.src = song.coverImageJPG;
    coverImage.alt = song.title;
    coverSong.textContent = song.title;
    coverArtist.textContent = song.artist;
    
    // Update label
    //labelSong.textContent = song.title;
    //labelArtist.textContent = song.artist;
    
    // Update info panel
    infoTitle.textContent = song.title;
    infoArtist.textContent = song.artist;
    dedication.textContent = song.dedication;
    playButton.href = song.youtubeUrl;
    
    // Update counter
    counter.textContent = `${currentIndex + 1} / 13`;
    
    // Update buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === songs.length - 1;
    
    // Close vinyl if open
    closeVinyl();
}

// Open vinyl animation
function openVinyl() {
    albumWrapper.classList.add('open');
    songInfo.classList.add('visible');
    clickHint.classList.add('hidden');
    isOpen = true;
}

// Close vinyl animation
function closeVinyl() {
    albumWrapper.classList.remove('open');
    songInfo.classList.remove('visible');
    clickHint.classList.remove('hidden');
    isOpen = false;
}

// Toggle vinyl open/close
function toggleVinyl() {
    if (isOpen) {
        closeVinyl();
    } else {
        openVinyl();
    }
}

// Event listeners
albumCover.addEventListener('click', toggleVinyl);

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
        updateDisplay();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleVinyl();
    }
});

// Initialize on page load
updateDisplay();
