let lines = [
    [
        "👋 Hey there, mobile user!",
        "📱 Welcome to the mobile version!",
    ],
    [
        "This page is on the way...",
        "Will be online in a short time!",
        "Coming real soon!",
        "I promise, it will worth waiting..."
    ]
];


window.pageLoaded = function(){

}

window.contentLoaded = function(){
    document.querySelector('h1').innerHTML = lines[0][Math.floor(Math.random() * lines[0].length)];
    document.querySelector('h3').innerHTML = lines[1][Math.floor(Math.random() * lines[1].length)];
}