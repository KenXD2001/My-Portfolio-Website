// Loader
// Function to hide the loader
function hideLoader() {
    document.getElementById("loader-wrapper").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
    }, 1000); // Hide the loader after 1 second
}

// Show the loader when the page loads
window.addEventListener("load", () => {
    hideLoader(); // Hide the loader when the page is fully loaded
});

// Show the loader when navigating to a new page
window.addEventListener("beforeunload", () => {
    document.getElementById("loader-wrapper").style.display = "flex";
});

// Dynamic Image Change
$(document).ready(function() {
    // Define an array of image URLs
    var imageUrls = [
        "materials/images/profile1.png",
        "materials/images/profile2.png",
    ];

    var currentIndex = 0;
    var dynamicImage = $("#dynamicImage");

    // Function to change the image source
    function changeImage() {
        dynamicImage.fadeOut("slow", function() {
            dynamicImage.attr("src", imageUrls[currentIndex]);
            dynamicImage.fadeIn("slow");
        });

        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    // Change the image every 5 seconds
    setInterval(changeImage, 4000);
});
