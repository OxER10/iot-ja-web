document.addEventListener('DOMContentLoaded', function() {
    // Everything has been made to scale automatically with question count
    var answers = [];
    var calculations = document.querySelectorAll('#calculation');
    // arrow function for randomized array generation
    const randomNumbers = (min, max, n = 1) =>
        Array.from(
            { length: n},
            () => Math.floor(Math.random() * (max - min)) + min
        );
    function multiplicationGame() {
        // This allows you to change number range
        let numbers = randomNumbers(0, 10, calculations.length);
        // This allows you to change multiplier range
        let multiplier = randomNumbers(0, 10, calculations.length);
        let answer = new Array();
        // Calculates correct answers
        for (let i = 0; i < calculations.length; i++) {
            answer[i] = numbers[i] * multiplier[i];
        }
        var j = 0;
        // Shows questions
        calculations.forEach(function(calculation) {
            calculation.textContent = `${numbers[j]} x ${multiplier[j]} =`
            j++;
        });
        // Saves answers to global
        answers = answer;
    }

    // On check button press
    document.getElementById('checkButton').addEventListener('click', function() {
        let answerBoxes = document.querySelectorAll('#answer');
        let smileys = document.querySelectorAll('#smiley');
        let correct = 0;
        let i = 0;
        // Checks how many correct
        answerBoxes.forEach(function(answer) {
            if (answer.value == answers[i]) {
                smileys[i].textContent = ":-)"
                smileys[i].style.color = "#009900";
                correct++;
            }
            else {
                smileys[i].textContent = ":-("
                smileys[i].style.color = "#ff0000";
            }
            i++;
        });
        // Prints how many you got correct
        if (correct < calculations.length) {
            document.getElementById('feedback').textContent = `${correct} / ${calculations.length}, Keep practicing!!`;
            document.getElementById('feedback').style.color = "#FF0000";
        }
        else {
            document.getElementById('feedback').textContent = "All correct! Well done!";
            document.getElementById('feedback').style.color = "#009900";
        }
    });

    // On reset button press
    document.getElementById('resetButton').addEventListener('click', function() {
        // Resets every field
        let answerBoxes = document.querySelectorAll('#answer');
        let smileys = document.querySelectorAll('#smiley');
        answerBoxes.forEach(function(answer) {
            answer.value = "";
        });
        smileys.forEach(function(smiley) {
            smiley.textContent = ""
        });
        document.getElementById('feedback').textContent = "";

        // Calls multiplicationGame function to get new values
        multiplicationGame();
    });

    // On show button press
    document.getElementById('showButton').addEventListener('click', function() {
        let answerBoxes = document.querySelectorAll('#answer');
        let i = 0;
        // Fills input boxes with correct answers
        answerBoxes.forEach(function(answer) {
            answer.value = answers[i];
            i++
        });
    });
    multiplicationGame();
});