var scrollAnimRunning = false;

window.addEventListener("wheel", e => e.preventDefault(), { passive:false });

window.oncontextmenu = disabled;
window.onkeypress = disabled;

window.onload = onLoad;

function disabled(){return false;} // Disabling action by returning false

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function onLoad() {
    document.getElementById("scrollDown").addEventListener("click", scrollDown);
    document.getElementById("scrollUp").addEventListener("click", scrollUp);

    await delay(500);
    $(".fade").fadeIn(1000);

    await delay(1000);
    window.addEventListener('wheel', scrollHandler);
}

function scrollHandler(e) {
    if(!scrollAnimRunning) {
        if (e.deltaY >= 0) { //DOWN
            scrollDown();
        }
        else { //UP
            scrollUp();
        }
    }
}

function scrollDown(){
    scrollAnimRunning = true;
    $('html, body').animate({ scrollTop: $(".links_container").offset().top }, 2000);
    $('html, body').promise().done(function(){ scrollAnimRunning = false;});
}

function scrollUp() { 
    scrollAnimRunning = true;
    $('html, body').animate({ scrollTop: $(".head").offset().top }, 2000);
    $('html, body').promise().done(function(){ scrollAnimRunning = false;});
}

window.onbeforeunload = function () {
    $('html, body').animate({ scrollTop: 0 }, 1);
}