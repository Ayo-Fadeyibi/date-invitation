 let noClickCount = 0;
        const noBtn = document.getElementById('noBtn');
        
        function createHearts() {
            const container = document.getElementById('hearts');
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = ['💕', '💖', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(heart);
                
                setTimeout(() => heart.remove(), 6000);
            }, 300);
        }
        
        function createSparkles() {
            const container = document.getElementById('sparkles');
            for (let i = 0; i < 50; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(sparkle);
            }
        }
        
        function handleYes() {
            document.getElementById('questionScreen').style.display = 'none';
            document.getElementById('successMessage').classList.add('active');
            
            // Create confetti effect
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.textContent = ['🎉', '💖', '✨', '🌟', '💕'][Math.floor(Math.random() * 5)];
                    confetti.style.position = 'fixed';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-50px';
                    confetti.style.fontSize = '30px';
                    confetti.style.animation = 'float-up 3s ease-in';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 30);
            }
        }
        
        function handleNo() {
            noClickCount++;
            
            const messages = [
                "Are you sure? 🥺",
                "Maybe reconsider? 💭",
                "Pretty please? 🙏",
                "I promise it'll be fun! 🎈",
                "Just one chance? 💫"
            ];
            
            if (noClickCount < messages.length) {
                noBtn.textContent = messages[noClickCount];
            }
            
            // Make the No button smaller and move it
            const currentSize = parseInt(window.getComputedStyle(noBtn).fontSize);
            noBtn.style.fontSize = (currentSize * 0.8) + 'px';
            noBtn.style.padding = (parseInt(window.getComputedStyle(noBtn).paddingTop) * 0.8) + 'px ' + 
                                  (parseInt(window.getComputedStyle(noBtn).paddingLeft) * 0.8) + 'px';
            
            // Random position
            const container = document.querySelector('.container');
            const maxX = container.offsetWidth - noBtn.offsetWidth - 40;
            const maxY = container.offsetHeight - noBtn.offsetHeight - 40;
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = (Math.random() * maxX + 20) + 'px';
            noBtn.style.top = (Math.random() * maxY + 20) + 'px';
            
            // If clicked too many times, just say yes!
            if (noClickCount >= 5) {
                handleYes();
            }
        }
        
        createHearts();
        createSparkles();
