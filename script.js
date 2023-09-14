const imageElements = document.querySelectorAll(".media[data-type='image']");
const videoElements = document.querySelectorAll(".media[data-type='video']");
const changeMediaButtons = document.querySelectorAll(".change-media");

const imageSources = ["image1.jpeg", "image2.jpg", "image3.jpg"];
const videoSources = ["video1.mp4", "video2.mp4", "video3.mp4"];
let currentIndex = 0;

changeMediaButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const mediaType = button.getAttribute("data-type");

        if (mediaType === "image") {
            currentIndex = (currentIndex + 1) % imageSources.length;
            imageElements[index].src = imageSources[currentIndex];
        } else if (mediaType === "video") {
            currentIndex = (currentIndex + 1) % videoSources.length;
            videoElements[index].src = videoSources[currentIndex];
        }
    });
});
