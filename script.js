function updateClocks() {

    const clocks = [
        { id: "india", zone: "Asia/Kolkata", locale: "en-IN" },
        { id: "uk", zone: "Europe/London", locale: "en-GB" },
        { id: "usa", zone: "America/New_York", locale: "en-US" },
        { id: "canada", zone: "America/Toronto", locale: "en-CA" },
        { id: "france", zone: "Europe/Paris", locale: "fr-FR" },
        { id: "germany", zone: "Europe/Berlin", locale: "de-DE" },
        { id: "italy", zone: "Europe/Rome", locale: "it-IT" },
        { id: "spain", zone: "Europe/Madrid", locale: "es-ES" },
        { id: "russia", zone: "Europe/Moscow", locale: "ru-RU" },
        { id: "china", zone: "Asia/Shanghai", locale: "zh-CN" },
        { id: "japan", zone: "Asia/Tokyo", locale: "ja-JP" },
        { id: "korea", zone: "Asia/Seoul", locale: "ko-KR" },
        { id: "australia", zone: "Australia/Sydney", locale: "en-AU" },
        { id: "brazil", zone: "America/Sao_Paulo", locale: "pt-BR" },
        { id: "greenland", zone: "America/Nuuk", locale: "en-GL" }
    ];

    clocks.forEach(clock => {
        const time = new Date().toLocaleTimeString(clock.locale, {
            timeZone: clock.zone,
            hour12: false
        });

        document.getElementById(clock.id).textContent = time;
    });
}

updateClocks();
setInterval(updateClocks, 1000);
