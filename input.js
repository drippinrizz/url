/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */

/**
 * @fileoverview Shortens URLs
 *
 * @author Your Name
 *
 * @requires NPM:express
 */

/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */
/* eslint-enable no-redeclare */

// Add the following line at the end of the comment block:
// @ts-ignore

// Add an event listener to the form to listen for submit events
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const input = document.getElementById('input');
    const originalUrl = input.value;
    
    // Send a POST request to the server with the original URL
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ originalUrl })
    });
  
    // Parse the response as JSON
    const data = await response.json();
  
    // Log the response in the specified format
    console.log({
      id: data.id,
      created_at: data.created_at,
      url: data.originalUrl,
      urlShortner: data.shortenedUrl
    });
  });
