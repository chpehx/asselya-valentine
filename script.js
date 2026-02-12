// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all screens
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    const step5 = document.getElementById('step5');

    // Get all buttons
    const askBtn = document.getElementById('askBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const backArrowBtn = document.getElementById('backArrowBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Get audio element
    const bgMusic = document.getElementById('bgMusic');

    // Try to play music (handle autoplay restrictions)
    bgMusic.play().catch(function(error) {
        console.log('Autoplay prevented. Music will play after user interaction.');
    });

    // Function to switch screens
    function showScreen(screenToShow) {
        // Remove active class from all screens
        [step1, step2, step3, step4, step5].forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Add active class to the target screen
        screenToShow.classList.add('active');

        // Ensure music plays
        bgMusic.play().catch(function(error) {
            console.log('Music play attempt failed.');
        });
    }

    // Event Listeners

    // Step 1 -> Step 2: Ask button clicked
    askBtn.addEventListener('click', function() {
        showScreen(step2);
    });

    // Step 2 -> Step 3: Yes button clicked
    yesBtn.addEventListener('click', function() {
        showScreen(step3);
    });

    // Step 2 -> Step 5: No button clicked
    noBtn.addEventListener('click', function() {
        showScreen(step5);
    });

    // Step 3 -> Step 4: Forward arrow clicked (to love note)
    forwardBtn.addEventListener('click', function() {
        showScreen(step4);
    });

    // Step 4 -> Step 1: Back arrow from love note
    backArrowBtn.addEventListener('click', function() {
        showScreen(step1);
    });

    // Step 5 -> Step 1: Back arrow from NO response
    resetBtn.addEventListener('click', function() {
        showScreen(step1);
    });

    // Add click event to unmute audio if needed
    document.body.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().catch(function(error) {
                console.log('Could not play audio.');
            });
        }
    }, { once: true });
});