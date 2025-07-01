const imagesDetails = [
    {
        name: "Image 1",
        url: "./assets/image1.jpg",
        description: "A beautiful flowers view.",
    },
    {
        name: "Image 2",
        url: "./assets/image2.jpg",
        description: "A serene landscape with mountains in the background and a clear blue sky.",
    },
    {
        name: "Image 3",
        url: "./assets/image3.jpg",
        description: "A close-up of a spring.",
    }
];

const img = document.getElementById("image");
const imgName = document.getElementById("img-name");
const imgDes = document.getElementById("img-des");
const imgCount = document.getElementById("image-count");

let count = 0;
const firstImage = imagesDetails[0];

img.src = firstImage.url;
imgName.textContent = firstImage.name;
imgDes.textContent = firstImage.description;
imgCount.textContent = `${count + 1}/${imagesDetails.length}`;

function updateImageDetails() {
    const currentImage = imagesDetails[count];
    img.src = currentImage.url;
    imgName.innerText = currentImage.name;
    imgDes.innerText = currentImage.description;
    imgCount.innerText = `${count + 1}/${imagesDetails.length}`;
}

function nextImage() {
    count = (count + 1) % imagesDetails.length;
    updateImageDetails();
}

function previousImage() {
    count = (count - 1 + imagesDetails.length) % imagesDetails.length;
    updateImageDetails();
}
