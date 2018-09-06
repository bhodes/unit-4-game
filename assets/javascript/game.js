// GLOBAL VARIABLES
var crystal = {
    blue:
        {
            name: "Blue",
            value: 0
        },
    white:
        {
            name: "White",
            value: 0
        },
    purple:
        {
            name: "Purple",
            value: 0
        },
    green:
        {
            name: "Green",
            value: 0
        },
}

var yourScore = 0;
var targetScore = 0;

var wins = 0;
var loss = 0;

// Functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    yourScore = 0;

    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);

    $("#yourScore1").html(yourScore);
    $("#targetScore1").html(targetScore);
}

var addValues = function (crystal) {

    yourScore = yourScore + crystal.value;

    $("#yourScore1").html(yourScore);

    checkWin();
}

var checkWin = function () {
    if (yourScore > targetScore) {
        alert("Sorry you lost!");
        loss++;

        $("#losses1").html(loss);

        startGame();
    }

    else if (yourScore == targetScore) {
        alert("Congratulations, you won!");
        wins++;

        $("#wins1").html(wins);

        startGame();
    }
}

// Main
startGame()

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#white").click(function () {
    addValues(crystal.white);
});

$("#purple").click(function () {
    addValues(crystal.purple);
});

$("#green").click(function () {
    addValues(crystal.green);
});