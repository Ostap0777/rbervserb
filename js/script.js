

const initialProducts = [
	{id: 1, name: 'Бургер', price: 30.00, imageSrc: "img/p_O.jpg"},
	{id: 2, name: 'Великі суші', price: 100.00, imageSrc: "img/0001-set-kioto-2.avif"},
	{id: 3, name: 'картопля відбивна', price: 50.00, imageSrc: "img/shnicel1.jpg"},
	{id: 4, name: 'суші риба', price: 200.00, imageSrc: "img/sushi-6715579_1280.jpg"}
 ];
 
let cartItems = [];

let addButtonCart = document.querySelectorAll('.add-to-cart-btn')



addButtonCart.forEach(function(button) {
	button.addEventListener('click', function() {
		let productId = button.dataset.id;
		let isInCart = cartItems.some(function (item) {
	    return	item.id === productId;
		})
		if(!isInCart) {
			let selectedProduct = initialProducts.find(function(product) {
				return product.id === productId
			})
			if(selectedProduct) {
				cartItems.push(selectedProduct);
			}
		}
	})
})

function updateCartView() {
	let cartContainer = document.getElementById('cart-items');
	let totalPriceElement = document.getElementById('total-price');
	let totalPrice = 0;

	cartContainer.innerHTML = '';

	cartItems.forEach(function(item) {
		 let itemDiv = document.createElement('div');
		 itemDiv.classList.add('cart-item');

		 let itemImage = document.createElement('img');
		 itemImage.src = item.imageSrc;
		 itemDiv.appendChild(itemImage);

		 let itemDetails = document.createElement('span');
		 itemDetails.textContent = `${item.name} - $${item.price.toFixed(2)}`;
		 itemDiv.appendChild(itemDetails);

		 let deleteButton = document.createElement('button');
		 deleteButton.classList.add('btn__x');  
		 deleteButton.textContent = 'X';
		 deleteButton.addEventListener('click', function() {
			  removeItemFromCart(item.id);
		 });
		 itemDiv.appendChild(deleteButton);

		 cartContainer.appendChild(itemDiv);

		 totalPrice += item.price;
	});

	totalPriceElement.textContent = `Загальна сума $${totalPrice.toFixed(2)}`;
}

function removeItemFromCart (productId) {
	const index = cartItems.findIndex(function(item) {
     return item.id === productId
	})
	if(index !== -1) {
		cartItems.splice(index,1);
		updateCartView()
	}

}

console.log('hi')
