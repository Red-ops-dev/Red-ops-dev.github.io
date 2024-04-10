const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

function getQuote() {
    console.log('Button clicked'); // Test the button click

    // Fetch the quote directly within this function
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Output the quote to the console
        displayQuote(data);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        alert('Failed to fetch quote. Please try again.');
      });
}

function displayQuote(quoteData) {
    const quoteTextElement = document.getElementById('js-quote-text');
    quoteTextElement.textContent = quoteData.question; // Assuming the quote is in the 'question' field
}

document.addEventListener('DOMContentLoaded', getQuote);
