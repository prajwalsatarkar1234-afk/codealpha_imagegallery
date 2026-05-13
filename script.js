const images = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Helper function to get visible images */
function getVisibleImages() {
  return Array.from(images).filter(img => img.style.display !== "none");
}

/* Open Image */

images.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

  });

});

/* Close */

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

/* Close with Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});

/* Next */

nextBtn.addEventListener("click", () => {
  const visibleImages = getVisibleImages();
  if (visibleImages.length === 0) return;
  
  const currentVisibleIndex = visibleImages.findIndex(img => img.src === lightboxImg.src);
  const nextIndex = (currentVisibleIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[nextIndex].src;
});

/* Previous */

prevBtn.addEventListener("click", () => {
  const visibleImages = getVisibleImages();
  if (visibleImages.length === 0) return;
  
  const currentVisibleIndex = visibleImages.findIndex(img => img.src === lightboxImg.src);
  const prevIndex = (currentVisibleIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[prevIndex].src;
});

/* Filter Images */

function filterSelection(category){

  images.forEach((img) => {

    if(category === "all"){

      img.style.display = "block";

    }

    else if(img.classList.contains(category)){

      img.style.display = "block";

    }

    else{

      img.style.display = "none";

    }

  });

}
