const products = [
    {
        name: 'brick',
        price: 49.3,
    },

    {
        name: 'concrete',
        price: 79.6,
    },

    {
        name: 'tile',
        price: 53.4,
    },

    {
        name: 'stone',
        price: 105,
    }
]

function getTotalPrice(weight, price) {
    return weight * price
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
        let price = getTotalPrice(weight, product.price);
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