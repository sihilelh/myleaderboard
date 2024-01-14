# MyLeaderboard App

MyLeaderboard is a simple and publicly accessible leaderboard application that fetches data from a Google Sheet. It allows users to create and share leaderboards with teams and their respective points.

## Features

- **Real-Time Data Refresh:** Utilizes JavaScript's `setInterval` function to periodically refresh data from a publicly shared Google Sheet.

- **Automatic Sorting:** Scores are automatically sorted and displayed on the frontend after each refresh.

- **Styling with Tailwind CSS:** Styling is implemented using Tailwind CSS for a clean and responsive user interface.

- **No User Authentication:** The app does not require user authentication since it relies on a publicly shared Google Sheet. This makes it easy to share and view leaderboards.

- **Metadata Sheet:** Uses a metadata sheet in the Google Sheet document to convey information to the frontend, including leaderboard name, subtext, and image.

## Getting Started

1. **Share a Publicly Accessible Google Sheet:**
   - To get started, you need to share a Google Sheet with public access. Follow these steps:
     - Open your Google Sheet document.
     - Click on the "Share" button located in the top right corner.
     - Set the general access to "Anyone with this link" and choose "Viewer" to allow public viewing.
     - Copy the link to the Google Sheet.

2. **Copy Google Sheet Format:**
   - Copy the Google Sheet format from [this link](https://docs.google.com/spreadsheets/d/1bsCWUE1Lyxywvb0rHA4YIHkXaShGn8v5dHbAYW_mIxQ/edit).

3. **Open the App:**
   - Open the MyLeaderboard app by visiting [leaderboard.sihilel.com](https://leaderboard.sihilel.com), paste the Google Sheet link on the home page, and press the open button.

## Google Sheet Structure

The Google Sheet should contain two sheets:

1. **Board:** Where you update team names and points.
2. **Metadata:** Used to provide frontend information like the leaderboard name, subtext, and image.

## Contributing

The source code for MyLeaderboard is publicly available on [GitHub](https://github.com/sihilelh/myleaderboard). Feel free to contribute, create your own version, or suggest improvements. 

If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/sihilelh/myleaderboard).

## License

This project is licensed under the [ISC License](LICENSE).

---

**Note:** For the most up-to-date information and detailed instructions, please refer to the [GitHub repository](https://github.com/sihilelh/myleaderboard).
