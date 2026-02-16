// Song data - customize with your own songs!
const songs = [
    {
        title: "Golden Line",
        artist: "Djo",
        dedication: "This song reminds me of when we first met. Every note brings me back to that magical moment.",
        youtubeUrl: "https://youtu.be/VWbgR4LAPUU?si=agBOODqVg-_-QNyT",
        coverImage: "album_covers/goldenline-djo.jpg"
    },
    {
        title: "Snooze",
        artist: "SZA",
        dedication: "I love this song because it perfectly captures how I feel about you.",
        youtubeUrl: "https://youtu.be/muPO1c6pxXg?si=TmKK_TPLwlp6pcqy",
        coverImage: "album_covers/snooze-sza.jpg"
    },
    {
        title: "Life Ethernal",
        artist: "Ghost",
        dedication: "This is our song for dancing in the kitchen at midnight.",
        youtubeUrl: "https://youtu.be/xUSf1bjd4I8?si=RQy0AbmWJj0W-MDP",
        coverImage: "album_covers/life-eternal-ghost.jpg"
    },
    {
        title: "Emergence",
        artist: "Sleep Token",
        dedication: "Every time I hear this, I think of our adventures together.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/emergence-sleeptoken.jpg"
    },
    {
        title: "Missilia Amori",
        artist: "Ghost",
        dedication: "This song means everything to me because it was playing during our first date.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/missilia-amori-ghost.jpg"
    },
    {
        title: "Drag Me Under",
        artist: "Sleep Token",
        dedication: "I want to dedicate this to you because it reminds me how lucky I am to have you.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/drag-me-under-sleeptoken.jpg"
    },
    {
        title: "Yen",
        artist: "Slipknot",
        dedication: "This reminds me of you when you're being your wonderful, silly self.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/yen-slipknot.jpg"
    },
    {
        title: "Dance Macabre",
        artist: "Ghost",
        dedication: "Our special moment with this song will always be in my heart.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/dance-macabre-ghost.jpg"
    },
    {
        title: "Eternos",
        artist: "Marte",
        dedication: "This song captures how I feel when I'm with you - completely happy.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/eternos-marte.jpg"
    },
    {
        title: "Call Me Little Sunshine",
        artist: "Ghost",
        dedication: "I chose this song because it's been the soundtrack to our love story.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/call-me-little-sunshine-Ghost.jpg"
    },
    {
        title: "Figure You Out",
        artist: "Djo",
        dedication: "This will always remind me of us and all our beautiful memories together.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/figure-you-out-djo.jpg"
    },
    {
        title: "Nothing Else Matters",
        artist: "Matallica",
        dedication: "For all the times we've laughed, cried, and grown together.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/nothing-else-matters.jpg"
    },
    {
        title: "Alkaline",
        artist: "Sleep Token",
        dedication: "Forever our song. I love you more than words can say. ❤️",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        coverImage: "album_covers/alkaline-sleeptoken.jpg"
    }
];

// State variables
let currentIndex = 0;
let isOpen = false;

// DOM elements
const albumWrapper = document.getElementById('albumWrapper');
const albumCover = document.getElementById('albumCover');
const coverImage = document.getElementById("album-cover-image");
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
    coverImage.src = song.coverImage;
    coverImage.alt = song.title;
    coverSong.textContent = song.title;
    coverArtist.textContent = song.artist;
    
    // Update label
    labelSong.textContent = song.title;
    labelArtist.textContent = song.artist;
    
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
