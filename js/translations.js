const translations = {

    es: {

        "nav.experience": "Experiencia",
        "nav.services": "Servicios",
        "nav.packages": "Paquetes",
        "nav.benefits": "Promos",
        "nav.accommodation": "Alojamiento",
        "nav.about": "Nosotros",
        "nav.quote": "Cotizar viaje",


        "hero.eyebrow": "Turismo deportivo · Buenos Aires",

        "hero.title": `
            Viajá para<br>
            aprender.<br>
            Entrená para<br>
            <em>crecer.</em>
        `,

        "hero.description":
            "Viví el fútbol argentino desde adentro. Entrenamientos, clubes y experiencias únicas en Buenos Aires para crecer dentro y fuera de la cancha.",

        "hero.explore": "Explorar experiencias",

        "hero.contact": "Hablar con un asesor",


        "services.title": "Experiencia completa",

        "services.number": "01 / Qué hacemos",

        "services.description":
            "Todo lo necesario para vivir el fútbol argentino desde adentro. Organizamos cada detalle del viaje para que el equipo pueda enfocarse en entrenar, aprender y disfrutar Buenos Aires."

    },


    en: {

        "nav.experience": "Experience",
        "nav.services": "Services",
        "nav.packages": "Packages",
        "nav.benefits": "Benefits",
        "nav.accommodation": "Accommodation",
        "nav.about": "About us",
        "nav.quote": "Plan your trip",


        "hero.eyebrow": "Sports tourism · Buenos Aires",

        "hero.title": `
            Travel to<br>
            learn.<br>
            Train to<br>
            <em>grow.</em>
        `,

        "hero.description":
            "Experience Argentine football from the inside. Training sessions, clubs and unique experiences in Buenos Aires designed to help players grow on and off the pitch.",

        "hero.explore": "Explore experiences",

        "hero.contact": "Talk to an advisor",


        "services.title": "The complete experience",

        "services.number": "01 / What we do",

        "services.description":
            "Everything you need to experience Argentine football from the inside. We organize every detail so your team can focus on training, learning and enjoying Buenos Aires."

    }

};

function setLanguage(lang) {

    const selectedLanguage = translations[lang];

    if (!selectedLanguage) return;


    /* Cambiar idioma del HTML */

    document.documentElement.lang = lang;


    /* Textos normales */

    document
        .querySelectorAll('[data-i18n]')
        .forEach(element => {

            const key = element.dataset.i18n;

            if (!selectedLanguage[key]) return;

            element.textContent = selectedLanguage[key];

        });


    /* Textos que contienen HTML */

    document
        .querySelectorAll('[data-i18n-html]')
        .forEach(element => {

            const key = element.dataset.i18nHtml;

            if (!selectedLanguage[key]) return;

            element.innerHTML = selectedLanguage[key];

        });


    /* Placeholders */

    document
        .querySelectorAll('[data-i18n-placeholder]')
        .forEach(element => {

            const key = element.dataset.i18nPlaceholder;

            if (!selectedLanguage[key]) return;

            element.placeholder = selectedLanguage[key];

        });


    /* Botones activos */

    document
        .querySelectorAll('.lang-btn')
        .forEach(button => {

            button.classList.toggle(
                'active',
                button.dataset.lang === lang
            );

        });


    /* Guardar idioma */

    localStorage.setItem(
        'sportour-language',
        lang
    );

}


/* =========================================================
   SELECTOR
   ========================================================== */

document
    .querySelectorAll('.lang-btn')
    .forEach(button => {

        button.addEventListener('click', function () {

            setLanguage(
                this.dataset.lang
            );

        });

    });


/* =========================================================
   CARGAR IDIOMA GUARDADO
   ========================================================== */

const savedLanguage =
    localStorage.getItem('sportour-language') || 'es';


setLanguage(savedLanguage);