const translations = {

    english: {

        languageTitle: "Choose your language",

        description:
            "Daveen's Goldsmith is a place where we can create, buy and sell any kind of gold you want.",

        call: "Call Us",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        snapchat: "Snapchat",
        location: "Our Location"

    },


    arabic: {

        languageTitle: "اختر لغتك",

        description:
            "صياغة داڤين لبيع وشراء صياغة وتصليح مصوغات الذهبية",

        call: "اتصل بنا",
        whatsapp: "واتساب",
        instagram: "إنستغرام",
        snapchat: "سناب شات",
        location: "موقعنا"

    },
 

    kurdish: {

        languageTitle: "زمانێ خو بهەلبژێرە",

        description:
            "زێرنگریا داڤین بو کرین، فروتن، گهورین و چێکرنا هەر جورەکێ زێری",

        call: "تەلەفونێ بکە",
        whatsapp: "واتساب",
        instagram: "ئێنستگرام",
        snapchat: "سناب",
        location: "جهێ مە"

    }

};


function selectLanguage(language) {

    const selectedLanguage = translations[language];


    document.getElementById("language-title").textContent =
        selectedLanguage.languageTitle;


    document.getElementById("description").textContent =
        selectedLanguage.description;


    document.getElementById("call-text").textContent =
        selectedLanguage.call;


    document.getElementById("whatsapp-text").textContent =
        selectedLanguage.whatsapp;


    document.getElementById("instagram-text").textContent =
        selectedLanguage.instagram;


    document.getElementById("snapchat-text").textContent =
        selectedLanguage.snapchat;


    document.getElementById("location-text").textContent =
        selectedLanguage.location;


    // Keep the whole page LTR so the fixed background/jewelry never shifts.
    // Only the language text itself changes direction.
    document.documentElement.dir = "ltr";

    const rtlText = [
        "language-title",
        "description",
        "call-text",
        "whatsapp-text",
        "instagram-text",
        "snapchat-text",
        "location-text"
    ];

    rtlText.forEach(id => {
        document.getElementById(id).style.direction =
            language === "english" ? "ltr" : "rtl";
    });

    if (language === "english") {
        document.documentElement.lang = "en";
    } else if (language === "arabic") {
        document.documentElement.lang = "ar";
    } else if (language === "kurdish") {
        document.documentElement.lang = "ku";
    }

}