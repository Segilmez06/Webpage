logger.info("Hello from mobile main script!");

document.querySelector('h1').innerHTML = lines[0][Math.floor(Math.random() * lines[0].length)];
document.querySelector('h3').innerHTML = lines[1][Math.floor(Math.random() * lines[1].length)];