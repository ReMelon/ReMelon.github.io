var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

function displayRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var imageUrl = images[randomIndex];
    var bannerContainer = document.querySelector(".banner-container");
    bannerContainer.style.backgroundImage = "url('" + imageUrl + "')";
    bannerContainer.classList.add("show-image");
    setTimeout(function() {
        bannerContainer.classList.remove("show-image");
    }, 1000);
}

setInterval(displayRandomImage, 3000);