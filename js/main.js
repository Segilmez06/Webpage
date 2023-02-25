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
let currentScroll = 0;
let slideCount = 0;

// Handlers
window.addEventListener('load', onLoad);
window.addEventListener('wheel', e => e.preventDefault(), { passive: false });
window.addEventListener('contextmenu', disabled);
window.addEventListener('keypress', disabled);
window.addEventListener('keydown', disabled);
document.addEventListener('visibilitychange', visibilityChanged);
document.addEventListener('mousemove', moveBackground);

let scrollUpBtn = `<div class="scroll up"><button class="scrollBtn scrollUp" title="Scroll up"><i class="arrow up"></i></button></div>`;
let scrollDownBtn = `<div class="scroll down"><button class="scrollBtn scrollDown" title="Scroll down"><i class="arrow down"></i></button></div>`;

function visibilityChanged() {// Rename tab on hide
    if (document.hidden) {
        document.title = "Hey! You left me open. :: Sarp Eren EGILMEZ";
    } else {
        document.title = "Personal Webpage :: Sarp Eren EGILMEZ";
    }
}

function moveBackground(e) {// Move background on mouse move
    let x = e.screenX;
    let y = e.screenY;

    let w = window.innerWidth;
    let h = window.innerHeight;

    let posX = w / 2 - x;
    let posY = h / 2 - y;

    let reactscale = 1.5;
    let scrollX = (((reactscale * posX) / (w / 2)) - reactscale) + "vw";
    let scrollY = (((reactscale * posY) / (h / 2)) - reactscale) + "vh";

    let slide = document.querySelector('#first-slide');
    slide.style.setProperty('--reactX', scrollX);
    slide.style.setProperty('--reactY', scrollY);
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
    let r = Math.floor(Math.random() * i.length);
    console.log(i[r]);

    window.scrollTo(0, 0);

    let slides = document.getElementsByClassName('slide');
    slideCount = slides.length;
    for (let i = 0; i < slideCount; i++) {
        const slide = slides[i];
        if (i > 0) {
            slide.insertAdjacentHTML('afterbegin', scrollUpBtn);
        }
        if (i < slideCount - 1) {
            slide.insertAdjacentHTML('beforeend', scrollDownBtn);
        }
    }

    let downBtns = document.getElementsByClassName("scrollDown");
    for (let i = 0; i < downBtns.length; i++) {
        const element = downBtns[i];
        element.addEventListener("click", scrollDown);
    }
    let upBtns = document.getElementsByClassName("scrollUp");
    for (let i = 0; i < upBtns.length; i++) {
        const element = upBtns[i];
        element.addEventListener("click", scrollUp);
    }

    await delay(500);
    $(".fade").fadeIn(1000);

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
    if (scrollAnimRunning == false) {
        if (!scrollAnimRunning) {
            if (e.deltaY > 0) {
                scrollDown();
            }
            else if (e.deltaY < 0) {
                scrollUp();
            }
        }
    }
}

function scrollDown() {// Animate scrolling down
    if (currentScroll == slideCount - 1) {
        return;
    }
    currentScroll = currentScroll + 1;
    scrollToSlide(currentScroll);
}

function scrollUp() {// Animate scrolling up
    if (currentScroll == 0) {
        return;
    }
    currentScroll = currentScroll - 1;
    scrollToSlide(currentScroll);
}

function scrollToSlide(slide) {// Scroll to .slide element
    scrollAnimRunning = true;
    document.querySelector('*').style.touchAction = 'none';
    let elem = document.getElementsByClassName('slide')[slide];
    $('html, body').animate({ scrollTop: elem.offsetTop }, 1500);
    $('html, body').promise().done(function () { document.querySelector('*').style.touchAction = ''; scrollAnimRunning = false; });
    scrollPerformed = true;
}

async function dockScroll() {// Detects scrolling direction
    if (scrollAnimRunning == false) {
        let winHeight = screen.height;
        let scroll1 = Math.round(window.scrollY);
        await delay(50);
        let scroll2 = Math.round(window.scrollY);
        if (scrollAnimRunning == false) {
            if (scroll1 < scroll2) {
                scrollDown();
            }
            else if (scroll1 > scroll2) {
                scrollUp();
            }
        }
    }
}