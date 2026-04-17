const portfolioProjects = [
    {
        name: "Assignment 2 Interactive Portfolio",
        description: "Upgraded the original portfolio with theme persistence, live search, and form feedback to improve interactivity.",
        category: "javascript",
        updated: "2026-04-10",
        stack: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Text Sentiment Analysis",
        description: "Built a machine learning workflow that cleaned Twitter data, created text vectors, and compared multiple classifiers.",
        category: "other",
        updated: "2026-03-14",
        stack: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
        name: "Flight Itinerary and Airfare Analysis",
        description: "Analyzed a large airfare dataset to study pricing behavior, route characteristics, durations, and airline patterns.",
        category: "other",
        updated: "2026-02-22",
        stack: ["Python", "Pandas", "Visualization"]
    },
    {
        name: "Responsive Personal Portfolio",
        description: "Designed a responsive multi-section portfolio using semantic HTML and organized CSS for a clear personal brand.",
        category: "html-css",
        updated: "2026-01-30",
        stack: ["HTML", "CSS", "Responsive Design"]
    }
];

const state = {
    theme: localStorage.getItem("theme") || "light",
    visitorName: localStorage.getItem("visitorName") || "",
    filter: "all",
    sort: "updated-desc",
    search: ""
};

const elements = {
    body: document.body,
    themeToggle: document.getElementById("themeToggle"),
    greeting: document.getElementById("greeting"),
    savedNameDisplay: document.getElementById("savedNameDisplay"),
    visitorForm: document.getElementById("visitorForm"),
    visitorName: document.getElementById("visitorName"),
    clearVisitorName: document.getElementById("clearVisitorName"),
    visitorMessage: document.getElementById("visitorMessage"),
    timeOnSite: document.getElementById("timeOnSite"),
    experienceLevel: document.getElementById("experienceLevel"),
    experienceMessage: document.getElementById("experienceMessage"),
    experienceResult: document.getElementById("experienceResult"),
    projectSearch: document.getElementById("projectSearch"),
    projectFilter: document.getElementById("projectFilter"),
    projectSort: document.getElementById("projectSort"),
    projectsList: document.getElementById("projectsList"),
    projectFeedback: document.getElementById("projectFeedback"),
    githubStatus: document.getElementById("githubStatus"),
    githubRepoList: document.getElementById("githubRepoList"),
    contactForm: document.getElementById("contactForm"),
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    nameError: document.getElementById("nameError"),
    emailError: document.getElementById("emailError"),
    messageError: document.getElementById("messageError"),
    formMessage: document.getElementById("formMessage"),
    fadeSections: document.querySelectorAll(".fade-in-section")
};

function setStatusMessage(element, message, type) {
    element.textContent = message;
    element.className = `statusMessage ${type}`;
}

function formatDate(dateValue) {
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(new Date(dateValue));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatCategory(category) {
    const labels = {
        javascript: "JavaScript",
        "html-css": "HTML-CSS",
        other: "Other"
    };

    return labels[category] || category;
}

function applyTheme() {
    const isDark = state.theme === "dark";
    elements.body.classList.toggle("dark-mode", isDark);
    elements.themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function updateGreeting() {
    const currentHour = new Date().getHours();
    let greetingText = "Good Evening!";

    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    }

    const namePart = state.visitorName ? `, ${state.visitorName}` : "";
    elements.greeting.textContent = `${greetingText}${namePart}`;
}

function updateSavedNameDisplay() {
    elements.savedNameDisplay.textContent = state.visitorName || "No saved name yet";
    elements.visitorName.value = state.visitorName;
}

function updateExperienceContent(level) {
    const messages = {
        beginner: {
            summary: "Start with the responsive portfolio project",
            detail: "A beginner visitor should start with the HTML/CSS portfolio because it is easier to follow and explains layout decisions clearly."
        },
        intermediate: {
            summary: "Explore the Assignment 2 interactive portfolio",
            detail: "An intermediate visitor should review the JavaScript portfolio upgrade because it combines user interaction, validation, and localStorage."
        },
        advanced: {
            summary: "Check the data and machine learning projects",
            detail: "An advanced visitor may be more interested in the analysis and machine learning projects because they involve larger datasets and more technical workflows."
        }
    };

    const selectedMessage = messages[level];

    if (!selectedMessage) {
        elements.experienceResult.textContent = "Select your level below";
        setStatusMessage(elements.experienceMessage, "Select a level to see which projects fit you best.", "infoMessage");
        return;
    }

    elements.experienceResult.textContent = selectedMessage.summary;
    setStatusMessage(elements.experienceMessage, selectedMessage.detail, "successMessage");
}

function getVisibleProjects() {
    return portfolioProjects
        .filter((project) => {
            const matchesSearch = `${project.name} ${project.description} ${project.stack.join(" ")}`
                .toLowerCase()
                .includes(state.search.toLowerCase());
            const matchesFilter = state.filter === "all" || project.category === state.filter;
            return matchesSearch && matchesFilter;
        })
        .sort((first, second) => {
            if (state.sort === "name-asc") {
                return first.name.localeCompare(second.name);
            }

            const firstDate = new Date(first.updated);
            const secondDate = new Date(second.updated);

            if (state.sort === "updated-asc") {
                return firstDate - secondDate;
            }

            return secondDate - firstDate;
        });
}

function renderProjects() {
    const visibleProjects = getVisibleProjects();

    if (!visibleProjects.length) {
        elements.projectsList.innerHTML = "";
        setStatusMessage(elements.projectFeedback, "No featured projects match the current search and filter settings.", "errorMessage");
        return;
    }

    const projectCardsMarkup = visibleProjects.map((project) => `
        <article class="card">
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="projectMeta">
                <span class="metaPill">${formatCategory(project.category)}</span>
                <span class="metaPill">Updated ${formatDate(project.updated)}</span>
            </div>
            <p><strong>Stack:</strong> ${escapeHtml(project.stack.join(", "))}</p>
        </article>
    `).join("");

    elements.projectsList.innerHTML = projectCardsMarkup;

    if (state.search || state.filter !== "all") {
        setStatusMessage(
            elements.projectFeedback,
            `Showing ${visibleProjects.length} project(s) after applying the current search, filter, and sort settings.`,
            "successMessage"
        );
    } else {
        setStatusMessage(elements.projectFeedback, "Showing all featured projects.", "infoMessage");
    }
}

async function loadGitHubRepositories() {
    const apiUrl = "https://api.github.com/users/MohAlabdullatif/repos?sort=updated&per_page=6";

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }

        const repositories = await response.json();

        if (!Array.isArray(repositories) || repositories.length === 0) {
            elements.githubRepoList.innerHTML = "";
            setStatusMessage(elements.githubStatus, "No public repositories were found for this GitHub account.", "errorMessage");
            return;
        }

        const repoMarkup = repositories.map((repo) => `
            <article class="card">
                <h3>${escapeHtml(repo.name)}</h3>
                <p>${escapeHtml(repo.description || "No description was provided for this repository.")}</p>
                <div class="repoMeta">
                    <span class="metaPill">${escapeHtml(repo.language || "Not specified")}</span>
                    <span class="metaPill">Updated ${formatDate(repo.updated_at)}</span>
                    <span class="metaPill">${escapeHtml(repo.visibility)}</span>
                </div>
                <div class="repoActions">
                    <a class="repoLink" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">View Repository</a>
                </div>
            </article>
        `).join("");

        elements.githubRepoList.innerHTML = repoMarkup;
        setStatusMessage(elements.githubStatus, "Repositories loaded successfully from the GitHub API.", "successMessage");
    } catch (error) {
        elements.githubRepoList.innerHTML = "";
        setStatusMessage(
            elements.githubStatus,
            "GitHub repositories could not be loaded right now. Please try again later or visit the GitHub profile directly.",
            "errorMessage"
        );
        console.error("GitHub API error:", error);
    }
}

function startTimeOnSiteCounter() {
    const startTime = Date.now();

    setInterval(() => {
        const elapsedMilliseconds = Date.now() - startTime;
        const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        elements.timeOnSite.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function validateContactForm() {
    const name = elements.fullName.value.trim();
    const email = elements.email.value.trim();
    const message = elements.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    elements.nameError.textContent = "";
    elements.emailError.textContent = "";
    elements.messageError.textContent = "";

    if (!name) {
        elements.nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (!email) {
        elements.emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        elements.emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!message) {
        elements.messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 20) {
        elements.messageError.textContent = "Message must be at least 20 characters long.";
        isValid = false;
    }

    if (!isValid) {
        setStatusMessage(elements.formMessage, "Please correct the form errors before submitting.", "errorMessage");
        return false;
    }

    setStatusMessage(
        elements.formMessage,
        `Thank you, ${name}. Your message passed validation and is ready to be sent.`,
        "successMessage"
    );
    return true;
}

function setupScrollAnimations() {
    if (!("IntersectionObserver" in window)) {
        elements.fadeSections.forEach((section) => section.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.fadeSections.forEach((section) => observer.observe(section));
}

function attachEventListeners() {
    elements.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", state.theme);
        applyTheme();
    });

    elements.visitorForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newName = elements.visitorName.value.trim();

        if (!newName) {
            setStatusMessage(elements.visitorMessage, "Please enter a name before saving.", "errorMessage");
            return;
        }

        state.visitorName = newName;
        localStorage.setItem("visitorName", state.visitorName);
        updateSavedNameDisplay();
        updateGreeting();
        setStatusMessage(elements.visitorMessage, `Welcome, ${state.visitorName}. Your preference was saved locally.`, "successMessage");
    });

    elements.clearVisitorName.addEventListener("click", () => {
        state.visitorName = "";
        localStorage.removeItem("visitorName");
        updateSavedNameDisplay();
        updateGreeting();
        setStatusMessage(elements.visitorMessage, "Saved visitor name cleared from localStorage.", "infoMessage");
    });

    elements.experienceLevel.addEventListener("change", (event) => {
        updateExperienceContent(event.target.value);
    });

    elements.projectSearch.addEventListener("input", (event) => {
        state.search = event.target.value.trim();
        renderProjects();
    });

    elements.projectFilter.addEventListener("change", (event) => {
        state.filter = event.target.value;
        renderProjects();
    });

    elements.projectSort.addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderProjects();
    });

    elements.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (validateContactForm()) {
            elements.contactForm.reset();
        }
    });
}

function initializePage() {
    applyTheme();
    updateGreeting();
    updateSavedNameDisplay();
    updateExperienceContent("");
    renderProjects();
    startTimeOnSiteCounter();
    setupScrollAnimations();
    attachEventListeners();
    loadGitHubRepositories();
}

initializePage();
