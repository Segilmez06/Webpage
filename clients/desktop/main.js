logger.info("Hello from desktop main script!");

document.querySelectorAll(".links-box > a:not([href])").forEach((e) => {
    e.addEventListener("click", () => { alert("Sorry, this page is not available!\nBut stay tuned, work in progress..."); });
});