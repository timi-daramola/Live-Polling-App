// Polling App Code

const pollData = {
    question: "What is your favorite programming language?",
    options: [
        { id: 1, text: "JavaScript", votes: 0 },
        { id: 2, text: "Python", votes: 0 },
        { id: 3, text: "Java", votes: 0 },
        { id: 4, text: "C++", votes: 0 }
    ]
};

// Render poll options dynamically
function renderPollOptions() {
    const pollOptionsContainer = document.getElementById('poll-options');
    pollOptionsContainer.innerHTML = ''; // Clear previous options

    pollData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="poll-option" id="option-${option.id}" value="${option.id}">
            <label for="option-${option.id}">${option.text}</label>
        `;
        pollOptionsContainer.appendChild(optionElement);
    });
}

// Handle vote submission with error handling
document.getElementById('submit-vote').addEventListener('click', () => {
    try {
        const selectedOptionId = getSelectedOption();
        if (!selectedOptionId) throw new Error("Please select an option!");

        updateVoteCount(selectedOptionId);
        renderPollResults();
    } catch (error) {
        alert(error.message);
    }
});

// Get the selected option (throws exception if none selected)
function getSelectedOption() {
    const selectedOption = document.querySelector('input[name="poll-option"]:checked');
    return selectedOption ? parseInt(selectedOption.value) : null;
}

// Update vote count for the selected option
function updateVoteCount(optionId) {
    const option = pollData.options.find(opt => opt.id === optionId);
    if (option) option.votes++;
}

// Recursively calculate the total votes
function calculateTotalVotes(options, index = 0) {
    if (index === options.length) return 0;
    return options[index].votes + calculateTotalVotes(options, index + 1);
}

// Render the poll results
function renderPollResults() {
    const resultsContainer = document.getElementById('results');
    const totalVotes = calculateTotalVotes(pollData.options);

    if (totalVotes === 0) {
        resultsContainer.innerHTML = "No votes yet.";
    } else {
        const resultHTML = pollData.options.map(option => {
            const percentage = ((option.votes / totalVotes) * 100).toFixed(2);
            return `<p>${option.text}: ${option.votes} votes (${percentage}%)</p>`;
        }).join('');
        resultsContainer.innerHTML = resultHTML;
    }
}

// Initialize the poll
function initPoll() {
    renderPollOptions();
    renderPollResults();
}

initPoll();
