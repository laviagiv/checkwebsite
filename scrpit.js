// An array of meme image URLs
const memeUrls = [
    'https://i.imgflip.com/4/30b1gx.jpg',
    'https://i.imgflip.com/1bij.jpg',
    'https://i.imgflip.com/1otk96.jpg',
    'https://i.imgflip.com/26am.jpg',
    'https://i.imgflip.com/2hgfw.jpg'
];

// Get elements from the DOM
const memeImage = document.getElementById('meme-image');
const newMemeButton = document.getElementById('new-meme');

// Function to get a random meme
function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memeUrls.length);
    memeImage.src = memeUrls[randomIndex];
}

// Add event listener to button
newMemeButton.addEventListener('click', getRandomMeme);
