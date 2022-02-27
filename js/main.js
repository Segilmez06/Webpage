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
    var i = ["Hey, what are you doing here?", "WOW! You're a programmer. I like it.", "Wanna be a hacker? Just type in this: document.designmode = 'on';", "I believe that HTML will be a programming language one day.", "Can't find any projects? Try to simulate your desktop with HTML, CSS and JS.", "Minecraft is a strange game. Circle-free with circles."];
    var r = Math.floor(Math.random()*i.length);
    console.log(i[r]);
    
    document.getElementById("scrollDown").addEventListener("click", scrollDown);
    document.getElementById("scrollUp").addEventListener("click", scrollUp);

    setInterval(dockScroll, 150);

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

async function dockScroll(){
    var winHeight = screen.height;
    var halfHeight = winHeight / 2;
    var scroll1 = Math.round(window.scrollY);
    await delay(150);
    var scroll2 = Math.round(window.scrollY);  
    if (scroll1 == scroll2 && scroll1 != 0  && scroll1 != winHeight && scrollAnimRunning == false) {
        scrollAnimRunning = true;
        var drawerOpen = scroll1 > halfHeight;
        if (drawerOpen) {
            $("html, body").animate({ scrollTop: winHeight }, 1000);
            $('html, body').promise().done(function(){ scrollAnimRunning = false;});
        }
        else {
            $("html, body").animate({ scrollTop: 0 }, 1000);   
            $('html, body').promise().done(function(){ scrollAnimRunning = false;});
        }
    }    
}