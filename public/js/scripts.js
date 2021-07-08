const handleActivitySearch = async event => {
    event.preventDefault();
    const location = document.querySelector("#location").value.trim();
    const weather = document.querySelector("input[name = weather]:checked").value;
    // TODO: HUNGER/THIRSTY/NEITHER
    // TODO: ACTIVE OR NAH
    if (location && weather) {
        const response = await fetch("/api/activity/search?" + new URLSearchParams({
            location, weather
        }), {
            method: "GET",

        });

    if (response.ok) {
        const data = await response.json();
        console.log("this is the data response", data);
    }
    }
    console.log('handling activity search');
}

document.querySelector("#activitysearch").addEventListener("submit", handleActivitySearch);