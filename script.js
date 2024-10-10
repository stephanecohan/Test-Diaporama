// Temps en millisecondes entre les changements (x minutes, ici x=1 minute = 60000 millisecondes)
const intervalTime = 5000; // 1 minute

// Liste des images à afficher (les URLs peuvent être remplacées)
const images = [
    'images/1.jpg', // Remplace par le lien de la première image
    'images/2.jpg', // Remplace par le lien de la deuxième image
    'images/3.jpg',  // Ajouter autant d'images que nécessaire
    'images/4.jpg',  // Ajouter autant d'images que nécessaire
    'images/5.jpg',  // Ajouter autant d'images que nécessaire
    'images/6.jpg'  // Ajouter autant d'images que nécessaire
];

let currentImageIndex = 0;
let showingImage = false;

function showImage(index) {
    const img = document.createElement('img');
    img.src = images[index];
    img.classList.add('fullscreen-image');
    document.body.appendChild(img);

    // Après x minutes, on enlève l'image et retourne à la page d'accueil
    setTimeout(() => {
        img.remove();
        document.getElementById('content').style.display = 'block';
        showingImage = false;
    }, intervalTime);
}

function cycleImages() {
    setInterval(() => {
        if (!showingImage) {
            showingImage = true;
            document.getElementById('content').style.display = 'none'; // Cache la page de départ
            showImage(currentImageIndex);
            currentImageIndex = (currentImageIndex + 1) % images.length; // Passe à l'image suivante
        }
    }, intervalTime * 2); // *2 pour alterner entre page d'accueil et image
}

// Lancement du cycle d'images
cycleImages();
