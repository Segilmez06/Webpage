const msg = `
 _   _      _ _         _
| | | | ___| | | ___   | |
| |_| |/ _ \\ | |/ _ \\  | |
|  _  |  __/ | | (_) | |_|
|_| |_|\\___|_|_|\\___/  (_)
`;

// Scroll variables
let scrollPerformed = false;
let scrollAnimRunning = false;

// Handlers
window.addEventListener('load', onLoad);
window.addEventListener('wheel', e => e.preventDefault(), { passive:false });
window.addEventListener('contextmenu', disabled);
window.addEventListener('keypress', disabled);
window.addEventListener('keydown', disabled);
document.addEventListener('visibilitychange', visibilityChanged);
document.addEventListener('DOMContentLoaded', startupScroll);


function visibilityChanged(){// Rename tab on hide
    if (document.hidden) {
        document.title = "Hey! You left me open. :: Sarp Eren EGILMEZ";
    } else {
        document.title = "Personal Webpage :: Sarp Eren EGILMEZ";
    }
}

function startupScroll() {// Auto scroll on load
    if (new URL(location.href).searchParams.get('view') == 'links'){
        window.scrollTo(0, window.innerHeight);
    }
    else {
        window.scrollTo(0, 0);
    }
};

async function onLoad() {// Onload handler, basically
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

    await delay(500);
    $(".fade").fadeIn(1000);

    // await delay(1000);
    window.addEventListener('wheel', scrollHandler);
    setInterval(dockScroll, 50);

    await delay(7500);
    if (scrollPerformed == false) {
        $(".scrollInfo").fadeIn(1000);
    }
}

function heckerMode() {// Some dumb feature
    console.log("😼 HeckerCat is here for you.");
}

function scrollHandler(e) {// Mouse wheel scroll handler
    if(!scrollAnimRunning) {
        if (e.deltaY >= 0) {
            scrollDown();
        }
        else {
            scrollUp();
        }
    }
}

function scrollDown(){// Animate scrolling down
    scrollAnimRunning = true;
    document.querySelector('*').style.touchAction = 'none';
    $('html, body').animate({ scrollTop: $(".links_container").offset().top }, 2000);
    $('html, body').promise().done(function(){ document.querySelector('*').style.touchAction = '';scrollAnimRunning = false;});
    scrollPerformed = true;
}

function scrollUp() {// Animate scrolling up
    scrollAnimRunning = true;
    document.querySelector('*').style.touchAction = 'none';
    $('html, body').animate({ scrollTop: $(".head").offset().top }, 2000);
    $('html, body').promise().done(function(){ document.querySelector('*').style.touchAction = ''; scrollAnimRunning = false;});
    scrollPerformed = true;
}

async function dockScroll(){// Detects scrolling direction -- Use this, much better
    let winHeight = screen.height;
    let scroll1 = Math.round(window.scrollY);
    await delay(50);
    let scroll2 = Math.round(window.scrollY);
    if (scrollAnimRunning == false){
        if (scroll1 < scroll2) {
            scrollDown();
        }
        else if (scroll1 > scroll2) {
            scrollUp();
        }
    }
}