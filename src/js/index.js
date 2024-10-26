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

    mainImageContainer.innerHTML = '';
    // Vide le contenu du conteneur de l'image principale

    const newImg = document.createElement('img');
    // Crée un nouvel élément img

    newImg.src = mainImages[index];
    // Définit la source de l'image à partir du tableau mainImages

    newImg.alt = `Image principale ${index + 1}`;
    // Définit le texte alternatif de l'image

    newImg.classList.add('main-image', 'object-cover', 'w-full', 'h-[300px]');
    // Ajoute les classes CSS nécessaires à l'image

    mainImageContainer.appendChild(newImg);
    // Ajoute l'image au conteneur

    currentIndex = index;
    // Met à jour l'index courant
}

// Initialisation des miniatures
thumbnailContainers.forEach((container, index) => {
    // Pour chaque conteneur de miniature

    const picture = container.querySelector('picture');
    // Sélectionne l'élément picture dans le conteneur

    picture.innerHTML = '';
    // Vide le contenu existant

    const thumbnailImg = document.createElement('img');
    // Crée un nouvel élément img pour la miniature

    thumbnailImg.src = thumbnailImages[index];
    // Définit la source de l'image miniature

    thumbnailImg.alt = `Miniature ${index + 1}`;
    // Définit le texte alternatif

    picture.appendChild(thumbnailImg);
    // Ajoute l'image miniature au conteneur picture

    container.addEventListener('click', () => updateMainImage(index));
    // Ajoute un écouteur d'événement pour le clic sur la miniature
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