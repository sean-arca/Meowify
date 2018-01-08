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

// Function to add a new button from input
function addGifBtn () {
    // On click when button pressed
    $("#addGif").on("click", function() {
        // Create a variable to grab the input value from the textbox
        var addCat = $("#catgif-input").val().trim();
        // If statement so no blank buttons
        if (addCat == "") {
            return false;
        };
        // Push the value to array and add cat to the end of it
        catWords.push(addCat + " " + "cat");
    
        showGifBtn();
        return false;

        $("#catgif-input").reset();
    });
};

// Display GIFs (thru GIPHY API)

// On click pause/unpause

showGifBtn();
addGifBtn();

});

