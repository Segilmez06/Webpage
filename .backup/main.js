let GalaxyWatches = [
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

for (let i = 0; i < GalaxyWatches.length; i++) {
    if (navigator.userAgent.toUpperCase().includes(GalaxyWatches[i])) {
        window.location.href = "/GalaxyWatch";
        break;
    }
}

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded(){
    

    document.querySelectorAll(".links-box > a:not([href])").forEach((e) => {
        e.addEventListener("click", () => { alert("Sorry, this page is not available!\nBut stay tuned, work in progress..."); });
    });

    window.addEventListener('focus', () => {
        document.title = "..:: Sarp Eren EGILMEZ ::..";
    });

    window.addEventListener('blur', () => {
        document.title = "Hey, you left something here!";
    });
}