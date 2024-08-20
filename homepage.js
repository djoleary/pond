function initSearch() {
    const search = document.getElementById("search");
    search.focus();
    search.value = "";
}

function initKeymaps() {
    const search = document.getElementById("search");
    document.addEventListener(
        "keydown",
        (event) => {
            switch (event.key) {
                case "Enter":
                    if (search.value.substring(0, 5).includes(":")) {
                        const searchEngine = search.value.split(":")[0];

                        let searchValue = search.value.split(":")[1] ?? "";
                        searchValue = encodeURIComponent(searchValue.trim());

                        switch (searchEngine) {
                            case "cht":
                                window.location.href = `https://cht.sh/${searchValue}`;
                                break;

                            case "cm":
                                window.location.href = `https://www.cardmarket.com/en/Magic/Products/Singles?searchString=${searchValue}`;
                                break;

                            case "dict":
                                window.location.href = `https://www.dict.cc/?s=${searchValue}`;
                                break;

                            case "scry":
                                window.location.href = `https://scryfall.com/search?q=${searchValue}`;
                                break;

                            case "yt":
                                window.location.href = `https://www.youtube.com/results?search_query=${searchValue}`;
                                break;

                            default:
                                window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(search.value)}`;
                                break;
                        }
                    } else {
                        window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(search.value)}`;
                    }
                    break;

                case " ":
                case "Spacebar":
                    if (search !== document.activeElement) {
                        event.preventDefault();
                        search.focus();
                    }
                    break;
            }
        }
    );
}

function initFrog() {
    const resourcePath = "./resources";
    const frogImages = [
        "frog.png",
        "frog_cloud.png",
        "frog_music.png",
        "frog_pipe.png",
        "frog_think.png",
        "frog_unicorn.png",
    ];
    const randomImage = frogImages[Math.floor(Math.random() * frogImages.length)];
    document.getElementById("frog").src = `${resourcePath}/${randomImage}`;
}

function initClock() {
    const updateDateTime = () => {
        const datetime = new Date();

        const tens = Math.floor(datetime.getSeconds() * 0.1) * 10;
        const units = datetime.getSeconds() - tens;
        if (units <= 4) {
            datetime.setSeconds(tens);
        } else {
            datetime.setSeconds(tens + 5);
        }

        document.getElementById("datetime").innerText = datetime.toLocaleString("en-IE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
    };
    updateDateTime();
    setInterval(updateDateTime, 5 * 1000);
}

initSearch();
initKeymaps();
initFrog();
initClock();
