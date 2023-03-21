// Creare slide dinamicamente
const imagesArray = ["img/01.jpg","img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");
console.log (itemsContainer)
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;
        
    itemsContainer.innerHTML += sliderItem;
}

// Stato iniziale
const itemsArray = document.getElementsByClassName("item");
console.log (itemsArray);

// Imposto la prima slide visibile
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");


// Gestisco il click sul bottone next
const prevBtn = document.querySelector (".prev")
const nextBtn = document.querySelector (".next")

nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");
    // rimuovere activeIndex dalla slide corrente
    itemsArray[activeItemIndex].classList.remove("active");
    // incremento activeIndex
    activeItemIndex++;
    // aggiungo active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    // faccio scomparire il nextBtn all'ultima slide
    if (activeItemIndex === itemsArray.length - 1) {
        nextBtn.classList.add("hidden");
    }
})

// Gestisco il click sul bottone prev
// di default nascondo il bottone
prevBtn.classList.remove("hidden");

prevBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden");
    // rimuovere activeIndex dalla slide corrente
    itemsArray[activeItemIndex].classList.remove("active");
    // incremento activeIndex
    activeItemIndex--;
    // aggiungo active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    // faccio scomparire il nextBtn all'ultima slide
    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    }
})

