document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded(){
    document.querySelectorAll(".links-box > a:not([href])").forEach((e) => {
        e.addEventListener("click", () => { alert("Sorry, this page is not ready yet!\nStay tuned, work in progress..."); });
    });

    window.addEventListener('focus', () => {
        document.title = "..:: Sarp Eren EGILMEZ ::..";
    });

    window.addEventListener('blur', () => {
        document.title = "Hey, you left something here!";
    });
}