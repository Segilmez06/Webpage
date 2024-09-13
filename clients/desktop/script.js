window.pageLoaded = function(){
    window.addEventListener('focus', () => {
        document.title = "..:: Sarp Eren EGILMEZ ::..";
    });

    window.addEventListener('blur', () => {
        document.title = "Hey, you left something here!";
    });
}

window.contentLoaded = function(){
    document.querySelectorAll(".links-box > a:not([href])").forEach((e) => {
        e.addEventListener("click", () => { alert("Sorry, this page is not available!\nBut stay tuned, work in progress..."); });
    });
}