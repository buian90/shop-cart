/*------Hien thi popup gio hang------*/
//B1: Truy cap phan tu
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const cart = document.querySelector(".cart-btn");

// B2: Them su kien mo Cart-Model
cart.addEventListener("click", function () {
  cartModalOverlay.style.transform = "translateX(0%)";
})

/*------Dong Popup gio hang--------*/
// B1: Truy cap phan tu
const closeBtn = document.querySelector("#close-btn");

// B2: Them su kien vao closeBtn dong popup
closeBtn.addEventListener("click", function(){
  cartModalOverlay.style.transform = "translateX(-200%)";
})

// B3: Dong popup khi click ra ngoai Cart-Model
cartModalOverlay.addEventListener("click", function(e){
  if(e.target.classList.contains("cart-modal-overlay")){
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
})

/*------Them san pham gio hang------*/
// B1: Truy cap phan tu
const addToCart = document.querySelectorAll(".add-to-cart");
const productRow = document.querySelectorAll(".product-rows");

// B2: Them su kien click khi nguoi dung click add-to-cart

for(var i = 0; i< addToCart.length; i++) {
  button =  addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event){
  button = event.target; //Get Button
  var cartItem = button.parentElement;

  var price = cartItem.querySelector(".product-price").innerText;
  var imageSrc = cartItem.querySelector(".product-image").src;

  addItemToCart(price, imageSrc)
}

// B3: Them vao Cart-Model
function addItemToCart(price, imageSrc) {
  // Check san pham da ton tai tren gio hang chua ?
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');

  var productRows = document.querySelector(".product-rows");
  var cartImage = document.querySelectorAll('.cart-image');

  for(var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc) {
      alert('San pham da ton tai!');
      return;
    }
  }
  // Them moi san pham len gio hang
  var cartRowItems = `
    <div class="product-row">
    <img class="cart-image" src="${imageSrc}" alt="">
    <span class ="cart-price">${price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove-btn">Remove</button>
    </div>
  `;

  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);

  // Add them 1 event change vo input Cart-Model
  const inputQuantity = productRow.querySelector(".product-quantity");
  inputQuantity.addEventListener("click", changeQuantity);

  // Xoa 1 item vua them
  const btnRemove = document.querySelector(".remove-btn");
  btnRemove.addEventListener("click", removeItem)
  console.log(removeItem);
}

/*-------Thay doi so luong o trong Card Modle----------*/ 
function changeQuantity(){

}


/*--------Xoa item trong gio hang-----------*/ 
function removeItem(){
  
}