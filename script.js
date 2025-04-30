document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const giftButtons = document.querySelectorAll('.gift-button');
    const memoryButtons = document.querySelectorAll('.memory-button');
    const mainButton = document.getElementById('mainButton');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    // Create floating elements
    function createFloatingElement(emoji) {
        const element = document.createElement('div');
        element.innerHTML = emoji;
        element.className = 'heart';
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = (window.innerHeight + 50) + 'px';
        element.style.fontSize = (Math.random() * 20 + 15) + 'px';
        element.style.animationDuration = (Math.random() * 4 + 4) + 's';
        element.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(element);
        
        setTimeout(() => element.remove(), 6000);
    }

    // Gift box functionality
    giftButtons.forEach(button => {
        button.addEventListener('click', function() {
            const giftBox = this.parentElement;
            const message = giftBox.querySelector('.gift-message');
            
            // Animate gift opening
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                message.style.display = 'block';
                
                // Create celebration effect
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        createFloatingElement(['💝', '🌸', '✨', '🎀'][Math.floor(Math.random() * 4)]);
                    }, i * 100);
                }
            }, 300);
            
            // Disable button after opening
            this.disabled = true;
            this.textContent = 'Opened!';
        });
    });

    // Memory lane functionality
    memoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memory = this.parentElement;
            const memoryText = memory.querySelector('.memory-text');
            
            memoryText.style.display = 'block';
            this.textContent = 'Hover Here';
            
            // Add hover effect
            memory.addEventListener('mouseover', () => {
                memory.style.backgroundColor = 'rgba(255, 182, 193, 0.3)';
                memory.style.transform = 'scale(1.02)';
                createFloatingElement('💭');
            });
            
            memory.addEventListener('mouseout', () => {
                memory.style.backgroundColor = '';
                memory.style.transform = '';
            });
        });
    });

    // Main button functionality
    mainButton.addEventListener('click', function() {
        document.querySelector('.hidden-message').style.display = 'block';
        
        // Create romantic effect
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createFloatingElement(['💖', '🌹', '🌟', '🥰'][Math.floor(Math.random() * 4)]);
            }, i * 80);
        }
        
        // Add pulsing animation
        this.classList.add('pulse');
        setTimeout(() => this.classList.remove('pulse'), 1000);
    });

    // Surprise button functionality
    surpriseBtn.addEventListener('click', function() {
        // Create different emoji burst
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createFloatingElement(['🎉', '🎊', '💫', '🌠', '🌈'][Math.floor(Math.random() * 5)]);
            }, i * 50);
        }
        
        // Change button appearance temporarily
        this.textContent = 'Surprise!';
        this.style.background = 'linear-gradient(45deg, #ff9966, #ff5e62)';
        setTimeout(() => {
            this.textContent = 'Click Again!';
            this.style.background = 'linear-gradient(45deg, #ff66b3, #d23c77)';
        }, 1500);
    });

    // Music player functionality
    musicBtn.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            this.textContent = 'Pause Music 🎵';
        } else {
            bgMusic.pause();
            this.textContent = 'Play Music 🎵';
        }
    });

    // Create initial floating elements
    setInterval(() => {
        createFloatingElement(['💖', '🌸', '🌹'][Math.floor(Math.random() * 3)]);
    }, 1500);

    // Add some initial elements
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFloatingElement('💖');
        }, i * 300);
    }
});

// Surprise button functionality
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseContainer = document.getElementById('surpriseContainer');

const surprises = [
    "Did you know? The moment you enter the class room, my heart rate increases by 200%.",
    "Fun fact: I've memorized 10 different languages to propose you.",
    "Here's a secret: I practice conversations with you in my mirror.",
    "Confession: I still remember and smile over the first conversation we had in person.",
    "Truth: Your voice is my favorite notification sound.",
    "Observation: You love changing your instagram profile pictures.",
    "Memory: That time you came to my bench to take submission of my practical notebook.. truly a moment to cherish.",
    "Noticed: You always smell like vanilla and sunshine, even on rainy days (felt it when you passed by).",
    "Discovery: Your smile has exactly 3 phases - polite, genuine, and the one that crinkles your eyes."
];

let usedSurprises = [];

surpriseBtn.addEventListener('click', function() {
    // Reset if all surprises have been shown
    if (usedSurprises.length === surprises.length) {
        usedSurprises = [];
        surpriseContainer.innerHTML = '<div class="surprise-item">No more surprises... just like there\'s no one else like you, Miss Mukherjee.</div>';
        createHearts(30);
        return;
    }

    // Get a random surprise not shown yet
    let availableSurprises = surprises.filter(s => !usedSurprises.includes(s));
    const randomSurprise = availableSurprises[Math.floor(Math.random() * availableSurprises.length)];
    usedSurprises.push(randomSurprise);

    // Display the surprise
    surpriseContainer.style.display = 'block';
    surpriseContainer.innerHTML = `<div class="surprise-item">${randomSurprise}</div>`;
    
    // Create celebration effects
    createConfetti(50);
    createHearts(15);
    
    // Change button text temporarily
    this.textContent = "Another Sweet Surprise?";
    setTimeout(() => {
        if (usedSurprises.length === surprises.length) {
            this.textContent = "No More Secrets!";
        } else {
            this.textContent = "Click for Another Sweet Surprise";
        }
    }, 1500);
});

// Helper functions for effects
function createConfetti(count) {
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.bottom = '-50px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animation = `floatUp ${(Math.random() * 2 + 2)}s ease-out forwards`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Things to Know Button Functionality


// Things to Know Button Functionality
const knowBtn = document.getElementById('knowBtn');
const knowContainer = document.getElementById('knowContainer');

const knowMessages = [
    `<div class="poetic-message">
        <p class="message-title">Your smile...</p>
        <p>>>> Sunrise over ocean</p>
        <p>>>> First Manali snowfall</p>
        <p>>>> Cherry blossoms of Japan</p>
        <p>>>> Any other occasion</p>
        <p class="signature">- Truth</p>
    </div>`,
    
    `<div class="poetic-message">
        <p class="message-title">Your eyes...</p>
        <p>>>> A sky full of stars</p>
        <p>>>> The deepest oceans</p>
        <p>>>> Sunset reflections on a lake</p>
        <p>>>> The universe itself</p>
        <p class="signature">- Fact</p>
    </div>`,
    
    `<div class="poetic-message">
        <p class="message-title">Your voice...</p>
        <p>>>> Birds singing in spring</p>
        <p>>>> The sweetest songs of Atif Aslam</p>
        <p>>>> Angelic choirs</p>
        <p>>>> Healing melodies</p>
        <p class="signature">- Reality</p>
    </div>`,
    
    `<div class="poetic-message">
        <p class="message-title">Your picture...</p>
        <p>>>> Goddesses of mythologies</p>
        <p>>>> Miss Universe winners</p>
        <p>>>> Top models</p>
        <p>>>> Any random apsara from heaven</p>
        <p class="signature">- Universal Truth</p>
    </div>`
];

let shownKnowMessages = [];

knowBtn.addEventListener('click', function() {
    // Add pulse animation
    this.classList.add('pulse');
    setTimeout(() => this.classList.remove('pulse'), 500);
    
    // If all messages have been shown
    if (shownKnowMessages.length === knowMessages.length) {
        shownKnowMessages = [];
        knowContainer.innerHTML = `
            <div class="poetic-message">
                <p>That's all for now...</p>
                <p>But my admiration for you, Miss Mukherjee,</p>
                <p>outshines all these comparisons combined</p>
                <p class="signature">- Forever Yours</p>
            </div>
        `;
        createPetals(30);
        return;
    }
    
    // Get random unseen message
    const availableMessages = knowMessages.filter((_, index) => !shownKnowMessages.includes(index));
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    shownKnowMessages.push(knowMessages.indexOf(availableMessages[randomIndex]));
    
    // Display message
    knowContainer.style.display = 'block';
    knowContainer.innerHTML = availableMessages[randomIndex];
    
    // Create effects
    createPetals(20);
    
    // Change button text
    this.innerHTML = `
        <span class="heart-icon">💖</span>
        ${shownKnowMessages.length === knowMessages.length ? 'No More Truths' : 'Another Beautiful Truth'}
        <span class="sparkle">✨</span>
    `;
});

knowBtn.addEventListener('click', function() {
    // ... existing code ...
    
    // When showing message:
    knowContainer.style.opacity = '1';
    
    // In the reset section:
    knowContainer.style.opacity = '0.3';
  });