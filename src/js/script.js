const products = [
    {
        name: 'brick',
        priceForSize: 49.3,
        priceForWeight: 4.4
    },

    {
        name: 'concrete',
        priceForSize: 79.6,
        priceForWeight: 17.3
    },

    {
        name: 'tile',
        priceForSize: 53.4,
        priceForWeight: 4.2
    },

    {
        name: 'stone',
        priceForSize: 105,
        priceForWeight: 21.8
    }
]

function getTotalPrice(weight, size, priceForWeight, priceForSize) {
    return (size * priceForSize) + (weight * priceForWeight);
}


// Business Logic

const calculatorSelect = document.querySelector('.calculator__select');
const countButton = document.querySelector('.calculator__button-count button');
const weightInput = document.querySelector('.calculator__weight-input');
const sizeInput = document.querySelector('.calculator__size-input');
const calculatorCostContainer = document.querySelector('.calculator__cost');

countButton.addEventListener('click', handleForms);

function handleForms() {
    let weight = parseInt(weightInput.value.trim());
    let size = parseInt(sizeInput.value.trim());
    let productName = calculatorSelect.value;

    if (!isNaN(weight) && !isNaN(size) && productName !== '0') {
        let product = products.find(item => item.name === productName);
        let price = getTotalPrice(weight, size, product.priceForWeight, product.priceForSize);
        showPrice(price);
    } else {
        alert('Заполните всю форму правильно!')
    }
}


function showPrice(countedPrice) {
    let priceElement = document.querySelector('.calculator__cost-text span');

    priceElement.innerHTML = '$' + countedPrice.toFixed(1);

    if (calculatorCostContainer.classList.contains('d-none')) {
        calculatorCostContainer.classList.remove('d-none');
    }
}