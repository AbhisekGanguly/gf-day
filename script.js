const bouquetGifs = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N4N3hwZmY0emhlZWZ3dm1ocnhvazN6eXZla3NiYW5iNTRrNGwxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pBtoGtaFc6DnHEeacf/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dtbnhmc3I5c25zMjl5bTFhdjIyMjl5cnRwc2RneGRhdTF5ZTlzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DwFuqlC6UWm76/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHp1cGx2cWs1NHpvanZ1Y3o4dzVybjdhZHk1NGZ3eGU1bnJnOTVpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13K9nER4Q3NAME/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc29iMTdsY3hnbGM4b2xyd2MzcHZ4cDFpc3QyYzQ0bWt3ZXAyaWt6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMxTaco19Ief9tK/giphy.gif"
];

function showFireworks() {
    // Display fireworks
    const fireworks = document.getElementById('fireworks');
    fireworks.style.display = 'block';

    // Display a random funny GIF
    const funnyGif = document.getElementById('funnyGif');
    const randomGif = bouquetGifs[Math.floor(Math.random() * bouquetGifs.length)];
    funnyGif.src = randomGif;
    funnyGif.classList.remove('hidden');

    // Start looping the firework animations
    startFireworkLoop(fireworks);
}

function startFireworkLoop(container) {
    function loop() {
        createFireworkAnimation(container);
        setTimeout(loop, 2000); // Adjust timing as needed for continuous effect
    }
    loop();
}

function createFireworkAnimation(container) {
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        container.appendChild(firework);

        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 1.5}s`;

        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}

// Firework CSS
const style = document.createElement('style');
style.textContent = `
.firework {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #ff69b4;
    border-radius: 50%;
    animation: explode 1s ease-in-out forwards;
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(10);
        opacity: 0;
    }
}
`;
document.head.append(style);