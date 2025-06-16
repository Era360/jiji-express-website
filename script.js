document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const fromLocationSelect = document.getElementById('fromLocation');
    const toLocationSelect = document.getElementById('toLocation');
    const departureDateInput = document.getElementById('departureDate');
    const languageSelector = document.getElementById('languageSelector');
    const currentYearSpan = document.getElementById('currentYear');

    // Populate current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Language Switching Functionality ---
    const translations = {
        en: {
            // Nav
            home: "Home",
            aboutUs: "About Us",
            routes: "Routes",
            services: "Our Services",
            contactUs: "Contact Us",
            // Hero
            heroHeading: "Reliable and comfortable journeys across the country",
            heroSubheading: "Book your ticket now and enjoy a safe and comfortable journey to your destination.",
            fromLabel: "From",
            toLabel: "To",
            dateLabel: "Select Date",
            searchButton: "Search Safari",
            // Amenities
            amenitiesHeading: "Onboard Amenities",
            luxurySeats: "Luxury Seats",
            luxurySeatsDesc: "Travel comfortably with spacious and exceptionally comfortable seats.",
            ac: "Air Conditioner (AC)",
            acDesc: "Enjoy your journey with an air conditioning system that provides fresh and cool air throughout the trip.",
            chargingStation: "Charging Station",
            chargingStationDesc: "Don't worry about your phone dying; you can charge your electronic devices.",
            restroom: "Restroom",
            restroomDesc: "We value your privacy by providing a clean and safe restroom.",
            // About Section
            aboutJJIHeading: "Our Journeys | About JJI Express",
            aboutJJIDesc: "Since 2005, JJI Express has been a leader in bus transport in Tanzania. We are known for quality and reliability, traveling throughout the country with over 100 buses, committed to providing the best service to our passengers.",
            playVideo: "Play Video",
            // Routes Section
            routesHeadingLarge: "Routes",
            routesSubheading: "We reach wherever you are",
            // Services Section
            ourServicesHeadingLarge: "Our Services",
            cargoDelivery: "Cargo Delivery Services",
            cargoDeliveryDesc: "Make cargo shipping easy with our new delivery service! Our experienced drivers and quality vehicles ensure your cargo is handled carefully and arrives safely and on time.",
            charter: "Charter",
            charterDesc: "Need a bus for a special event or group trip? Our intercity bus company offers bus rental services for all your travel needs.",
            cargoService: "Cargo Services", // This seems like a duplicate or needs clarification from original text
            cargoServiceDesc: "Travel with ease and leave the hard work to us! Our cargo transport service ensures your goods are moved safely and efficiently.",
            // Contact Section
            contactUsHeadingLarge: "Contact Us",
            address: "Address:",
            contact: "Contact us:",
            contactEmailDesc: "Email us for general queries, including Design and partnership opportunities.",
            // Footer
            footerText: "JJ Express, Tanzania. All rights reserved.",
            // Booking form placeholders
            selectOrigin: "Select origin",
            selectDestination: "Select destination",
        },
        sw: {
            // Nav
            home: "Nyumbani",
            aboutUs: "Kuhusu Sisi",
            routes: "Njia",
            services: "Huduma Zetu",
            contactUs: "Wasiliana Nasi",
            // Hero
            heroHeading: "Safari za uhakika na starehe kote nchini",
            heroSubheading: "Weka tiketi yako sasa na ufurahie safari salama na yenye starehe kuelekea unakoenda.",
            fromLabel: "Kutoka",
            toLabel: "Kwenda",
            dateLabel: "Chagua Tarehe",
            searchButton: "Tafuta Safari",
            // Amenities
            amenitiesHeading: "Huduma Ndani ya Basi",
            luxurySeats: "Viti vya Kifahari",
            luxurySeatsDesc: "Safiri kwa starehe ukitumia viti vyenye nafasi ya kutosha na faraja isiyo na kifani.",
            ac: "Kipoza Hewa (AC)",
            acDesc: "Furahia safari yako na mfumo wa kiyoyozi unaokupa hewa safi na baridi safari nzima.",
            chargingStation: "Kituo cha Kuchaji",
            chargingStationDesc: "Usiwe na wasiwasi simu yako ikizima njiani, utachaji vifaa vyako vya kielektroniki.",
            restroom: "Kujisitiri",
            restroomDesc: "Tunathamini faragha yako kwa kukupa nafasi ya kujisitiri kwa kutumia choo safi na salama.",
            // About Section
            aboutJJIHeading: "Safari Zetu | Kuhusu JJI Express",
            aboutJJIDesc: "Tangu 2005, Jiji Express ni vinara wa usafiri wa mabasi Tanzania. Tunasifika kwa ubora na uhakika, tukisafiri kote nchini kwa mabasi yetu zaidi ya 100, na tumejitolea kutoa huduma bora kwa abiria wetu.",
            playVideo: "Cheza Video",
            // Routes Section
            routesHeadingLarge: "Njia",
            routesSubheading: "Popote ulipo tunafika",
            // Services Section
            ourServicesHeadingLarge: "Huduma Zetu",
            cargoDelivery: "Huduma Za Utoaji Mizigo",
            cargoDeliveryDesc: "Fanya usafirishaji wa mizigo kuwa rahisi kwa kutumia huduma yetu mpya ya utoaji! Madereva wetu wenye uzoefu na magari bora huhakikisha mizigo yako inashughulikiwa kwa uangalifu na kufika salama na kwa wakati.",
            charter: "Tenda",
            charterDesc: "Unahitaji basi kwa tukio maalum au safari ya kundi? Kampuni yetu ya mabasi ya miji hutoa huduma ya kukodisha basi kwa mahitaji yako yote ya usafiri.",
            cargoService: "Huduma Za Mizigo",
            cargoServiceDesc: "Safiri kwa urahisi na acha kazi ngumu kwetu! Huduma yetu ya usafirishaji wa mizigo huhakikisha mali zako zinahamishwa kwa usalama na kwa ufanisi.",
            // Contact Section
            contactUsHeadingLarge: "Wasiliana Nasi",
            address: "Address:",
            contact: "Contact us:",
            contactEmailDesc: "Email us for general queries, including Design and partnership opportunities.",
            // Footer
            footerText: "JJ Express, Tanzania. Haki zote zimehifadhiwa.",
            // Booking form placeholders
            selectOrigin: "Chagua mahali pa kuanzia",
            selectDestination: "Chagua unakoenda",
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const t = translations[lang];

        // Navigation
        document.querySelector('nav ul li a[href="#home"]').textContent = t.home;
        document.querySelector('nav ul li a[href="#about"]').textContent = t.aboutUs;
        document.querySelector('nav ul li a[href="#routes"]').textContent = t.routes;
        document.querySelector('nav ul li a[href="#services"]').textContent = t.services;
        document.querySelector('nav ul li a[href="#contact"]').textContent = t.contactUs;

        // Hero Section
        document.getElementById('heroHeading').textContent = t.heroHeading;
        document.querySelector('.hero-content p').textContent = t.heroSubheading; document.querySelector('.btn-search').innerHTML = `${t.searchButton} <span aria-hidden="true">🔍</span>`;

        // Update placeholders for select elements
        if (fromLocationSelect && fromLocationSelect.options.length > 0) {
            fromLocationSelect.options[0].textContent = t.fromLabel;
        }
        if (toLocationSelect && toLocationSelect.options.length > 0) {
            toLocationSelect.options[0].textContent = t.toLabel;
        }
        if (departureDateInput) {
            departureDateInput.setAttribute('placeholder', t.dateLabel);
        }


        // Amenities Section
        document.getElementById('amenitiesHeading').textContent = t.amenitiesHeading;
        const amenityCards = document.querySelectorAll('#amenities .card');
        if (amenityCards.length >= 4) {
            amenityCards[0].querySelector('h3').textContent = t.luxurySeats;
            amenityCards[0].querySelector('p').textContent = t.luxurySeatsDesc;
            amenityCards[1].querySelector('h3').textContent = t.ac;
            amenityCards[1].querySelector('p').textContent = t.acDesc;
            amenityCards[2].querySelector('h3').textContent = t.chargingStation;
            amenityCards[2].querySelector('p').textContent = t.chargingStationDesc;
            amenityCards[3].querySelector('h3').textContent = t.restroom;
            amenityCards[3].querySelector('p').textContent = t.restroomDesc;
        }

        // About Us Section
        document.getElementById('aboutUsHeading').textContent = t.aboutJJIHeading;
        document.querySelector('#about > p').textContent = t.aboutJJIDesc;
        document.querySelector('.play-button').setAttribute('aria-label', t.playVideo);

        // Routes Section
        document.getElementById('routesHeading').textContent = t.routesHeadingLarge;
        document.querySelector('#routes > p').textContent = t.routesSubheading;

        // Services Section
        document.getElementById('ourServicesHeading').textContent = t.ourServicesHeadingLarge;
        const serviceCards = document.querySelectorAll('#services .card');
        if (serviceCards.length >= 3) {
            serviceCards[0].querySelector('h3').textContent = t.cargoDelivery;
            serviceCards[0].querySelector('p').textContent = t.cargoDeliveryDesc;
            serviceCards[1].querySelector('h3').textContent = t.charter;
            serviceCards[1].querySelector('p').textContent = t.charterDesc;
            serviceCards[2].querySelector('h3').textContent = t.cargoService;
            serviceCards[2].querySelector('p').textContent = t.cargoServiceDesc;
        }

        // Contact Section
        document.getElementById('contactUsHeading').textContent = t.contactUsHeadingLarge;
        const contactDivs = document.querySelectorAll('#contact .contact-info > div');
        if (contactDivs.length >= 2) {
            contactDivs[0].querySelector('h3').textContent = t.address;
            contactDivs[1].querySelector('h3').textContent = t.contact;
            contactDivs[1].querySelector('p').textContent = t.contactEmailDesc;
        }

        // Footer
        document.querySelector('footer p').innerHTML = `&copy; <span id="currentYear">${new Date().getFullYear()}</span> ${t.footerText}`;

        // Store preference
        localStorage.setItem('preferredLanguage', lang);
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Load preferred language or default to Swahili
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'sw';
    if (languageSelector) {
        languageSelector.value = preferredLanguage;
    }
    setLanguage(preferredLanguage);

    // --- Booking Form Functionality ---
    const locations = [
        "Arusha", "Bukoba", "Dar es Salaam", "Dodoma", "Iringa",
        "Kahama", "Kigoma", "Lindi", "Mara", "Mbeya",
        "Moshi", "Morogoro", "Mpanda", "Mtwara", "Mwanza",
        "Njombe", "Shinyanga", "Singida", "Songea", "Sumbawanga",
        "Tabora", "Tanga"
    ]; // Add more locations as needed

    function populateSelect(selectElement, options, defaultOptionText) {
        if (!selectElement) return;
        // Keep the disabled default option
        const firstOption = selectElement.options[0];
        selectElement.innerHTML = ''; // Clear existing options except the first one
        selectElement.appendChild(firstOption);

        options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase().replace(/\s+/g, '-');
            option.textContent = optionText;
            selectElement.appendChild(option);
        });
    }

    populateSelect(fromLocationSelect, locations, translations[preferredLanguage].selectOrigin);
    populateSelect(toLocationSelect, locations, translations[preferredLanguage].selectDestination);

    // Set min date for departure date input to today and set default value to today
    if (departureDateInput) {
        const today = new Date().toISOString().split('T')[0];
        departureDateInput.setAttribute('min', today);
        departureDateInput.value = today; // Set default value to today
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission for now

            const from = fromLocationSelect.value;
            const to = toLocationSelect.value;
            const date = departureDateInput.value;

            if (from && to && date) {
                if (from === to) {
                    alert(preferredLanguage === 'sw' ? 'Mahali pa kuanzia na unakoenda hauwezi kuwa sawa.' : 'Origin and destination cannot be the same.');
                    return;
                }

                // Redirect to the routes.html page with search parameters
                window.location.href = `routes.html?from=${from}&to=${to}&date=${date}`;
            } else {
                alert(preferredLanguage === 'sw' ? 'Tafadhali jaza sehemu zote.' : 'Please fill in all fields.');
            }
        });
    }

    // Placeholder for play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert(preferredLanguage === 'sw' ? 'Uchezaji wa video haujawekwa bado.' : 'Video playback not implemented yet.');
        });
    }

    // --- Mobile Navigation Functionality ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#primary-navigation');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const visibility = primaryNav.getAttribute('data-visible');

            if (visibility === 'false') {
                primaryNav.setAttribute('data-visible', 'true');
                navToggle.setAttribute('aria-expanded', 'true');
            } else {
                primaryNav.setAttribute('data-visible', 'false');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('#primary-navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            primaryNav.setAttribute('data-visible', 'false');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (primaryNav.getAttribute('data-visible') === 'true' &&
            !primaryNav.contains(e.target) &&
            e.target !== navToggle &&
            !navToggle.contains(e.target)) {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
