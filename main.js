const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productClose = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCard = document.querySelector('#shoppingCard');
const productDetailaIsade = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', showDesktopMenu);
burgerIcon.addEventListener('click', showMobileMenu);
carritoIcon.addEventListener('click', showPruductIsade);
productClose.addEventListener('click', closeProductDetailaIsade);

function showDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCard.classList.add('inactive');
  productDetailaIsade.classList.add('inactive');
}

function showMobileMenu() {
  shoppingCard.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  productDetailaIsade.classList.add('inactive');
}

function showPruductIsade() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCard.classList.toggle('inactive');
  productDetailaIsade.classList.add('inactive');
}

function openProductDetailaIsade() {
  productDetailaIsade.classList.remove('inactive');
  shoppingCard.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}
function closeProductDetailaIsade() {
  productDetailaIsade.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 12700,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bicycle helmet',
  price: 1200,
  image:
    'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
  name: 'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});
productList.push({
  name: 'Bicycle helmet',
  price: 1500,
  image:
    'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
  name: 'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', openProductDetailaIsade);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = '$' + product.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;

    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);

    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);

    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
