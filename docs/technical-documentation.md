# Technical Documentation

## 1. Project Overview

This project is an advanced portfolio web application created for Assignment 3. It is based on my previous portfolio from Assignment 2, but it was upgraded with more advanced features instead of being rebuilt from scratch.

This approach is important because it shows a realistic development process. In real projects, developers often improve an existing application rather than replace everything. For this reason, I kept the original portfolio identity, then extended it with more dynamic logic, better state management, API integration, and improved documentation.

The final website still looks like a personal portfolio, but technically it now behaves more like a small front-end web application.

## 2. Project Objectives

The main technical objectives of this project were:

- reuse the previous assignment structure where possible
- integrate at least one external API
- add more complex JavaScript logic
- manage user state consistently
- improve performance in practical ways
- keep the code simple, readable, and easy to explain
- document both the technical implementation and AI-assisted workflow clearly

## 3. File Structure

```text
project-root/
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

## 4. Description of Each Main File

### `index.html`

This file contains the structure of the website. It includes:

- header and navigation
- about section
- visitor personalization section
- featured projects section
- live GitHub repositories section
- achievements section
- contact section
- footer

It also connects the stylesheet and JavaScript file.

### `css/styles.css`

This file contains all visual styling for the portfolio. It includes:

- layout styling
- reusable cards and buttons
- responsive design rules
- light and dark theme styling
- form styling
- toolbar styling for filters and sorting
- animation styling for fade-in sections

### `js/script.js`

This file contains the full interactive logic of the project. It manages:

- project data rendering
- filtering and sorting
- GitHub API fetching
- contact form validation
- theme state
- visitor name state
- time-on-site counter
- conditional experience-level messaging
- scroll reveal behavior

### `docs/technical-documentation.md`

This file explains the implementation details of the website for technical review.

### `docs/ai-usage-report.md`

This file explains how AI tools were used during the assignment in a transparent and responsible way.

## 5. API Integration

### 5.1 API Choice

The external API used in this project is the GitHub REST API.

I chose this API because it fits the purpose of a portfolio website very well. A portfolio is meant to show a student's work, and GitHub repositories are a meaningful way to display real projects dynamically.

### 5.2 API Endpoint

```text
https://api.github.com/users/MohAlabdullatif/repos?sort=updated&per_page=6
```

### 5.3 Data Shown to the User

For each repository, the website displays:

- repository name
- repository description
- primary language
- last updated date
- visibility
- a direct repository link

### 5.4 How the API Logic Works

The API flow is intentionally simple and easy to follow:

1. The page loads.
2. The JavaScript function `loadGitHubRepositories()` runs.
3. A request is sent using `fetch()`.
4. The response status is checked.
5. If the request succeeds, repository data is converted into cards and displayed on the page.
6. If the request fails, the user sees a readable error message instead of a broken section.

### 5.5 Loading and Error States

To satisfy the assignment requirement properly, the GitHub section includes:

- a loading message before the API response arrives
- a success message after the repositories are loaded
- a friendly error message if the API request fails

This is important because real web applications should not assume that external services always work perfectly.

## 6. Complex Logic

This assignment requires more than basic click interactions, so several features were designed with multi-step logic.

### 6.1 Project Search, Filtering, and Sorting

The featured projects section is driven by JavaScript data instead of being hard-coded directly in the HTML.

Each project object includes:

- name
- description
- category
- updated date
- stack

The logic works as follows:

1. All projects are stored in the `portfolioProjects` array.
2. The user can type a search keyword.
3. The user can choose a category filter.
4. The user can choose a sort rule.
5. JavaScript applies all three conditions together.
6. Only the final matching list is rendered.

This demonstrates stronger logic because multiple user choices affect the same output at the same time.

### 6.2 Contact Form Validation

The contact form includes client-side validation rules.

The rules are:

- full name must not be empty
- email must not be empty
- email must follow a valid format
- message must not be empty
- message must contain at least 20 characters

The validation process works like this:

1. The user clicks the submit button.
2. JavaScript prevents the form from submitting immediately.
3. Each field is checked one by one.
4. Error messages are shown below the related field if needed.
5. If all fields are valid, a success message is displayed.

This is stronger than a basic form because it includes multiple conditions and user feedback states.

### 6.3 Time-on-Site Counter

The site includes a timer that starts when the page is opened. It updates every second and shows how long the visitor has been on the website.

This is a simple feature, but it still demonstrates continuous state updates and time-based logic.

### 6.4 Conditional Content Based on User Choice

The site includes an experience-level selector with three choices:

- beginner
- intermediate
- advanced

When the user changes the selection, the website updates a recommendation message. This shows conditional logic because different input values produce different outputs.

## 7. State Management

This project uses `localStorage` to store user preferences so the website can remember them after reloading.

### 7.1 Theme Preference

The light/dark mode system works like this:

1. When the page loads, JavaScript checks whether a theme is stored in `localStorage`.
2. If a saved theme exists, it is applied immediately.
3. When the user clicks the toggle button, the theme changes.
4. The new value is saved back to `localStorage`.

This makes the website feel more consistent and user-friendly.

### 7.2 Visitor Name Preference

The visitor name feature works like this:

1. The user enters a name in the personalization form.
2. When the form is submitted, the name is stored in `localStorage`.
3. The greeting and summary text update immediately.
4. If the page reloads, the name remains saved and is shown again.
5. The user can also clear the saved value.

This demonstrates a second state-management feature beyond theme toggling, which directly supports the assignment requirements.

## 8. Performance Improvements

This project includes practical performance improvements instead of unnecessary advanced optimization.

### 8.1 Deferred JavaScript Loading

The script file is loaded with `defer`, which allows the HTML to load first before the script runs. This helps the page load more smoothly.

### 8.2 Lazy Loading Images

Images that are not critical at the top of the page use `loading="lazy"`. This means the browser delays loading them until they are closer to the visible screen area.

### 8.3 Efficient DOM Rendering

Instead of updating each project card or repository card one by one many times, the script builds grouped HTML strings and renders them more efficiently.

### 8.4 Lightweight Technology Choice

The project uses:

- HTML
- CSS
- vanilla JavaScript

No framework or package system was added. This keeps the project lightweight and easier to understand.

### 8.5 CSS Cleanup and Reuse

The CSS was reorganized to reduce repetition through:

- reusable card styles
- reusable button styles
- CSS variables for colors and theme values
- grouped responsive rules

This makes the code more maintainable and helps avoid clutter.

## 9. Code Quality Decisions

A major goal of this project was to keep the code easy for a student to explain.

Important code quality decisions include:

- keeping HTML, CSS, and JavaScript in separate files
- using meaningful variable and function names
- using helper functions for repeated logic
- avoiding unnecessary libraries
- organizing the JavaScript into small functions with clear responsibilities
- keeping styling consistent across sections

The code avoids overly advanced patterns so it stays readable during explanation or demonstration.

## 10. User Experience and Interface Design

The website was improved with user experience in mind.

Important decisions include:

- clear section titles
- readable status messages
- visible feedback for both success and error situations
- simple navigation
- responsive layout for smaller screens
- a theme toggle for user comfort
- dynamic content that updates without needing a page reload

The design is still simple, but it is more useful and interactive than the previous version.

## 11. Accessibility and Usability Notes

Some basic accessibility-friendly choices were included:

- labels for form fields
- descriptive button text
- alt text for images
- semantic sectioning with headings
- readable status text for user feedback

More accessibility improvements could still be added later, but the current version already improves clarity and usability compared to the earlier assignment.

## 12. Browser Compatibility

The project is designed for modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

It also adapts to mobile and tablet layouts using responsive CSS rules.

The JavaScript features used in this project, such as `fetch`, `localStorage`, `IntersectionObserver`, and `Intl.DateTimeFormat`, are supported by modern browsers.

## 13. Testing and Review Notes

The project was reviewed by checking:

- whether the GitHub API section displays correctly
- whether error messages appear properly
- whether filtering and sorting update the projects list
- whether the theme is saved after reload
- whether the visitor name is saved after reload
- whether the contact form prevents invalid input
- whether the layout remains readable on smaller screens

Because this is a front-end assignment, the testing process focused on interactive behavior and visible browser results.

## 14. Future Improvements

If this portfolio is improved later, possible future upgrades include:

- adding more project entries
- adding project screenshots or preview images
- connecting the contact form to a real backend or email service
- adding more advanced accessibility improvements
- deploying the project publicly and linking the live version
- expanding the portfolio into multiple pages

## 15. Summary

This project successfully upgrades a previous portfolio into an advanced web application for Assignment 3. It includes live API data, multi-step logic, state persistence, practical optimization, and clear documentation while remaining simple enough for a student to understand and defend.

## 16. Rubric Alignment

### Functionality

The final website includes the complete feature set expected for Assignment 3. It supports GitHub API integration, project filtering and sorting, contact form validation, localStorage-based state management, dynamic user feedback, and additional logic features such as the timer and experience-level recommendation.

### Code Quality

The project keeps a simple and organized file structure. HTML, CSS, and JavaScript are separated clearly, naming is consistent, and the logic is divided into focused functions. This helps make the code easier to debug, maintain, and explain.

### Performance

Performance was improved using realistic front-end techniques. The script is deferred, images are lazily loaded where appropriate, CSS is more reusable, and repeated rendering work is simplified. These improvements help the page load and run more smoothly without over-engineering the solution.

### Compatibility

The layout was built to adapt to different screen sizes using responsive CSS. The chosen JavaScript features are supported by modern browsers, making the project suitable for common desktop and mobile usage.

### README Quality

The README provides a full overview of the project, including description, goals, features, structure, setup, API information, AI summary, and future improvements. It is written so that both instructors and beginner readers can follow it.

### Setup Instructions

The setup instructions are clear and simple because this is a front-end-only project. The site can be opened directly in a browser or through a local development server. No installation or build process is needed.

### Technical Details

This document gives detailed explanations of how the project works internally. It explains the file structure, feature logic, API flow, localStorage usage, optimization choices, testing review, and future improvements.

### User Experience

The project aims to make interaction clear and comfortable. Visitors get visible feedback, can switch theme preference, can personalize the page, and can interact with projects in more than one way. The design was kept clean so the website feels simple rather than confusing.

### Effective Use of AI

AI was used as a development assistant for planning, reviewing, debugging, and improving explanations. It was used to strengthen the project meaningfully rather than just generating large amounts of code without direction.

### AI Documentation

The project includes a dedicated AI usage report in `docs/ai-usage-report.md`. That file explains how AI tools were used, what benefits they provided, what limitations appeared, and how the final work was reviewed and modified.

### AI Understanding

The project was adapted carefully after AI-assisted suggestions. The final implementation stays aligned with the existing portfolio structure and uses logic simple enough to be defended in an academic setting.

### AI Innovation

AI was used not only to support coding but also to help transform an older portfolio into a stronger Assignment 3 submission. This shows a more thoughtful use of AI for improvement, planning, and refinement rather than simple code generation alone.
