// Add this script to your main.js or a script tag in your HTML
document.addEventListener("DOMContentLoaded", function() {
    var aiImage = document.getElementById("aiImage");
    var newImageDiv = document.getElementById("newImage");

    // Initially hide the new image
    newImageDiv.style.display = "none"; // Hide the new image

    // Add click events to both images
    aiImage.addEventListener("click", toggleImages);
    newImageDiv.addEventListener("click", toggleImages);

    function toggleImages() {
        // Toggle visibility of images
        if (aiImage.style.display !== "none") {
            aiImage.style.display = "none"; // Hide original image
            newImageDiv.style.display = "block"; // Show new image
        } else {
            aiImage.style.display = "block"; // Show original AI image
            newImageDiv.style.display = "none"; // Hide new image
        }
    }
});


document.getElementById("toggleButton").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px"; // Hide the sidebar
    } else {
      sidebar.style.left = "0px"; // Show the sidebar
    }
  });
 
 // Select the toggle button and contact details section
const toggleButton = document.getElementById('toggle-button');
const contactDetails = document.getElementById('contact-details');

// Add click event listener to toggle visibility
toggleButton.addEventListener('click', () => {
    const buttonRect = toggleButton.getBoundingClientRect(); // Get button's position
    if (!contactDetails.classList.contains('visible')) {
        // Show contact details below the button
        contactDetails.style.top = `${buttonRect.bottom}px`; // Position below button
        contactDetails.style.left = `${buttonRect.left + buttonRect.width / 2}px`; // Center horizontally
    } else {
        // Hide contact details
        contactDetails.style.top = `-100%`;
    }
    contactDetails.classList.toggle('visible'); // Toggle visibility class
});


  


