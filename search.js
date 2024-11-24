// Function to Open Search Popup
function openSearchPopup() {
    const popup = document.getElementById('searchPopup');
    popup.style.display = 'flex'; // Show the popup
}

// Function to Close Search Popup
function closeSearchPopup() {
    const popup = document.getElementById('searchPopup');
    popup.style.display = 'none'; // Hide the popup
}

// Dummy Search Function
function searchTravel() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;

    if (fromLocation && toLocation) {
        alert(`Searching for routes from ${fromLocation} to ${toLocation}...`);
    } else {
        alert('Please fill out both locations.');
    }
}
