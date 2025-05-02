
// Add loading animation
const loading = document.createElement('div');
loading.className = 'loading';
document.body.appendChild(loading);

document.addEventListener('DOMContentLoaded', function() {
    // Remove loading screen after content loads
    setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => loading.remove(), 500);
    }, 1500);
    // Add section dividers
    const sections = document.querySelectorAll('.interactive-section, .diary-section, .fountain-section, .mood-board, .garden-section');
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
    const mainButton = document.getElementById('mainButton');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContainer = document.getElementById('surpriseContainer');
    const diaryBtn = document.getElementById('diaryBtn');
    const diaryContent = document.getElementById('diaryContent');
    const knowBtn = document.getElementById('knowBtn');
    const knowContainer = document.getElementById('knowContainer');
    const makeWishBtn = document.getElementById('makeWishBtn');
    const wishesContainer = document.getElementById('wishesContainer');
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

    // Special message button
    mainButton.addEventListener('click', () => {
        const message = document.querySelector('.secret-message .hidden-message');
        message.style.display = 'block';
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

    // Wish fountain functionality
    const defaultWishes = [
        "I wish to see your smile every day",
        "I wish to hear your voice more often",
        "I wish to make you happy always",
        "I wish to share more moments with you",
        "I wish to be the reason for your joy",
        "I wish to create beautiful memories together"
    ];

    let activeWishes = [];

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        wishesContainer.appendChild(ripple);
        setTimeout(() => ripple.remove(), 2000);
    }

    function createSparkle(x, y) {
        const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98'];
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        wishesContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }

    function createWish(wishText, isCustom = false) {
        const wish = document.createElement('div');
        wish.className = 'wish';
        wish.textContent = wishText;
        wish.setAttribute('data-custom', isCustom);
        
        const startX = Math.random() * 80 + 10;
        wish.style.left = startX + '%';
        
        wish.addEventListener('mouseover', () => {
            wish.classList.add('wish-glow');
            for(let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const rect = wish.getBoundingClientRect();
                    const x = rect.left + Math.random() * rect.width;
                    const y = rect.top + Math.random() * rect.height;
                    createSparkle(x, y);
                }, i * 100);
            }
        });
        
        wish.addEventListener('mouseout', () => {
            wish.classList.remove('wish-glow');
        });
        
        wishesContainer.appendChild(wish);
        activeWishes.push(wish);
        
        setTimeout(() => {
            const index = activeWishes.indexOf(wish);
            if (index > -1) {
                activeWishes.splice(index, 1);
            }
            wish.remove();
        }, 8000);
        
        checkWishInteractions();
    }

    function checkWishInteractions() {
        if (activeWishes.length >= 2) {
            const customWishes = activeWishes.filter(w => w.getAttribute('data-custom') === 'true');
            const defaultWishes = activeWishes.filter(w => w.getAttribute('data-custom') === 'false');
            
            if (customWishes.length > 0 && defaultWishes.length > 0) {
                createWishInteraction(customWishes[0], defaultWishes[0]);
            }
        }
    }

    function createWishInteraction(wish1, wish2) {
        const rect1 = wish1.getBoundingClientRect();
        const rect2 = wish2.getBoundingClientRect();
        
        const startX = rect1.left + rect1.width / 2;
        const startY = rect1.top + rect1.height / 2;
        const endX = rect2.left + rect2.width / 2;
        const endY = rect2.top + rect2.height / 2;
        
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                const x = startX + (endX - startX) * (i / 10);
                const y = startY + (endY - startY) * (i / 10);
                createSparkle(x, y);
            }, i * 100);
        }
        
        wish1.classList.add('wish-interaction');
        wish2.classList.add('wish-interaction');
        
        setTimeout(() => {
            wish1.classList.remove('wish-interaction');
            wish2.classList.remove('wish-interaction');
        }, 1000);
    }

    makeWishBtn.addEventListener('click', function() {
        const rect = wishesContainer.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = rect.height - 20;
        createRipple(x, y);
        
        const customWish = prompt('Make your wish, or click OK for a magical wish:');
        
        let wish;
        let isCustom = false;
        
        if (customWish && customWish.trim()) {
            wish = customWish;
            isCustom = true;
        } else {
            wish = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];
        }
        
        createWish(wish, isCustom);
        
        createFloatingElement('✨');
        setTimeout(() => createFloatingElement('🌟'), 200);
        setTimeout(() => createFloatingElement('💫'), 400);
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

var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create the player
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: 'K1W1jjo3_iU',
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'loop': 1,
          'playlist': 'K1W1jjo3_iU',
          'mute': 0,
          'modestbranding': 1
        },
        events: {
          'onReady': function (event) {
            event.target.setVolume(30); // Adjust volume
            event.target.playVideo();
          }
        }
      });
    }