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
// dùng for để lấy tất cả các nút button rồi add sự kiện click
// Lấy button để người dùng click vào sản phẩm nào ta sẽ biết click vào sản phẩm nào
for(var i = 0; i< addToCart.length; i++) {
  button =  addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event){
  button = event.target; //lấy tất cả nút button
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
// dùng For để xem sản phẩm có hay chưa 
// nếu cartImage trùng imageSrc ( có nghĩa là sản phẩm đã tồn tại)
// lấy toàn bộ ảnh trong kho rồi xem sản phẩm có trùng ko 
  for(var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc) {
      alert('San pham da ton tai!');
      return;
    }
  }
  // Them moi san pham len gio hang
  // tạo 1 biến cartRowItems để chứa tất cả ... ảnh,giá,nút xóa sản phẩm...
  var cartRowItems = `
    <div class="product-row">
    <img class="cart-image" src="${imageSrc}" alt="">
    <span class ="cart-price">${price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove-btn">Remove</button>
    </div>
  `;
//  productRow là thẻ ảo bây giờ ta .innerhtml nó sẽ hiện ra nội dung rồi hiển thị vào biến cartRowItems để hiện thị ra sản phẩm
  productRow.innerHTML = cartRowItems;
  // Thêm phần tử div prodctRow vào phần tử đầu tiên của danh sách productRows ta dùng .append để ghi lại mọi thứ vào productRows
  productRows.append(productRow);

  // Add them 1 event change vào ô input ở Cart-Model
  const inputQuantity = productRow.querySelectorAll(".product-quantity");
  // dùng for để lấy tất cả thẻ input
  for ( var i = 0 ; i < inputQuantity; i++){
    button = inputQuantity[i]
    button.addEventListener('change', changeQuantity)
  }
  updateCartPrice() /*update giá sản phẩm 
  /*-------Thay doi so luong ở trong Card Modle----------*/ 
function changeQuantity(event){
  button = event.target
  if (isNaN(button.value) || button.value <= 0){
    button.value = 1
  }
  // ----- Cập nhật giá tiền --- tính tiền---
  updateCartPrice()
 }
//  Giá sản phẩm và tổng giá sản phẩm
function updateCartPrice(){
  const prodctRow = document.querySelectorAll('.product-row')
 let total = 0 
 for ( var i = 0; i < productRow.length; i +=2){
  cartRow = productRow[i] 
  /* productRow lấy giá sản phẩm */
  var priceElement = cartRow.querySelector(".cart-price")
  var quantityElement = cartRow.querySelector(".product-quantity")
  var price = parseFloat(priceElement.innerText.replace('$' , '' )) 
  /* parseFloat dùng để xóa dấu đô-la $ ở giá tiền */
  var quantity = quantityElement.value
  /* quantityElement.value để lấy số lượng */
  total = total + (price * quantity)
  let totalPrice  = document.querySelector('.total-price')
 totalPrice.innerHTML = `$ ${total}`

 }
//  
 const totalCart = document.querySelector('#cart')
 totalCart.textContent = i/2
}
  // Xóa sản phẩm vừa thêm
  const btnRemove = document.querySelectorAll(".remove-btn");
  for (var i = 0; i < btnRemove.length; i++){
 button = btnRemove[i]
 button.addEventListener('click', removeItem)
 
  }
}
/*--------Xoa item trong gio hang-----------*/ 
  function removeItem(event){
  var btnRemoveItem = event.target;
  //  ta sẽ .parentElement để lấy class cha để remove tất cả trong thẻ cha
  btnRemoveItem.parentElement.remove()
  updateCartPrice() /*update giá sản phẩm */
}




