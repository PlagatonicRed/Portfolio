// Fetch the menuBar.html and insert it into the page
fetch('menuBar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar-container').innerHTML = html;

        // Now, safely query for the menu and navbar elements
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');

        console.log(menuLinks);

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });

    })
    .catch(error => {
        console.error('Error loading menuBar.html:', error);
    });



// Select all buttons and their respective text containers
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    // Find the corresponding text container and button text for each button
    const textContainer = button.parentElement.parentElement.querySelector('.large-text-container');
    const btnText = button.querySelector('.read-more');
    
    // Function to get and update content height
    function updateContentHeight() {
        return textContainer.scrollHeight; // Dynamically get the scrollHeight
    }

    let contentHeight = updateContentHeight(); // Initialize contentHeight

    // Add click event listener to each button
    button.addEventListener('click', function() {
        if (textContainer.classList.toggle('active')) {
            contentHeight = updateContentHeight(); // Update content height before using
            textContainer.style.maxHeight = `${contentHeight}px`; // Expand to content height
            btnText.innerHTML = "Read Less"; // Change the button text to "Read Less"
        } else {
            btnText.innerHTML = "Read More"; // Change the button text to "Read More"
            textContainer.style.maxHeight = `${0}px`; // Collapse to 0
        }
    });

    // Update contentHeight on window resize
    window.addEventListener('resize', () => {
        contentHeight = updateContentHeight(); // Update the content height dynamically
        if (textContainer.classList.contains('active')) {
            textContainer.style.maxHeight = `${contentHeight}px`; // Adjust height if expanded
        }
    });
});
