const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultsContainer = document.getElementById("results");

const GITHUB_API_URL = "https://api.github.com";

async function searchGitHub(query) {
    try {
        const response = await fetch(`${GITHUB_API_URL}/search/repositories?q=${query}`);
        const data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        resultsContainer.innerHTML = "<p>Failed to fetch results. Please try again later.</p>";
    }
}

function displayResults(repositories) {
    resultsContainer.innerHTML = ""; // Clear previous results
    if (repositories.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    repositories.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p><strong>Owner:</strong> ${repo.owner.login}</p>
            <p><strong>Description:</strong> ${repo.description || "No description provided."}</p>
            <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
        `;

        resultsContainer.appendChild(card);
    });
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        searchGitHub(query);
    } else {
        resultsContainer.innerHTML = "<p>Please enter a search query.</p>";
    }
});
