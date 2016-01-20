//attributes of merchandise
function Merch(name, image, price, stock, description) {
	this.name = name;
	this.image = image;
	this.price = price;
	this.stock = stock;
	this.description = description;
}
//push items into this array
var merchandiseArray = []
//merchandise
var catProfile = new Merch('Cat Eyes', 'img/catProfile.jpg', '$29.99', 'yes', '100% Cotton')
var catPower = new Merch('ExCatibur', 'img/catPower.jpg', '$29.99', 'yes', '100% Cotton')
var catDenim = new Merch('Cangaroo', 'img/catDenim.jpg', '$29.99', 'yes', '100% Cotton')
var catDJ = new Merch('DJ Black', 'img/catDJ.jpg', '$29.99', 'yes', '100% Cotton')
var catStorm = new Merch('Cat Storm', 'img/catStorm.jpg', '$29.99', 'yes', '100% Cotton')
var catKarate = new Merch('Carate', 'img/catKarate.jpg', '$29.99', 'yes', '100% Cotton')
var catBlack = new Merch('Cat Black', 'img/catBlack.jpg', '$29.99', 'yes', '100% Cotton')
var mugCats = new Merch('Cats Mug', 'img/mugCats.gif', '$12.99', 'yes', '100% Awesome')
var mugStencil = new Merch('Mug Stencil', 'img/mugStencil.jpg', '$12.99', 'yes', '100% Mug')
//push merchandise into array
merchandiseArray.push(catProfile)
merchandiseArray.push(catPower)
merchandiseArray.push(catDenim)
merchandiseArray.push(catDJ)
merchandiseArray.push(catStorm)
merchandiseArray.push(catKarate)
merchandiseArray.push(catBlack)
merchandiseArray.push(mugCats)
merchandiseArray.push(mugStencil)
//loop through array to display merchandise
for (i = 0; i < merchandiseArray.length; i++) {
	var mName = document.createTextNode(merchandiseArray[i].name)
	var mImage = merchandiseArray[i].image
	var mPrice = document.createTextNode('Price: ' + merchandiseArray[i].price)
	var mStock = document.createTextNode('In Stock: ' + merchandiseArray[i].stock)
	var mDescription = document.createTextNode(merchandiseArray[i].description)
	var mButton = document.createTextNode('Buy Now!')

	var newCol = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH2 = document.createElement('h2')
	var image = document.createElement('img')
	var priceH3 = document.createElement('h3')
	var stockH3 = document.createElement('h3')
	var descriptionH3 = document.createElement('h3')
	var buyNow = document.createElement('button')

	nameH2.appendChild(mName)
	image.src = mImage
	priceH3.appendChild(mPrice)
	stockH3.appendChild(mStock)
	descriptionH3.appendChild(mDescription)
	buyNow.appendChild(mButton)

	newCol.className = 'col-sm-4'
	newDiv.className = 'item' + ' thumbnail'
	image.className = 'img-responsive'
	buyNow.className = 'btn btn-lg'


	newDiv.appendChild(nameH2)
	newDiv.appendChild(image)
	newDiv.appendChild(priceH3)
	newDiv.appendChild(stockH3)
	newDiv.appendChild(descriptionH3)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById('addHere').appendChild(newCol)
}