# Assignment 3 - Advanced Portfolio Web Application

## Project Description

This project is my Assignment 3 submission for SWE363. It is an upgraded version of my previous portfolio website from the earlier assignment.

Instead of deleting the old project and building a completely different website, I reused the original portfolio structure and improved it step by step. This made the project more realistic, because it shows how an existing website can be extended with more advanced functionality instead of always starting from zero.

The final result is a portfolio web application that includes:

- external API integration
- more advanced JavaScript logic
- state management using `localStorage`
- practical front-end performance improvements
- stronger documentation
- clear evidence of responsible AI use

## Project Goals

The main goal of this assignment was to turn a basic interactive portfolio into a more advanced and feature-rich web application while still keeping the code simple enough for a student to understand and explain.

I focused on the following:

- keeping the website responsive and easy to use
- improving the logic in a meaningful way
- making the portfolio dynamic with real external data
- writing code that is clean and organized
- documenting both the technical work and the AI-assisted workflow clearly

## Main Features

### 1. GitHub API Integration

The portfolio now connects to the GitHub API and dynamically loads public repositories from my GitHub profile.

Displayed information includes:

- repository name
- description
- main programming language
- last updated date
- repository visibility
- direct link to open the repository

This makes the portfolio feel more current because the content can reflect my GitHub activity instead of showing only static text.

### 2. Advanced Project Logic

The featured projects section is no longer a static list. It now supports:

- search by text
- category filtering
- sorting by multiple rules

Available filters:

- All
- JavaScript
- HTML-CSS
- Other

Available sorting options:

- Recently Updated
- Oldest Updated
- Name A-Z

This means a visitor can search for a project, choose a category, and sort the results at the same time.

### 3. Contact Form Validation

The contact form now performs stronger validation before accepting input.

It checks that:

- the name field is not empty
- the email field is not empty
- the email format looks valid
- the message field is not empty
- the message contains at least 20 characters

Validation messages are shown clearly so the user understands what needs to be fixed.

### 4. State Management

The website stores small user preferences using `localStorage`.

Saved features:

- light/dark theme preference
- visitor name preference

When the page reloads, the saved values are restored automatically. This helps demonstrate that the application can remember user state between sessions.

### 5. Extra Interactive Features

To show more advanced logic, I also added:

- a time-on-site counter
- conditional recommendation text based on the visitor's selected experience level

These features are simple, but they show that the site can react to user input and update content dynamically.

### 6. Performance Improvements

The site includes practical front-end optimizations:

- JavaScript is loaded with `defer`
- non-critical images use lazy loading
- repeated DOM rendering is grouped efficiently
- CSS was reorganized to reduce repetition
- the project remains lightweight because it uses plain HTML, CSS, and JavaScript only

## Why This Project Matches Assignment 3

This submission addresses the assignment requirements in the following way:

- API Integration: GitHub API is used to fetch live repository data
- Complex Logic: project search, filter, sort, contact validation, timer, and conditional content
- State Management: theme and visitor name are saved using `localStorage`
- Performance: `defer`, lazy loading, reusable CSS, and simpler DOM updates
- Code Quality: organized files, readable naming, and straightforward logic
- Documentation: includes a detailed README, technical documentation, and AI usage report
- AI Use: clearly documented in `docs/ai-usage-report.md`

## Rubric Alignment

### Functionality

This website includes all major Assignment 3 features. It integrates the GitHub API, supports project searching, filtering, and sorting, validates the contact form, stores user preferences, and includes extra interactive logic such as the time-on-site counter and conditional visitor recommendations.

### Code Quality

The code is organized into separate HTML, CSS, and JavaScript files. Variable names are descriptive, the logic is split into smaller functions, and the styling is grouped into reusable sections. The goal was to make the project easy to read and easy to explain during evaluation.

### Performance

The project uses practical performance improvements that fit a student assignment. These include loading JavaScript with `defer`, lazy loading non-critical images, simplifying DOM rendering, and keeping the project lightweight by using only vanilla HTML, CSS, and JavaScript.

### Compatibility

The layout is responsive and designed to work on desktop, tablet, and mobile screens. The project uses modern browser features that are supported in current versions of Chrome, Edge, and Firefox.

### README Quality

This README explains the project purpose, goals, features, setup steps, technology choices, API usage, AI support, and future improvements. It is written to be detailed enough for grading while still staying understandable for a beginner reader.

### Setup Instructions

The setup process is intentionally simple. The project can be opened directly in a browser or run using a local development server such as Live Server. No package installation, backend, or extra dependencies are required.

### Technical Details

Detailed implementation information is available in `docs/technical-documentation.md`. That file explains the project structure, API flow, state management, validation logic, performance decisions, browser compatibility, and future improvements.

### User Experience

The site focuses on clarity and usability. Visitors receive feedback messages, can personalize the site, can control which projects they want to see, and can use the theme toggle for a more comfortable viewing experience. The design remains simple, clean, and portfolio-appropriate.

### Effective Use of AI

AI was used meaningfully to review the previous project, plan the upgrade, improve logic, support debugging, and strengthen documentation. The use of AI helped improve the final quality of the submission without replacing my own understanding of the work.

### AI Documentation

AI usage is documented clearly in `docs/ai-usage-report.md`. The report explains which tools were used, what they were used for, what benefits and challenges appeared, and how the suggestions were reviewed and adapted.

### AI Understanding

The final code and documentation were reviewed and modified so they match the project structure and assignment requirements. I kept the implementation simple enough that I can explain the features, logic, and decisions clearly if asked.

### AI Innovation

AI was used not only for code suggestions but also for planning the upgrade path from Assignment 2 to Assignment 3. This helped turn an older portfolio into a stronger, more dynamic submission instead of replacing it with a completely unrelated project.

## Project Structure

```text
202346910-MohammedAlabdullatif-assignment3/
|-- README.md
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- script.js
|-- assets/
|   |-- Me.jpg
|   |-- phys.jpg
|   |-- edad.jpg
|   |-- CalcAward.jpg
|-- docs/
|   |-- ai-usage-report.md
|   |-- technical-documentation.md
|-- .gitignore
```

## Setup Instructions

This project is intentionally simple to run.

### Option 1: Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

### Option 2: Use a Local Development Server

1. Open the project in Visual Studio Code.
2. Use an extension such as Live Server.
3. Run the website in the browser through the local server.

## Git Commands

Clone the repository:

```bash
git clone https://github.com/MohAlabdullatif/202346910-MohammedAlabdullatif-assignment3.git
```

Move into the project folder:

```bash
cd 202346910-MohammedAlabdullatif-assignment3
```

## Technologies Used

- HTML5 for structure and semantic content
- CSS3 for layout, responsiveness, theming, and styling
- Vanilla JavaScript for logic, interactivity, API integration, and validation
- GitHub REST API for dynamic repository data
- `localStorage` for saving user preferences

## API Used

The application uses the following GitHub endpoint:

```text
https://api.github.com/users/MohAlabdullatif/repos?sort=updated&per_page=6
```

### What Happens When the API Loads

1. The page shows a loading message.
2. JavaScript sends a request to the GitHub API.
3. The response is checked.
4. If successful, repository cards are created and displayed.
5. If the request fails, a friendly error message is shown instead.

This flow was added to show both successful data fetching and proper error handling.

## User Experience Notes

The website was designed to stay simple and clear:

- the navigation is easy to follow
- the layout adapts to smaller screens
- status messages explain what is happening
- the project section gives visitors control over what they want to view
- the theme toggle allows a more comfortable viewing experience

## Documentation Included

This project includes two additional documentation files:

- `docs/technical-documentation.md`
  - explains the structure, logic, API use, state management, and performance improvements

- `docs/ai-usage-report.md`
  - explains which AI tools were used, what benefits they provided, what challenges appeared, and how I reviewed and modified the output responsibly

## AI Use Summary

AI tools were used as support tools during development, not as a replacement for my own work.

They helped with:

- planning the upgrade from Assignment 2 to Assignment 3
- reviewing missing rubric requirements
- improving validation and logic structure
- refining documentation

All AI-generated suggestions were reviewed, edited, and adapted to match the project and my own understanding.

## Browser Compatibility

The project is designed to work in modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

The layout is also responsive for mobile and tablet screen sizes.

## Possible Future Improvements

If I continue improving this portfolio later, possible next steps include:

- connecting the contact form to a real backend or email service
- adding more projects with screenshots
- improving accessibility even further
- publishing the site online and adding a live link
- adding project details pages in the future

## Optional Deployment Link

If deployed later, the live project link can be added here.

## Author

Mohammed Alabdullatif
