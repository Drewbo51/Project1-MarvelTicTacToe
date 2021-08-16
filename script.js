var booleanForWinLoss = false;
var apiKey = "6CLhov4T4L7uKTCXMMoSiz0FEzEaz1lf";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=happy&api_key=" + apiKey + "&limit=10";
    var queryURL2 = "https://api.giphy.com/v1/gifs/search?q=sad&api_key=" + apiKey + "&limit=10";


var player1 = "X";
var player2 = "O";
var grid1 = $("#grid1");
var grid2 = $("#grid2");
var grid3 = $("#grid3");
var grid4 = $("#grid4");
var grid5 = $("#grid5");
var grid6 = $("#grid6");
var grid7 = $("#grid7");
var grid8 = $("#grid8");
var grid9 = $("#grid9");
var computerPlace;
var computerChoices = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9];

$("#grid1").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid1) === -1) {
        return;
    }   
    $("#grid1").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid1, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid2").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid2) === -1) {
        return;
    }
    $("#grid2").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid2, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid3").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid3) === -1) {
        return;
    }
    $("#grid3").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid3, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid4").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid4) === -1) {
        return;
    }
    $("#grid4").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid4, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid5").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid5) === -1) {
        return;
    }
    $("#grid5").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid5, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid6").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid6) === -1) {
        return;
    }
    $("#grid6").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid6, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid7").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid7) === -1) {
        return;
    }
    $("#grid7").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid7, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid8").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid8) === -1) {
        return;
    }
    $("#grid8").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid8, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#grid9").on("click", function() {
    if (booleanForWinLoss) {
        return;
    }
    if (computerChoices.indexOf(grid9) === -1) {
        return;
    }
    $("#grid9").text(player2).attr("value", "O");
    checkForWin();
    computerChoices.splice($.inArray(grid9, computerChoices),1);
    computerPlace = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.splice($.inArray(computerPlace, computerChoices),1);
    computerPlace.text(player1).attr("value", "X");
    if (booleanForWinLoss) {
        return;
    }
    checkForLoss();
});

$("#restart").on("click", function() {
    $(".gridItem").empty();
    $(".meme").empty();
    booleanForWinLoss = false;
    computerChoices = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9];
    for (var i = 0; i < computerChoices.length; i++) {
        computerChoices[i].attr("value", "");
    }
});

function checkForWin() {
    var grid1value = grid1.attr("value");
    var grid2value = grid2.attr("value");
    var grid3value = grid3.attr("value");
    var grid4value = grid4.attr("value");
    var grid5value = grid5.attr("value");
    var grid6value = grid6.attr("value");
    var grid7value = grid7.attr("value");
    var grid8value = grid8.attr("value");
    var grid9value = grid9.attr("value");

        if (grid1value === "O" && grid2value === "O" && grid3value === "O" || grid4value === "O" && grid5value === "O" && grid6value === "O" || grid7value === "O" && grid8value === "O" && grid9value === "O" || grid3value === "O" && grid6value === "O" && grid9value === "O" || grid3value === "O" && grid5value === "O" && grid7value === "O" || grid1value === "O" && grid5value === "O" && grid9value === "O" || grid1value === "O" && grid4value === "O" && grid7value === "O" || grid2value === "O" && grid5value === "O" && grid8value === "O") {
 
            var winner = $("<p>").text("YOU WON");
            $(".meme").append(winner);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    var results = (response.data);    

    results = results[Math.floor(Math.random() * results.length)];

    var memeImage = $("<img>");
    
    memeImage.attr("src", results.images.fixed_height.url);

    $(".meme").append(memeImage);


   });

        booleanForWinLoss = true;
    }

}

function checkForLoss() {
    var grid1value = grid1.attr("value");
    var grid2value = grid2.attr("value");
    var grid3value = grid3.attr("value");
    var grid4value = grid4.attr("value");
    var grid5value = grid5.attr("value");
    var grid6value = grid6.attr("value");
    var grid7value = grid7.attr("value");
    var grid8value = grid8.attr("value");
    var grid9value = grid9.attr("value");

        if (grid1value === "X" && grid2value === "X" && grid3value === "X" || grid4value === "X" && grid5value === "X" && grid6value === "X" || grid7value === "X" && grid8value === "X" && grid9value === "X" || grid3value === "X" && grid6value === "X" && grid9value === "X" || grid3value === "X" && grid5value === "X" && grid7value === "X" || grid1value === "X" && grid5value === "X" && grid9value === "X" || grid1value === "X" && grid4value === "X" && grid7value === "X" || grid2value === "X" && grid5value === "X" && grid8value === "X") {
        
            var loser = $("<p>").text("YOU LOST");
            $(".meme").append(loser);

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {


    var results = (response.data);
    
    results = results[Math.floor(Math.random() * results.length)];

    var memeImage = $("<img>");
    
    memeImage.attr("src", results.images.fixed_height.url);

    $(".meme").append(memeImage);

   });

   booleanForWinLoss = true;

    }
}