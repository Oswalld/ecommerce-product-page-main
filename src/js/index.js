// Sélection des éléments du DOM
const mainImageContainer = document.querySelector('.main-image-container picture');
// Sélectionne le conteneur de l'image principale (l'élément <picture>)

const thumbnailContainers = document.querySelectorAll('.thumbnail-container');
// Sélectionne tous les conteneurs de miniatures (les div avec la classe 'thumbnail-container')

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
// Sélectionne les boutons de navigation précédent et suivant

let currentIndex = 0;
// Variable pour garder en mémoire l'index de l'image actuellement affichée

// Tableaux contenant les chemins des images
const mainImages = [
    './src/images/image-product-1.jpg',
    './src/images/image-product-2.jpg',
    './src/images/image-product-3.jpg',
    './src/images/image-product-4.jpg'
];
// Tableau contenant les chemins des images principales

const thumbnailImages = [
    './src/images/image-product-1-thumbnail.jpg',
    './src/images/image-product-2-thumbnail.jpg',
    './src/images/image-product-3-thumbnail.jpg',
    './src/images/image-product-4-thumbnail.jpg'
];
// Tableau contenant les chemins des images miniatures

function updateMainImage(index) {
    // Fonction pour mettre à jour l'image principale
    mainImageContainer.innerHTML = ''; // Vide le contenu du conteneur de l'image principale

    const newImg = document.createElement('img'); // Crée un nouvel élément img
    newImg.src = mainImages[index]; // Définit la source de l'image
    newImg.alt = `Image principale ${index + 1}`; // Définit le texte alternatif

    // Ajoute les classes CSS de base à l'image
    newImg.classList.add('main-image', 'object-cover', 'w-full', 'h-[350px]');

    // Vérifie la largeur de la fenêtre et ajoute des classes supplémentaires si elle est >= 1024px
    if (window.innerWidth >= 1024) {
        newImg.classList.add('h-auto', 'rounded-xl', 'w-auto');
    }

    mainImageContainer.appendChild(newImg); // Ajoute l'image au conteneur
    currentIndex = index; // Met à jour l'index courant
}

// Initialisation des miniatures
thumbnailContainers.forEach((container, index) => {
    // Pour chaque conteneur de miniature

    const picture = container.querySelector('picture'); // Sélectionne l'élément picture dans le conteneur
    picture.innerHTML = ''; // Vide le contenu existant

    const thumbnailImg = document.createElement('img'); // Crée un nouvel élément img pour la miniature
    thumbnailImg.src = thumbnailImages[index]; // Définit la source de l'image miniature
    thumbnailImg.alt = `Miniature ${index + 1}`; // Définit le texte alternatif

    // Ajoute les classes de base pour la miniature
    thumbnailImg.classList.add('thumbnail-image');

    // Vérifie si la largeur de la fenêtre est d’au moins 1024 pixels et ajoute les classes conditionnelles
    if (window.innerWidth >= 1024) {
        thumbnailImg.classList.add('h-auto','w-auto', 'rounded-xl');
    }

    picture.appendChild(thumbnailImg); // Ajoute l'image miniature au conteneur picture
    container.addEventListener('click', () => updateMainImage(index)); // Ajoute un écouteur d'événement pour le clic sur la miniature
});


// Gestion des boutons de navigation
prevButton.addEventListener('click', () => {
    // Quand on clique sur le bouton précédent
    currentIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
    // Calcule le nouvel index (revient au dernier si on est au premier)
    updateMainImage(currentIndex);
    // Met à jour l'image principale
});

nextButton.addEventListener('click', () => {
    // Quand on clique sur le bouton suivant
    currentIndex = (currentIndex + 1) % mainImages.length;
    // Calcule le nouvel index (revient au premier si on est au dernier)
    updateMainImage(currentIndex);
    // Met à jour l'image principale
});

// Navigation avec le clavier
document.addEventListener('keydown', (e) => {
    // Écoute les touches du clavier
    if (e.key === 'ArrowLeft') {
        prevButton.click(); // Simule un clic sur le bouton précédent
    } else if (e.key === 'ArrowRight') {
        nextButton.click(); // Simule un clic sur le bouton suivant
    }
});

// Initialisation au chargement
updateMainImage(0);
// Affiche la première image au chargement de la page


const cartDisplay = document.querySelector('.cart-expended')
document.querySelector('.cart').addEventListener("click", function() {
    cartDisplay.classList.toggle('hidden')
})

const menuDisplay = document.querySelector('.menu')
const shadow = document.querySelector('.shadow')
document.querySelector('.open-menu').addEventListener("click", function() {
    menuDisplay.classList.toggle('hidden')
    shadow.classList.toggle('hidden')
})
document.querySelector('.close-menu').addEventListener("click", function() {
    menuDisplay.classList.toggle('hidden')
    shadow.classList.toggle('hidden')
})


let itemToAdd = document.querySelector('.item-to-add');
document.querySelector('.minus').addEventListener("click", function() {
    let currentValue = parseInt(itemToAdd.value, 10) || 0;
    if (currentValue > 0) { // pour éviter de descendre en-dessous de 0
        itemToAdd.value = currentValue - 1;
    }
});

document.querySelector('.plus').addEventListener("click", function() {
    let currentValue = parseInt(itemToAdd.value, 10) || 0;
    itemToAdd.value = currentValue + 1;
});

const popUpCart = document.querySelector('.popup-cart')
const noItemInCart = document.querySelector(".no-item-to-cart")
const itemAddedToCart = document.querySelector(".item-in-cart")
const buttonAddToCart = document.querySelector('.add-to-cart')
let currentValueStack = 0

buttonAddToCart.addEventListener("click", () => {
    let currentValue = parseInt(itemToAdd.value, 10) || 0;
    currentValueStack += currentValue
    

    const sneakerPrice = 125
    if (currentValue <= 0){

    } else {
        const numberOfItem = document.querySelector('.number-of-item')
        numberOfItem.textContent = `${currentValueStack}`
        const totalPriceLayout = document.querySelector('.total-price')
        let totalPrice = sneakerPrice * currentValueStack
        totalPriceLayout.textContent = `$${totalPrice}`
        noItemInCart.classList.add("hidden")
        itemAddedToCart.classList.remove("hidden")
        popUpCart.classList.remove("hidden")
        popUpCart.textContent = `${currentValueStack}`


    }
})

const deleteItemInCart = document.querySelector('.delete')
deleteItemInCart.addEventListener("click", () => {
    noItemInCart.classList.remove("hidden")
    itemAddedToCart.classList.add("hidden")
    popUpCart.classList.add("hidden")
    currentValueStack = 0
})