# Real-Time Polling App

A simple, interactive polling web application built with HTML, CSS, and JavaScript. This app allows users to vote for their favorite programming language and displays real-time results, including the number of votes and percentages for each option.

## Features

- **Dynamic Poll Options**: The app displays poll options dynamically from a predefined list.
- **Vote Submission**: Users can select an option and submit their vote.
- **Real-Time Results**: The app shows real-time vote counts and percentages for each option.
- **Recursion**: Recursively calculates the total number of votes.
- **Error Handling**: Proper error handling for invalid submissions (e.g., no option selected).
- **Responsive Design**: The app is styled to be responsive, working across different screen sizes.

---

## Tech Stack

- **HTML** for the structure of the app.
- **CSS** for styling and layout.
- **JavaScript** for handling the functionality, including:
  - **ES6 Array Functions**: `map()`, `forEach()`, `find()`, etc.
  - **Recursion** for calculating total votes.
  - **Lodash** (via CDN) for additional utility functions (though not specifically used in the current code, it can be added for further enhancements).

## Installation

Follow these steps to run the app locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/polling-app.git
```

### 2. Navigate to the Project Directory

```bash
cd polling-app
```

---

The JavaScript file contains the logic for handling the poll functionality:

- **Poll Data**: The `pollData` object holds the question and options, with each option including an ID, text, and vote count.
- **Rendering Poll Options**: The `renderPollOptions()` function dynamically generates the poll options using the data from `pollData`.
- **Vote Submission**: When the user submits a vote, the selected option is identified, and the vote count is updated.
- **Recursion**: The `calculateTotalVotes()` function is used to calculate the W

### Key Points in the Code

- **Dynamic Rendering**: The poll options are dynamically generated based on the data in `pollData`.
- **Recursion**: The total votes are calculated using recursion in the `calculateTotalVotes()` function.
- **Error Handling**: The app ensures that a user cannot submit a vote without selecting an option, throwing an error if no option is selected.

---

## License

This project is licensed under the MIT License.

---

This `README.md` file provides all the necessary details about setting up and using the polling app. It also explains the code structure and highlights the main features of the application.