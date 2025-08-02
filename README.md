# GitHub Profile Finder

## Overview
GitHub Profile Finder is a simple and interactive web application that allows users to search for any GitHub username and view their public profile information, including their avatar, followers, and more. The app provides a smooth user experience with a loading animation and a visually appealing profile card.

## Features
- **Search GitHub Users:** Enter any GitHub username to fetch and display their public profile data.
- **Loading Animation:** Shows a spinner while fetching data from the GitHub API for better UX.
- **Profile Card:** Displays the user's avatar and can be extended to show more details (followers, name, bio, etc.).
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Modern UI:** Uses Bootstrap and custom CSS for a clean, modern look.

## How It Works
1. Enter a GitHub username in the input field and click the "Check Now" button.
2. The app shows a loading spinner while fetching data from the GitHub API.
3. After fetching, the app displays the number of followers (and can be extended to show more info).
4. Clicking or navigating to the profile card page (profilecard.html?username=USERNAME) shows the user's avatar and can be extended to show more details.

## Technologies Used
- **HTML5 & CSS3:** For structure and styling.
- **Bootstrap 5:** For responsive and modern UI components.
- **JavaScript (ES6):** For DOM manipulation and API requests.
- **GitHub REST API:** To fetch user profile data.

## Setup & Usage
1. **Clone or Download the Repository:**
   ```
   git clone https://github.com/yourusername/github-profile-finder.git
   ```
2. **Open `index.html` in your browser.**
3. **Search for any GitHub username.**
4. **To view the profile card, open `profilecard.html?username=USERNAME` in your browser.**

## File Structure
- `index.html` - Main search page.
- `profilecard.html` - Profile card page showing the user's avatar.
- `script.js` - Handles fetching data and UI logic.
- `style.css`, `profilecard.css`, `mobile.css` - Stylesheets for layout and responsiveness.

## Customization
- You can extend the profile card to show more user details (name, bio, repositories, etc.) by updating the JavaScript and HTML.
- The loading animation can be customized using Bootstrap or your own CSS spinner.

## License
This project is open source and available under the [MIT License](LICENSE).

## Credits
- [GitHub REST API](https://docs.github.com/en/rest)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)

---
Feel free to contribute or suggest improvements! 