
// Lock scrolling initially
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Handle loading animation
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.remove(), 500);
    }, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('welcome-active');
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    const welcomeButton = document.querySelector('.welcome-button');
    
    // Add welcome-active class to body initially
    document.body.classList.add('welcome-active');
    
    // Remove loading screen after content loads
    setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => loading.remove(), 500);
    }, 1500);

    welcomeButton.addEventListener('click', () => {
        welcomeOverlay.classList.add('closing');
        document.body.classList.remove('welcome-active');
        
        // Wait for animation to complete before enabling scroll
        setTimeout(() => {
            welcomeOverlay.remove();
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            // Fade in main content
            document.querySelector('.container').style.animation = 'fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }, 1200);
    });
    // Add section dividers
    const sections = document.querySelectorAll('.interactive-section, .diary-section, .mood-board, .garden-section');
    sections.forEach(section => {
        const divider = document.createElement('div');
        divider.className = 'section-divider';
        section.parentNode.insertBefore(divider, section.nextSibling);
    });

    // Create floating rose petals
    function createRosePetals() {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(petal);
        
        setTimeout(() => petal.remove(), 10000);
    }

    // Create rose petals periodically
    setInterval(createRosePetals, 3000);
    // Create initial batch of petals
    for(let i = 0; i < 5; i++) {
        setTimeout(createRosePetals, i * 500);
    }

    // Audio Controls

    // Initialize all interactive elements
    const gift1 = document.getElementById('gift1');
    const gift2 = document.getElementById('gift2');
    const memory1 = document.getElementById('memory1');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContainer = document.getElementById('surpriseContainer');
    const diaryBtn = document.getElementById('diaryBtn');
    const diaryContent = document.getElementById('diaryContent');
    const knowBtn = document.getElementById('knowBtn');
    const knowContainer = document.getElementById('knowContainer');
    const plantFlowerBtn = document.getElementById('plantFlowerBtn');
    const flowersContainer = document.getElementById('flowersContainer');

    // Gift box interactions
    function setupGiftBox(giftBox) {
        const button = giftBox.querySelector('.gift-button');
        const message = giftBox.querySelector('.gift-message');
        
        button.addEventListener('click', () => {
            message.classList.toggle('show');
        });
    }

    setupGiftBox(gift1);
    setupGiftBox(gift2);

    // Memory interaction
    const memoryButton = memory1.querySelector('.memory-button');
    const memoryText = memory1.querySelector('.memory-text');
    
    memoryButton.addEventListener('click', () => {
        memoryText.classList.toggle('show');
    });

    // Surprise button functionality
    surpriseBtn.addEventListener('click', () => {
        const surprises = [
            "Every time I see you, my heart skips a beat 💓",
            "Your smile lights up my world ✨",
            "You make every moment special 🌟",
            "Just thinking about you makes me smile 😊"
        ];
        
        surpriseContainer.style.display = 'block';
        const surprise = surprises[Math.floor(Math.random() * surprises.length)];
        surpriseContainer.innerHTML = `<div class="surprise-item">${surprise}</div>`;
    });

    // Diary button
    diaryBtn.addEventListener('click', () => {
        diaryContent.style.display = diaryContent.style.display === 'block' ? 'none' : 'block';
    });

    // Things to Know Button Functionality
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

    let isFirstClick = true;

    knowBtn.addEventListener('click', function() {
        // Add pulse animation
        this.classList.add('pulse');
        setTimeout(() => this.classList.remove('pulse'), 500);

        // Change button text after first click
        if (isFirstClick) {
            this.innerHTML = `
                <span class="heart-icon">💖</span>
                Click Again
                <span class="sparkle">✨</span>
            `;
            isFirstClick = false;
        }
        
        // If all messages have been shown
        if (shownKnowMessages.length === knowMessages.length) {
            isFirstClick = true;
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
        knowContainer.style.opacity = '1';
        knowContainer.innerHTML = availableMessages[randomIndex];
        
        // Create effects
        createFloatingElement('💖');
        setTimeout(() => createFloatingElement('✨'), 300);
    });

    // Create floating element function
    function createFloatingElement(text) {
        const element = document.createElement('div');
        element.className = 'heart';
        element.textContent = text;
        element.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(element);
        setTimeout(() => element.remove(), 6000);
    }

    // Create petal effect function
    function createPetals(count) {
        const petalEmojis = ['🌸', '🌺', '🌹', '💐'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
                petal.style.left = Math.random() * window.innerWidth + 'px';
                petal.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(petal);
                
                setTimeout(() => petal.remove(), 6000);
            }, i * 100);
        }
    }

    // Mood board functionality
    const moodTiles = document.querySelectorAll('.mood-tile');
    const moodQuote = document.querySelector('.mood-quote');
    const bengaliQuotes = {
        "love": "Tomar prem amar jibone sobcheye sundor upohar",
        "peace": "Tomar uposthiti amar hridoye shanti niye ashe",
        "dreams": "Tomar chokher basha amar swopner thikana",
        "joy": "Tomar hashi amar jibone alo niye ashe"
    };

    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    moodTiles.forEach(tile => {
        // Handle both click and touch events
        const showQuote = (e) => {
            e.preventDefault();
            const mood = tile.getAttribute('data-mood');
            const quote = bengaliQuotes[mood];
            if (quote) {
                // Remove show class from all tiles first
                moodTiles.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tile
                tile.classList.add('active');
                moodQuote.classList.add('show');
                typeWriter(moodQuote, quote);
            }
        };

        tile.addEventListener('click', showQuote);
        tile.addEventListener('touchstart', showQuote, { passive: false });
    });

    // Close quote when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mood-tile') && !e.target.closest('.mood-quote')) {
            moodQuote.classList.remove('show');
            moodTiles.forEach(tile => tile.classList.remove('active'));
        }
    });

    // Garden functionality
    const flowerTypes = [
        { emoji: '🌸', name: 'Cherry Blossom' },
        { emoji: '🌹', name: 'Rose' },
        { emoji: '🌺', name: 'Hibiscus' },
        { emoji: '🌻', name: 'Sunflower' },
        { emoji: '🌼', name: 'Daisy' },
        { emoji: '💐', name: 'Bouquet' },
        { emoji: '🌷', name: 'Tulip' }
    ];
    let flowerCount = 0;

    function createFlower() {
        if (flowerCount >= 20) {
            const notification = document.createElement('div');
            notification.className = 'garden-notification';
            notification.textContent = 'The garden is full of beautiful flowers! 🌸';
            flowersContainer.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
            return;
        }

        const flower = document.createElement('div');
        const selectedFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.className = 'flower';
        flower.setAttribute('aria-label', selectedFlower.name);
        flower.innerHTML = selectedFlower.emoji;
        
        // Add tooltip with flower name
        const tooltip = document.createElement('div');
        tooltip.className = 'flower-tooltip';
        tooltip.textContent = selectedFlower.name;
        flower.appendChild(tooltip);
        
        flower.addEventListener('mouseover', () => {
            tooltip.style.opacity = '1';
            createSparkleEffect(flower);
        });
        
        flower.addEventListener('mouseout', () => {
            tooltip.style.opacity = '0';
        });

        // Random position within the container
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10; // 10% to 90%
        flower.style.left = x + '%';
        flower.style.top = y + '%';

        // Add growth animation
        flower.style.transform = 'scale(0)';
        flowersContainer.appendChild(flower);

        setTimeout(() => {
            flower.style.transform = 'scale(1)';
        }, 100);

        flowerCount++;

        // Add sparkle effect
        for(let i = 0; i < 3; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = (x - 5 + Math.random() * 10) + '%';
                sparkle.style.top = (y - 5 + Math.random() * 10) + '%';
                flowersContainer.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 200);
        }
    }

    plantFlowerBtn.addEventListener('click', createFlower);
});

// Initialize background music
const bgMusic = new Audio('tera-hone-laga-hoon-668.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

const muteBtn = document.getElementById('muteBtn');
let isMuted = false;

muteBtn.addEventListener('click', () => {
    if (isMuted) {
        bgMusic.play();
        muteBtn.textContent = '🔊';
        isMuted = false;
    } else {
        bgMusic.pause();
        muteBtn.textContent = '🔈';
        isMuted = true;
    }
});

// Start playing when user interacts with the page
document.addEventListener('click', () => {
    if (!isMuted) {
        bgMusic.play();
    }
}, { once: true });