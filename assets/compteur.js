let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let totalPrice = 0;   // Prix total du panier

// Prix des articles
const pricePerItem1 = 39;
const pricePerItem2 = 39;
const pricePerItem3 = 39;
const pricePerItem4 = 99;

function updateDisplay() {
    const countElement = document.getElementById("count");
    if (countElement) {
        countElement.textContent = count;
    }
    updatePanier();
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

// Deuxième compteur
function updateDisplay2() {
    const countElement2 = document.getElementById("count2");
    if (countElement2) {
        countElement2.textContent = count2;
    }
    updatePanier();
}

function increase2() {
    count2++;
    updateDisplay2();
}

function decrease2() {
    if (count2 > 0) {
        count2--;
        updateDisplay2();
    }
}

// Troisième compteur
function updateDisplay3() {
    const countElement3 = document.getElementById("count3");
    if (countElement3) {
        countElement3.textContent = count3;
    }
    updatePanier();
}

function increase3() {
    count3++;
    updateDisplay3();
}

function decrease3() {
    if (count3 > 0) {
        count3--;
        updateDisplay3();
    }
}

// Quatrième compteur
function updateDisplay4() {
    const countElement4 = document.getElementById("count4");
    if (countElement4) {
        countElement4.textContent = count4;
    }
    updatePanier();
}

function increase4() {
    count4++;
    updateDisplay4();
}

function decrease4() {
    if (count4 > 0) {
        count4--;
        updateDisplay4();
    }
}

// Mise à jour du panier (prix total)
function updatePanier() {
    totalPrice = (count * pricePerItem1) + (count2 * pricePerItem2) + (count3 * pricePerItem3) + (count4 * pricePerItem4); // Calcul du prix total

    const panierPriceElement = document.getElementById("panier-price");
    if (panierPriceElement) {
        panierPriceElement.textContent = "TOTAL PRICE : " +  "€" + totalPrice ;
    }

    updateArticleList();
}

// Mise à jour de la liste des articles dans le panier
function updateArticleList() {
    const articleListElement = document.getElementById("article-list");
    articleListElement.innerHTML = ""; // Réinitialiser la liste avant de la remplir

    // Affichage des articles et de leur quantité

    if (count4 > 0) {
        const li4 = document.createElement("li");
        li4.textContent = "ALL DAYS ACCESS (x" + count4 + ") : " + (count4 * pricePerItem4) + "$";
        articleListElement.appendChild(li4);
    }

    if (count > 0) {
        const li1 = document.createElement("li");
        li1.textContent = "Friday 1st AUGUST  (x" + count + ") : " + (count * pricePerItem1) + "$";
        articleListElement.appendChild(li1);
    }

    if (count2 > 0) {
        const li2 = document.createElement("li");
        li2.textContent = "SATURDAY 2nd AUGUST (x" + count2 + ") : " + (count2 * pricePerItem2) + "$";
        articleListElement.appendChild(li2);
    }

    if (count3 > 0) {
        const li3 = document.createElement("li");
        li3.textContent = "SUNDAY 3rd AUGUST (x" + count3 + ") : " + (count3 * pricePerItem3) + "$";
        articleListElement.appendChild(li3);
    }

}

// Fonction pour vider le panier
function clearCart() {
    count = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    totalPrice = 0;

    // Réinitialisation des affichages des compteurs
    document.getElementById("count").textContent = count;
    document.getElementById("count2").textContent = count2;
    document.getElementById("count3").textContent = count3;
    document.getElementById("count4").textContent = count4;

    // Mise à jour de l'affichage
    updateDisplay();
    updatePanier();
}

// Écouteur d'événement pour vider le panier
const btnClearCart = document.getElementById("btn-clear-cart");
if (btnClearCart) {
    btnClearCart.addEventListener("click", clearCart);
}

const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");

const btnIncrease2 = document.getElementById("btn-increase2");
const btnDecrease2 = document.getElementById("btn-decrease2");

const btnIncrease3 = document.getElementById("btn-increase3");
const btnDecrease3 = document.getElementById("btn-decrease3");

const btnIncrease4 = document.getElementById("btn-increase4");
const btnDecrease4 = document.getElementById("btn-decrease4");

if (btnIncrease && btnDecrease) {
    btnIncrease.addEventListener("click", increase);
    btnDecrease.addEventListener("click", decrease);
    updateDisplay();
}

if (btnIncrease2 && btnDecrease2) {
    btnIncrease2.addEventListener("click", increase2);
    btnDecrease2.addEventListener("click", decrease2);
    updateDisplay2();
}

if (btnIncrease3 && btnDecrease3) {
    btnIncrease3.addEventListener("click", increase3);
    btnDecrease3.addEventListener("click", decrease3);
    updateDisplay3();
}

if (btnIncrease4 && btnDecrease4) {
    btnIncrease4.addEventListener("click", increase4);
    btnDecrease4.addEventListener("click", decrease4);
    updateDisplay4();
}
