// Part A: Browser Info
// Displaying information about the browser using the navigator object
document.getElementById('browser').textContent = navigator.userAgent; // Displays the user agent (browser name & version)
document.getElementById('platform').textContent = navigator.platform; // Displays the platform (OS) information
document.getElementById('java').textContent = navigator.javaEnabled() ? 'Yes' : 'No'; // Checks if Java is enabled in the browser
document.getElementById('resolution').textContent = `${screen.width} x ${screen.height}`; // Displays screen resolution (width x height)
document.getElementById('availScreen').textContent = `${screen.availWidth} x ${screen.availHeight}`; // Displays available screen size
document.getElementById('colorDepth').textContent = screen.colorDepth; // Displays color depth of the screen

// Part B: Page Info
// Displaying current page details using location and document objects
document.getElementById('url').textContent = location.href; // Displays the current URL of the page
document.getElementById('hostname').textContent = location.hostname; // Displays the current hostname (domain)
document.getElementById('pageTitle').textContent = document.title; // Displays the current page title

// Function to change the page title dynamically
function changeTitle() {
  // Prompting user to enter a new page title
  const newTitle = prompt("Enter a new title for this page:");
  if (newTitle) {
    // If user enters a title, update the document title and the displayed title on the page
    document.title = newTitle;
    document.getElementById('pageTitle').textContent = newTitle;
  }
}

// Redirecting to another URL (W3Schools in this case)
function redirect() {
  location.href = 'https://www.w3schools.com/'; // Navigates to W3Schools
}

// Part D: Dynamic Background based on screen width
// Function to update the background color of the page based on the screen width
function updateBackgroundColor() {
  const width = window.innerWidth; // Get the current window width

  // Changing background color based on the window width
  if (width < 600) {
    document.body.style.backgroundColor = 'lightblue'; // For mobile devices (less than 600px width)
  } else if (width >= 600 && width < 992) {
    document.body.style.backgroundColor = 'lightgreen'; // For tablet devices (600px to 991px width)
  } else {
    document.body.style.backgroundColor = 'orange'; // For desktop devices (992px and above width)
  }
}

// Adding event listeners to update the background color when the page loads or the window is resized
window.addEventListener('load', updateBackgroundColor); // On page load
window.addEventListener('resize', updateBackgroundColor); // On window resize
