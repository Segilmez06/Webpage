window.baseStyle = "border-radius: 6px; padding: 2px 5px; color: white;";
window.logger = {
    log: (text) => {
        console.log(`%c${text}`, `${baseStyle} background-color: #444;`);
    },
    info: (text) => {
        console.log(`%c[🛈] ${text}`, `${baseStyle} background-color: #0074D4;`);
    },
    ok: (text) => {
        console.log(`%c[✓] ${text}`, `${baseStyle} background-color: #008902;`);
    },
    error: (text) => {
        console.log(`%c[✕] ${text}`, `${baseStyle} background-color: #890007;`);
    }
};


const GalaxyWatches = [
    "SM-R860", // 4
    "SM-R870", // 4
    "SM-R880", // 4 Classic
    "SM-R890", // 4 Classic
    "SM-R900", // 5
    "SM-R910", // 5
    "SM-R920", // 5 Pro
    "SM-R930", // 6
    "SM-R940", // 6
    "SM-R950", // 6 Classic
    "SM-L300", // 7
    "SM-L310", // 7
    "SM-L705F" // Ultra
];

let clientType = "desktop";
if (window.location.href.includes("#")) {
    clientType = window.location.href.split("#")[1];
    window.history.pushState({}, document.title, "/");
}
else if (GalaxyWatches.some(model => navigator.userAgent.includes(model))) {
    clientType = "watch";
}
else if ('ontouchstart' in document.documentElement) {
    clientType = "mobile";
}

let cPreload = document.createElement("script");
cPreload.onload = () => {logger.ok(`[DYNALOAD] Preload @ ${clientType} done!`)};
cPreload.onerror = (err) => {logger.error(`Error while loading ${clientType} preload script!`)};
cPreload.src = `/clients/${clientType}/preload.js`;
cPreload.async = true;
document.head.appendChild(cPreload);

let cStyle = document.createElement("link");
cStyle.onload = () => {logger.ok(`[DYNALOAD] Stylesheet @ ${clientType} done!`)};
cStyle.onerror = (err) => {logger.error(`Error while loading ${clientType} stylesheet!`)};
cStyle.rel = "stylesheet";
cStyle.href = `/clients/${clientType}/style.css`;
document.head.appendChild(cStyle);

fetch(`/clients/${clientType}/page.html`)
    .then(response => response.text())
    .then(rawHTML => {
        const cDocument = (new DOMParser()).parseFromString(rawHTML, "text/html");
        const cMain = cDocument.querySelector("main");
        document.body.appendChild(cMain);
        logger.ok(`[DYNALOAD] Page @ ${clientType} done!`);

        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(resolve);
            });
        });
    })
    .then(() => {
        const cScript = document.createElement("script");
        cScript.onload = () => {logger.ok(`[DYNALOAD] Script @ ${clientType} done!`)};
        cScript.onerror = (err) => {logger.error(`Error while loading ${clientType} script!`)};
        cScript.src = `/clients/${clientType}/main.js`;
        document.body.appendChild(cScript);
    })
    .catch(err => {
        logger.error(`Error while loading ${clientType} page!`);
    });