const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', getQuote);

const searchBtn = document.querySelector('#js-tweet');
searchBtn.addEventListener('click', searchQuotes);

const controlsSection = document.querySelector('.controls');

const quoteTextElement = document.querySelector ("#js-answer-text");
const searchInput = document.createElement('input');
searchInput.id = 'search-input';
searchInput.placeholder = 'Enter a term to search';
quoteTextElement.after(searchInput);

controlsSection.appendChild(searchInput);

const endpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

async function getQuote() {

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }


        const json = await response.json();
        console.log(json[0]);
        displayQuote(json[0]);
        
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector
    ('#js-quote-text');
    quoteText.textContent = quote; 
}


async function searchQuotes() {
    const term = searchInput.value.trim();
    if (term) {
        try {
            const response = await fetch(`${endpoint}/search/${term}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const quotes = await response.json();
            if (quotes.length > 0) {
                displayQuote(quotes.join('\n'));
            } else {
                displayQuote('Ron Swanson has never said that word.');
            }
        } catch (err) {
            console.error(err);
            alert('Failed to search quotes');
        }
    } else {
        alert('Please enter a search term');
    }
}

getQuote();

