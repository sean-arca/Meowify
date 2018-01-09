$(document).ready(function() {
    
// -- Global Variables --
var catWords = ["funny cat", "taco cat", "nyan cat", "cute cat", "party cat", "grumpy cat", "fat cat", "sad cat", "angry cat", "lazy cat"];

// -- Functions --
// Function to display Buttons for GIFs
function showGifBtn () {

    // Empty the gif button div first
    $("#gifButtons-div").empty();

    // For loop thru array to create new buttons
    for (var i = 0; i < catWords.length; i++) {
        var gifBtn = $("<button class='catWord btn btn-primary'>");
        gifBtn.attr("data-name", catWords[i]);
        gifBtn.text(catWords[i]);
        $("#gifButtons-div").append(gifBtn);
    };
};

// Call function to display buttons
showGifBtn();

// -- On Click Events --
// On click to add new button
$("#addGif").on("click", function() {

    // Create a variable to grab the input value from the textbox
    var addCat = $("#catgif-input").val().trim();

    // If statement so no blank buttons
    if (addCat == "") {
        return false;
    };

    // For loop so no duplicate buttons
    for (var i = 0; i < catWords.length; i++) {
        if (addCat + " cat"  == catWords[i]) {
            return false;
        };
    };

    // Push the value to array and add cat to the end of it
    catWords.push(addCat + " " + "cat");

    // Update new array
    showGifBtn();
    return false;
});

// On click to display GIFs (thru GIPHY API)
$(".catWord").on("click", function() {

    // Create variable to get data-name on button clicked
    var cat = $(this).attr("data-name");
    console.log(cat);

    // GIPHY Query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cat + "&api_key=dc6zaTOxFJmzC&limit=25";
    console.log(queryURL);
    
    // AJAX GET Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // Request Response
    .done(function(response) {

        // Log Response
        console.log(response);

        // Empty GIF div first after each click
        $("#gifs-div").empty();

        // Store array of results in results variable
        var results = response.data;

        // Loop thru every result item
        for (var i = 0; i < results.length; i++) {

            // Only show GIF with appropriate rating (if)
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                // Create variable to give each div a class = gif
                var gifDiv = $("<div class='giphy'>"); 

                // Create variable to give each result's rating
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);

                // Create variable to pull the img
                var gifImage = $("<img>");

                // Still img
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifImage.attr("data-still",results[i].images.fixed_height_still.url);

                // Animate img
                gifImage.attr("data-animate",results[i].images.fixed_height.url);

                // Set state of img
                gifImage.attr("data-state", "still");

                // Add image class and append gifImage
                gifImage.addClass("image");
                gifDiv.append(p);
                gifDiv.append(gifImage);

                // Append the gifs into gifs-div
                $("#gifs-div").append(gifDiv);
            };
        };
    });
});

// On click pause/unpause
// Change data state from still-animate
$(document).on("click", ".image", function() {
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

});

