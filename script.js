function updateClocks() {

    document.getElementById("india").innerHTML =
        new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        });

    document.getElementById("uk").innerHTML =
        new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/London"
        });

    document.getElementById("usa").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York"
        });

    document.getElementById("australia").innerHTML =
        new Date().toLocaleTimeString("en-AU", {
            timeZone: "Australia/Sydney"
        });
}

updateClocks();
setInterval(updateClocks, 1000);
