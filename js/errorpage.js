window.onload = onLoad;

// Rename tab on hide
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = "A deadly page error occured!";
    } else {
        document.title = "Page not found! - Sarp Eren EGILMEZ";
    }
});

// Sometimes, a break is not that bad...
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Onload handler, basically
async function onLoad() {
    var msg = `
     ___   ___  ____  ____  _
    / _ \\ / _ \\|  _ \\/ ___|| |
   | | | | | | | |_) \\___ \\| |
   | |_| | |_| |  __/ ___) |_|
    \\___/ \\___/|_|   |____/(_)
    `;
    console.log(msg);
    var i = ["I lost my glasses.", "Where to find this page?", "Ghost isn't scary but 404 is!", "Say hi dude, that's server's attitude."];
    var r = Math.floor(Math.random()*i.length);
    console.log(i[r]);
}