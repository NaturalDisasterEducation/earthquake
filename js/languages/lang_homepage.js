// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/

i18next
    .use(i18nextXHRBackend)
    .init({
        lng: "English", // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        // backend: {     // load from i18next-gitbook repo     loadPath:
        // '../../locales/earthquakePage/en.json',     crossDomain: true }
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
            English: {
                translation: {
                    earthquakeButton: "Earthquake",
                    title: "In case of Emergency",
                    content: "Know how to react in case of a natural disaster. <strong>Keep calm</strong> and " +
                            "get ready before hand with this educational website.",
                    latestEarthquake: "Latest earthquakes",
                    emailPlaceholder: "Email",
                    emailSubscribe: "Subscribe",
                    language: {
                        "English": "English",
                        "Persian": "Persian"
                    }
                }
            },
            Persian: {
                translation: {
                    earthquakeButton: "ss",
                    title: "In case of Emergency",
                    content: "Know how to react in case of a natural disaster. <strong>Keep calm</strong> and " +
                            "get ready before hand with this educational website.",
                    latestEarthquake: "Latest earthquakes",
                    emailPlaceholder: "Email",
                    emailSubscribe: "Subscribe",
                    language: {
                        "English": "English",
                        "Persian": "Persian"
                    }
                }
            }
        }
    }, (err, t) => {
        jqueryI18next.init(i18next, $);
        var pathname = window.location.pathname;
        switch (pathname) {
            case "/":
                updateContent()
                break;
            case "/main":
                console.log("main");
                break;
        }
    });

function updateContent() {
    $('#NaturalDisasterHomepage').localize();
}

$("#selectLanguage")
    .on("change", function (e) {
        i18next.changeLanguage(e.val);
    })

i18next.on('languageChanged', () => {
    updateContent();
});
