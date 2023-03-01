const images = document.querySelectorAll('.image');
const blackSection = document.querySelector('.black-section');
const height = blackSection.offsetHeight;
const width = blackSection.offsetWidth;

images.forEach(image => {
    const x = Math.floor(Math.random() * (width - image.width));
    const y = Math.floor(Math.random() * (height - image.height));
    image.style.top = `${y}px`;
    image.style.left = `${x}px`;
    fadeIn(image);
});

function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const intervalId = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(intervalId);
            setTimeout(() => {
                fadeOut(element);
            }, 2000);
        }
    }, 50);
}

function fadeOut(element) {
    let opacity = 1;
    const intervalId = setInterval(() => {
        opacity -= 0.05;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(intervalId);
            const x = Math.floor(Math.random() * (width - element.width));
            const y = Math.floor(Math.random() * (height - element.height));
            element.style.top = `${y}px`;
            element.style.left = `${x}px`;
            fadeIn(element);
        }
    }, 50);
}

let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}



/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

let timeouts = [],
    intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
    let index = 1;

    for (const star of document.getElementsByClassName("magic-star")) {
        timeouts.push(setTimeout(() => {
            animate(star);

            intervals.push(setInterval(() => animate(star), 1000));
        }, index++ * 300));
    };
}

magic.onmouseleave = onMouseLeave = () => {
    for (const t of timeouts) clearTimeout(t);
    for (const i of intervals) clearInterval(i);

    timeouts = [];
    intervals = [];
}