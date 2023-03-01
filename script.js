window.onload = function() {
    const section = document.querySelector('.section');
    const imageContainer = document.querySelector('.image-container');
    const images = Array.from(imageContainer.children);

    function setPosition() {
        images.forEach((image) => {
            const rect = image.getBoundingClientRect();
            const x = Math.random() * (section.offsetWidth - rect.width);
            const y = Math.random() * (section.offsetHeight - rect.height);
            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
        });
    }

    images.forEach((image) => {
        image.style.opacity = 1;
    });

    setInterval(() => {
        images.forEach((image) => {
            image.style.opacity = 0;
            setTimeout(() => {
                setPosition();
                image.style.opacity = 1;
            }, 4000);
        });
    }, 8000);
}