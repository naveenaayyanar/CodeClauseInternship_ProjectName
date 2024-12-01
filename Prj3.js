const destinations = [
    {
        name: "Paris, France",
        image: "https://via.placeholder.com/300x200",
        description: "The city of light awaits with its romantic charm and iconic landmarks.",
        activities: "Eiffel Tower, Louvre Museum, Seine River Cruise"
    },
    {
        name: "Tokyo, Japan",
        image: "https://via.placeholder.com/300x200",
        description: "Experience a blend of traditional culture and cutting-edge technology.",
        activities: "Shibuya Crossing, Sensoji Temple, Mount Fuji"
    },
    {
        name: "New York, USA",
        image: "https://via.placeholder.com/300x200",
        description: "Explore the city that never sleeps with endless attractions.",
        activities: "Times Square, Statue of Liberty, Central Park"
    }
];

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const destinationsContainer = document.getElementById("destinations");

function loadDestinations(filter = "") {
    destinationsContainer.innerHTML = "";

    const filteredDestinations = destinations.filter(dest => 
        dest.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredDestinations.length === 0) {
        destinationsContainer.innerHTML = "<p>No destinations found.</p>";
        return;
    }

    filteredDestinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <h2>${dest.name}</h2>
            <p>${dest.description}</p>
            <p><strong>Activities:</strong> ${dest.activities}</p>
            <button onclick="bookDestination('${dest.name}')">Book Now</button>
        `;

        destinationsContainer.appendChild(card);
    });
}

function bookDestination(name) {
    alert(`You have booked a trip to ${name}!`);
}

searchBtn.addEventListener("click", () => {
    const filter = searchInput.value.trim();
    loadDestinations(filter);
});

// Load initial destinations
loadDestinations();
