document.addEventListener('DOMContentLoaded', () => {
    const fromDisplay = document.getElementById('fromDisplay');
    const toDisplay = document.getElementById('toDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    const resultsContainer = document.getElementById('resultsContainer');
    const changeSearchBtn = document.getElementById('changeSearchBtn');
    const languageSelector = document.getElementById('languageSelector');
    const currentYearSpan = document.getElementById('currentYear');

    // Populate current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set preferred language
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'sw';
    if (languageSelector) {
        languageSelector.value = preferredLanguage;
    }

    // Language translations
    const translations = {
        en: {
            changeSearch: "Change Search",
            selectSeat: "Select Seat",
            from: "From:",
            to: "To:",
            date: "Date:",
            via: "Via",
            noResults: "No buses found for this route on the selected date. Please try a different date or route.",
            price: "TZS",
        },
        sw: {
            changeSearch: "Badilisha Utafutaji",
            selectSeat: "Chagua Kiti",
            from: "Kutoka:",
            to: "Kwenda:",
            date: "Tarehe:",
            via: "Kupitia",
            noResults: "Hakuna mabasi yaliyopatikana kwa njia hii tarehe uliyochagua. Tafadhali jaribu tarehe au njia tofauti.",
            price: "TZS",
        }
    };

    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    const date = urlParams.get('date');

    // Format the date for display
    const formattedDate = date ? new Date(date).toLocaleDateString(preferredLanguage === 'sw' ? 'sw-TZ' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    // Display search parameters
    if (fromDisplay && from) {
        const formattedFrom = from.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        fromDisplay.textContent = `${translations[preferredLanguage].from} ${formattedFrom}`;
    }

    if (toDisplay && to) {
        const formattedTo = to.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        toDisplay.textContent = `${translations[preferredLanguage].to} ${formattedTo}`;
    }

    if (dateDisplay && date) {
        dateDisplay.textContent = `${translations[preferredLanguage].date} ${formattedDate}`;
    }

    // Sample bus routes data (in real application this would come from a server)
    const sampleRoutes = [
        {
            id: 1,
            from: 'dar-es-salaam',
            to: 'arusha',
            date: '2025-06-16',
            departureTime: '6:30 AM',
            arrivalTime: '5:30 PM',
            via: 'Bagamoyo Road',
            busType: 'DCV T324',
            price: 45000,
            seatsAvailable: 22
        },
        {
            id: 2,
            from: 'dar-es-salaam',
            to: 'arusha',
            date: '2025-06-16',
            departureTime: '8:30 AM',
            arrivalTime: '7:30 PM',
            via: 'Bagamoyo Road',
            busType: 'DCV T324',
            price: 54000,
            seatsAvailable: 18
        },
        {
            id: 3,
            from: 'dar-es-salaam',
            to: 'arusha',
            date: '2025-06-16',
            departureTime: '6:30 AM',
            arrivalTime: '5:30 PM',
            via: 'Chalinze Road',
            busType: 'DCV T324',
            price: 40000,
            seatsAvailable: 30
        },
        {
            id: 4,
            from: 'dar-es-salaam',
            to: 'moshi',
            date: '2025-06-16',
            departureTime: '7:00 AM',
            arrivalTime: '4:00 PM',
            via: 'Chalinze Road',
            busType: 'DCV T324',
            price: 35000,
            seatsAvailable: 15
        },
        {
            id: 5,
            from: 'arusha',
            to: 'dar-es-salaam',
            date: '2025-06-16',
            departureTime: '8:00 AM',
            arrivalTime: '7:00 PM',
            via: 'Chalinze Road',
            busType: 'DCV T324',
            price: 48000,
            seatsAvailable: 25
        },
        {
            id: 6,
            from: 'mbeya',
            to: 'dar-es-salaam',
            date: '2025-06-16',
            departureTime: '6:00 AM',
            arrivalTime: '8:00 PM',
            via: 'Morogoro Road',
            busType: 'DCV T324',
            price: 60000,
            seatsAvailable: 10
        }
    ];

    // Filter routes based on search parameters
    const filteredRoutes = sampleRoutes.filter(route =>
        route.from === from &&
        route.to === to &&
        route.date === date
    );

    // Display routes or no results message
    if (resultsContainer) {
        if (filteredRoutes.length > 0) {
            let routesHTML = '';

            filteredRoutes.forEach(route => {
                const fromFormatted = route.from.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                const toFormatted = route.to.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                routesHTML += `
                <div class="bus-card">
                    <div class="bus-icon">
                        <img src="images/bus-red.png" alt="JJI Express Bus" />
                    </div>
                    <div class="bus-info">
                        <div class="route-via">${translations[preferredLanguage].via} ${route.via}</div>
                        <div class="route-cities">
                            <div class="city">${fromFormatted.toUpperCase()}</div>
                            <div class="arrow">→</div>
                            <div class="city">${toFormatted.toUpperCase()}</div>
                        </div>
                        <div class="time">${route.departureTime} - ${route.arrivalTime}</div>
                    </div>
                    <div class="bus-details">
                        <div class="bus-type">${route.busType}</div>
                    </div>
                    <div class="price-section">
                        <div class="price">TZS ${route.price.toLocaleString()}</div>
                        <a href="#" class="select-seat-btn" data-route-id="${route.id}">
                            ${translations[preferredLanguage].selectSeat}
                        </a>
                    </div>
                </div>`;
            });

            resultsContainer.innerHTML = routesHTML;

            // Add event listeners to Select Seat buttons
            document.querySelectorAll('.select-seat-btn').forEach(btn => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const routeId = event.target.getAttribute('data-route-id');
                    alert(`Seat selection for route ${routeId} will be implemented in the next phase.`);
                });
            });
        } else {
            resultsContainer.innerHTML = `<div class="no-results">${translations[preferredLanguage].noResults}</div>`;
        }
    }

    // Handle change search button
    if (changeSearchBtn) {
        changeSearchBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Language switcher
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('preferredLanguage', lang);
            window.location.reload();
        });
    }
});
