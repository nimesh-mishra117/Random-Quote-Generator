// List of quotes
const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, so do not waste it living someone else  life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs"
];

// Function to generate random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    return quotes[randomIndex];
}

// Event listener to generate new quote
document.getElementById('new-quote').addEventListener('click', function () {
    document.getElementById('quote').innerText = getRandomQuote();
});

// Function to copy the quote to clipboard
document.getElementById('copy-quote').addEventListener('click', function () {
    const quoteText = document.getElementById('quote').innerText;

    // Copy the quote text to the clipboard
    navigator.clipboard.writeText(quoteText)
});

// .then(function () {
//     // Show feedback that the quote was copied
//     const feedback = document.getElementById('copy-feedback');
//     feedback.classList.remove('hidden');

//     // Hide feedback after 2 seconds
//     setTimeout(() => {
//         feedback.classList.add('hidden');
//     }, 2000);
// }).catch(function (err) {
//     console.error('Failed to copy text: ', err);
// });