import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let logger = [];
let lastKeyTime = Date.now();

function konamiCode(e) {
    const key = e.key.toLowerCase();

    if (Date.now() - lastKeyTime > 1000) {
        logger = [];
    }

    logger.push(key);
    lastKeyTime = Date.now();

    if (
        logger.join("") ===
        "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter"
    ) { // perform an action below
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
        document.removeEventListener("keydown", konamiCode); // only run it once
    }
}

document.addEventListener("keydown", konamiCode);
