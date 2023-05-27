const msg = `
 _   _      _ _         _
| | | | ___| | | ___   | |
| |_| |/ _ \\ | |/ _ \\  | |
|  _  |  __/ | | (_) | |_|
|_| |_|\\___|_|_|\\___/  (_)
`;

// Scroll variables
let animRunning = false;
let currentSlide = 0;
let lastSlide = 0;
let slideCount = 0;

let onLoadCalled = false;

// Handlers
window.addEventListener('DOMContentLoaded', onLoad);
window.addEventListener('wheel', e => e.preventDefault(), { passive: false });
document.addEventListener('visibilitychange', visibilityChanged);

function visibilityChanged() {// Rename tab on hide
    if (document.hidden) {
        document.title = "Hey, you left something here!";
    } else {
        document.title = "Home :: Sarp Eren EGILMEZ";
    }
}

async function onLoad() {// Onload handler, basically
    if (onLoadCalled) {
        return;
    }
    onLoadCalled = true;

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

    slideCount = document.getElementsByClassName('slide').length;
    for (let i = 0; i < slideCount; i++) {
        $('.slideLink').eq(i).click(function () {setSlide(i)});
    }
    $('#profileImage').click(function () {setSlide(0)});

    setSlide(0);
    window.addEventListener('wheel', scrollHandler);

    typeWriterEffect();
}

function typeWriterEffect(){
    let delaybefore = 250;
    let speed = 100;

    let msg1 = 'echo';
    let msg2 = ': ';
    let msg3 = '"Hello, world!"';
    let msg4 = ';';

    setTimeout(() => {
        let span1 = document.createElement('span');
        $('#helloworld').append(span1);
        for (let i = 0; i < msg1.length; i++) {
            const char = msg1[i];
            setTimeout(() => {
                span1.textContent += char;
            }, i * speed);
        }
        setTimeout(() => {
            span1.classList.add('color-cmd');
        }, msg1.length * speed);
    }, delaybefore);

    setTimeout(() => {
        let span2 = document.createElement('span');
        $('#helloworld').append(span2);
        for (let i = 0; i < msg2.length; i++) {
            const char = msg2[i];
            setTimeout(() => {
                span2.textContent += char;
            }, i * speed);
        }
        setTimeout(() => {
            span2.classList.add('color-del');
        }, msg2.length * speed);
    }, (msg1.length * speed) + delaybefore);

    setTimeout(() => {
        let span3 = document.createElement('span');
        $('#helloworld').append(span3);
        for (let i = 0; i < msg3.length; i++) {
            const char = msg3[i];
            setTimeout(() => {
                span3.textContent += char;
            }, i * speed);
        }
        setTimeout(() => {
            span3.classList.add('color-str');
        }, msg3.length * speed);
    }, ((msg1 + msg2).length * speed) + delaybefore);

    setTimeout(() => {
        let span4 = document.createElement('span');
        $('#helloworld').append(span4);
        for (let i = 0; i < msg4.length; i++) {
            const char = msg4[i];
            setTimeout(() => {
                span4.textContent += char;
            }, i * speed);
        }
        setTimeout(() => {
            span4.classList.add('color-del');
        }, msg4.length * speed);
    }, ((msg1 + msg2 + msg3).length * speed) + delaybefore);
}

function heckerMode() {// Some dumb feature
    console.log("😼 HeckerCat is here for you.");
}

function scrollHandler(e) {// Mouse wheel scroll handler
    if (!animRunning) {
        if (e.deltaY > 0) {
            nextSlide();
        }
        else if (e.deltaY < 0) {
            previousSlide();
        }
    }
}

function nextSlide(){
    lastSlide = currentSlide;
    if (currentSlide < slideCount - 1) {
        currentSlide = currentSlide + 1;
        applyVisibility();
    }
}

function previousSlide(){
    lastSlide = currentSlide;
    if (currentSlide > 0) {
        currentSlide = currentSlide - 1;
        applyVisibility();
    }
}

function setSlide(slideID){
    if (!animRunning && slideID != currentSlide) {
        lastSlide = currentSlide;
        currentSlide = slideID;
        applyVisibility();
    }
}

function applyVisibility (){
    animRunning = true;

    let ind = $('#indicator');
    if (currentSlide > lastSlide){
        ind.animate({ height: `${(currentSlide - lastSlide + 1) * (100 / slideCount)}%` }, 250, function(){
            ind.animate({ top: `${currentSlide * (100 / slideCount)}%`, height: `${100 / (slideCount)}%` }, 250);
        });
    }
    else {
        ind.animate({ top: `${currentSlide * (100 / slideCount)}%`, height: `${(lastSlide - currentSlide + 1) * (100 / slideCount)}%` }, 250, function(){
            ind.animate({ height: `${100 / (slideCount)}%` }, 250);
        });
    }    
    
    $('.slide').eq(lastSlide).fadeOut(250, function () {
        $('.slide').eq(currentSlide).fadeIn(250, function () {
            animRunning = false;
        });
    });


    $('#main').css('backdrop-filter', `hue-rotate(${(currentSlide) * 60}deg)`);
}





// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/styles/style.scss')
//         .then((response) => response.text())
//         .then((scss) => {
//             Sass.compile(scss, (result) => {
//                 const style = document.createElement('style');
//                 style.innerHTML = result.text;
//                 document.head.appendChild(style);
//             });
//         });
// });
