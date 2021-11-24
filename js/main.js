var scrollAnimRunning = false;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function onLoad() {
    await delay(500);
    $(".fade").fadeIn(1000);
}

$(window).bind('mousewheel', function(e) {
    if(!scrollAnimRunning) {
        if (e.originalEvent.wheelDelta >= 0) { //UP
            scrollAnimRunning = true;
            $('html, body').animate({ scrollTop: $(".head").offset().top }, 2000);
            $('html, body').promise().done(function(){ scrollAnimRunning = false;});
        }
        else { //DOWN
            scrollAnimRunning = true;
            $('html, body').animate({ scrollTop: $(".links_container").offset().top }, 2000);
            $('html, body').promise().done(function(){ scrollAnimRunning = false;});
        }
    }
});

function scrollDown(){
    scrollAnimRunning = true;
    $('html, body').animate({ scrollTop: $(".links_container").offset().top }, 2000);
    $('html, body').promise().done(function(){ scrollAnimRunning = false;});
}