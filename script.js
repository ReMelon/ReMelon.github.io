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
            }, 5000);
        }
    }, 20);
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
    }, 20);
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


const trailer = document.getElementById("trailer");

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })
}





const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval_a = null;

document.addEventListener("DOMContentLoaded", event => {
    let iteration = 0;
    const h1 = document.querySelector("h1");

    clearInterval(interval_a);

    interval_a = setInterval(() => {
        h1.querySelector(".magic").innerText = h1.querySelector(".magic").innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return h1.querySelector(".magic").dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= h1.querySelector(".magic").dataset.value.length) {
            clearInterval(interval_a);
        }

        iteration += 1 / 3;
    }, 30);
});