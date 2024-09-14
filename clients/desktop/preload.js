logger.info("Hello from desktop preload script!");

window.addEventListener('focus', () => {
    document.title = "..:: Sarp Eren EGILMEZ ::..";
});

window.addEventListener('blur', () => {
    document.title = "Hey, you left something here!";
});