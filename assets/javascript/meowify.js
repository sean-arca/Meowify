$(document).ready(function() {
// -- Global Variables --
var catWords = ["funny cat", "taco cat", "nyan cat", "cute cat", "party cat", "grumpy cat", "fat cat", "sad cat", "angry cat", "business cat"];

// -- Functions --
// Function to display Buttons for GIFs
function showGifBtn () {
    // Empty the gif button div first
    $("#gifButtons-div").empty();
    // For loop thru array to create new buttons
    for (var i = 0; i < catWords.length; i++) {
        var gifBtn = $("<button>");
        gifBtn.addClass("catWord");
        gifBtn.addClass("btn btn-primary");
        gifBtn.attr("data-name", catWords[i]);
        gifBtn.text(catWords[i]);
        $("#gifButtons-div").append(gifBtn);
    };
};

// Add new Button on input

// Display GIFs (thru GIPHY API)

// On click pause/unpause

showGifBtn();

});

