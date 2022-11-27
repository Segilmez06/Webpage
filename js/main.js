const msg = `
 _   _      _ _         _
| | | | ___| | | ___   | |
| |_| |/ _ \\ | |/ _ \\  | |
|  _  |  __/ | | (_) | |_|
|_| |_|\\___|_|_|\\___/  (_)
`;

let scrollAnimRunning = false;

// Handlers
window.addEventListener("wheel", e => e.preventDefault(), { passive:false });

window.addEventListener("contextmenu", disabled);
window.addEventListener("keypress", disabled);
window.addEventListener("keydown", disabled);

window.onload = onLoad;

// Rename tab on hide
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = "Hey! You left me open. :: Sarp Eren EGILMEZ";
    } else {
        document.title = "Personal Webpage :: Sarp Eren EGILMEZ";
    }
});

// Disabling action by returning false
function disabled(){return false;}

// Sometimes, a break is not that bad...
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Auto scroll on load
window.addEventListener('load', function() {
    let currentURL = new URL(location.href);
    const viewLinks = (currentURL.searchParams.get('view') == 'links');
    if (viewLinks){
        window.scrollTo(0, window.innerHeight);
    }
    else {
        window.scrollTo(0, 0);
    }
});

// Onload handler, basically
async function onLoad() {
    console.log(msg);
    let i = [
        "Hey, what are you doing here?", 
        "WOW! You're a programmer. I like it.", 
        "Wanna be a hacker? Just type in this: document.designmode = 'on';", 
        "I believe that HTML will be a programming language one day.", 
        "Can't find any projects? Try to simulate your desktop with HTML, CSS and JS.", 
        "Minecraft is a strange game. Circle-free with circles.", 
        "I see a player you mean.", 
        "Figlet is cool!", 
        "Feelin' like a *HECKER* ? Just run heckerMode()"
    ];
    let r = Math.floor(Math.random()*i.length);
    console.log(i[r]);

    document.getElementById("scrollDown").addEventListener("click", scrollDown);
    document.getElementById("scrollUp").addEventListener("click", scrollUp);

    initDynaWP();

    await delay(500);
    $(".fade").fadeIn(1000);

    // await delay(1000);
    window.addEventListener('wheel', scrollHandler);
    setInterval(dockScroll, 50);

    await delay(7500);
    $(".scrollInfo").fadeIn(1000);
}

// Runny funny feature
function heckerMode() {
    console.log("😼 HackCat is here for you.");
    var styleArray= [
        'background-image: url("https://media3.giphy.com/media/unQ3IJU2RG7DO/giphy.gif")',
        'background-size: cover',
        'background-repeat: no-repeat',
        'background-position: center',
        'color: transparent',
        'padding: 150px',
    ];
    console.log('%c ', styleArray.join(';'));
}

// Mouse wheel scroll handler
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
    document.querySelector('*').style.touchAction = 'none';
    $('html, body').animate({ scrollTop: $(".links_container").offset().top }, 2000);
    $('html, body').promise().done(function(){ document.querySelector('*').style.touchAction = '';scrollAnimRunning = false;});
}

function scrollUp() { 
    scrollAnimRunning = true;
    document.querySelector('*').style.touchAction = 'none';
    $('html, body').animate({ scrollTop: $(".head").offset().top }, 2000);
    $('html, body').promise().done(function(){ document.querySelector('*').style.touchAction = ''; scrollAnimRunning = false;});
}

//Scroll to top before reload: If user comes back to page, it'll restart from top.
window.onbeforeunload = function () {
    $('html, body').animate({ scrollTop: 0 }, 1);
}

// Detects scrolling direction -- Use this, much better
async function dockScroll(){
    var winHeight = screen.height;
    var scroll1 = Math.round(window.scrollY);
    await delay(50);
    var scroll2 = Math.round(window.scrollY);
    if (scrollAnimRunning == false){
        if (scroll1 < scroll2) {
            scrollDown();
        }
        else if (scroll1 > scroll2) {
            scrollUp();
        }
    }
}

// Automatically scrolls to more visible div
async function autoScroll(){
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