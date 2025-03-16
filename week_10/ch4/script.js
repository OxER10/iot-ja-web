document.addEventListener('DOMContentLoaded', function() {
    // Save document elements to const for easier syntax
    const element = document.getElementById('element');
    const timeP = document.getElementById('timeP');
    const shapes = ["red", "redcircle", "blue", "bluecircle", "green", "greencircle"];

    // Guessing game function
    function guessingGame() {

        let startTime = new Date().getTime();
        let size = Math.floor(Math.random() * (200 - 50) + 50);
        let positionY = Math.floor(Math.random() * (500 - 10) + 10);
        let positionX = Math.floor(Math.random() * (500 - 10) + 10);
        let elementShape = Math.floor(Math.random() * 5);
        element.style.display = "block";
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${positionY}px`;
        element.style.left = `${positionX}px`;
        element.className = shapes[elementShape];
        element.addEventListener('click', function() {
            element.style.display = "none";
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;
            timeP.textContent = `${timeTaken}s`;
        });
        setTimeout(guessingGame, (Math.floor(Math.random() * (8 - 4) + 4)) * 1000);
    }
    // First time the website runs
    guessingGame();
});