// Constructor de producto
function menu(id, name, description, price, image, category){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
	this.category = category
}

// Platos Típicos Regionales
var menu1 = new menu(1, 'Platos Tipicos Regionales', 'Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson', 8.9, 'img/123.jpg', 'PlatosTipicos');
var menu2 = new menu(2, 'Menu Classic', 'Sandwich: Burger, Fromage, Oignons, Sauce Spéciale + Frites + Boisson', 10.5, 'img/papasancochadaporcion.jpg', 'Guarniciones');
var menu3 = new menu(3, 'Menu Classic', 'Sandwich: Légumes Grillés, Houmous, Salade + Frites + Boisson', 9.5, 'img/procionArrozBlancoAmarillo.png', 'Guarniciones');
var menu4 = new menu(4, 'Menu Classic', 'Mini Burger, Frites, Boisson + Surprise', 5.5, 'img/porcion-ensalada.jpg', 'Guarniciones');		
var menu5 = new menu(5, 'Menu Classic', 'Sandwich: Poulet Grillé, Avocat, Sauce César + Frites + Boisson', 11.0, 'img/4813396.png', 'PlatosTipicos');
var menu6 = new menu(6, 'Menu Classic', 'Dessert: Tarte aux Pommes + Boisson', 4.5, 'img/4813396.png', 'Vinos');
var menu7 = new menu(7, 'Menu Classic', 'Boisson: Soda, Eau, Jus de Fruits', 2.0, 'img/123.jpg', 'PlatosTipicos');
var menu8 = new menu(8, 'Menu Classic', 'Café: Espresso, Cappuccino, Latte', 3.0, 'img/115.jpg', 'PlatosTipicos');
var menu9 = new menu(9, 'Menu Classic', 'Thé: Noir, Vert, Infusion', 2.5, 'img/116.jpg', 'PlatosTipicos');
var menu10 = new menu(10, 'Menu Classic', 'Salade: César, Grecque, Caprese', 7.0, 'img/117.jpg', 'PlatosTipicos');
var menu11 = new menu(11, 'Menu Classic', 'Soupe: Tomate, Légumes, Poulet', 6.0, 'img/118.jpg', 'PlatosTipicos');
var menu12 = new menu(12, 'Menu Classic', 'Pâtes: Carbonara, Boloñesa, Pesto', 8.0, 'img/119.jpg', 'PlatosTipicos');
var menu13 = new menu(13, 'Menu Classic', 'Pizza: Margherita, Pepperoni, Végétarienne', 9.0, 'img/120.jpg', 'PlatosTipicos');

//Guarniciones

var menu14 = new menu(14, 'Menu Wrap', 'Wrap: Poulet, Légumes, Sauce Yaourt', 8.5, 'img/121.jpg', 'Guarniciones');
var menu15 = new menu(15, 'Menu Tacos', 'Tacos: Viande, Légumes, Sauce', 9.0, 'img/122.jpg', 'Guarniciones');
var menu16 = new menu(16, 'Menu Burrito', 'Burrito: Riz, Haricots, Viande, Légumes', 10.0, 'img/123.jpg', 'Guarniciones');
var menu17 = new menu(17, 'Menu Nachos', 'Nachos: Fromage, Jalapeños, Guacamole', 7.5, 'img/124.jpg', 'Guarniciones');
var menu18 = new menu(18, 'Menu Sushi', 'Sushi: Saumon, Avocat, Concombre', 12.0, 'img/125.jpg', 'Guarniciones');													

//Refrescos

var menu19 = new menu(19, 'Menu Dim Sum', 'Dim Sum: Crevettes, Porc, Légumes', 11.0, 'img/126.jpg', 'DimSum');
var menu20 = new menu(20, 'Menu Curry', 'Curry: Poulet, Légumes, Riz', 10.5, 'img/127.jpg', 'Curry');
var menu21 = new menu(21, 'Menu Classic', 'Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson', 8.9, 'img/123.jpg', 'PlatosTipicos');
var menu22 = new menu(22, 'Menu Gourmet', 'Sandwich: Burger, Fromage, Oignons, Sauce Spéciale + Frites + Boisson', 10.5, 'img/456.jpg', 'PlatosTipicos');

//Bebidas Calientes

var menu23 = new menu(23, 'Menu Veggie', 'Sandwich: Légumes Grillés, Houmous, Salade + Frites + Boisson', 9.5, 'img/789.jpg', 'PlatosTipicos');
var menu24 = new menu(24, 'Menu Enfant', 'Mini Burger, Frites, Boisson + Surprise', 5.5, 'img/101.jpg', 'PlatosTipicos');		

//Gaseosas

var menu25 = new menu(25, 'Menu Spécial', 'Sandwich: Poulet Grillé, Avocat, Sauce César + Frites + Boisson', 11.0, 'img/112.jpg', 'PlatosTipicos');
var menu26 = new menu(26, 'Menu Dessert', 'Dessert: Tarte aux Pommes + Boisson', 4.5, 'img/113.jpg', 'Postres');
var menu27 = new menu(27, 'Menu Boisson', 'Boisson: Soda, Eau, Jus de Fruits', 2.0, 'img/114.jpg', 'Bebidas');
var menu28 = new menu(28, 'Menu Café', 'Café: Espresso, Cappuccino, Latte', 3.0, 'img/115.jpg', 'Bebidas');
var menu29 = new menu(29, 'Menu Thé', 'Thé: Noir, Vert, Infusion', 2.5, 'img/116.jpg', 'Bebidas');
var menu30 = new menu(30, 'Menu Salade', 'Salade: César, Grecque, Caprese', 7.0, 'img/117.jpg', 'Ensaladas');

//Cervezas

var menu31 = new menu(31, 'Menu Soupe', 'Soupe: Tomate, Légumes, Poulet', 6.0, 'img/118.jpg', 'Sopas');
var menu32 = new menu(32, 'Menu Pâtes', 'Pâtes: Carbonara, Boloñesa, Pesto', 8.0, 'img/119.jpg', 'Pastas');
var menu33 = new menu(33, 'Menu Pizza', 'Pizza: Margherita, Pepperoni, Végétarienne', 9.0, 'img/120.jpg', 'Pizzas');
var menu34 = new menu(34, 'Menu Wrap', 'Wrap: Poulet, Légumes, Sauce Yaourt', 8.5, 'img/121.jpg', 'Wraps');
var menu35 = new menu(35, 'Menu Tacos', 'Tacos: Viande, Légumes, Sauce', 9.0, 'img/122.jpg', 'Tacos');

// Vinos

var menu36 = new menu(36, 'Menu Burrito', 'Burrito: Riz, Haricots, Viande, Légumes', 10.0, 'img/123.jpg', 'Burritos');
var menu37 = new menu(37, 'Menu Nachos', 'Nachos: Fromage, Jalapeños, Guacamole', 7.5, 'img/124.jpg', 'Nachos');
var menu38 = new menu(38, 'Menu Sushi', 'Sushi: Saumon, Avocat, Concombre', 12.0, 'img/125.jpg', 'Sushi');													
var menu39 = new menu(39, 'Menu Dim Sum', 'Dim Sum: Crevettes, Porc, Légumes', 11.0, 'img/126.jpg', 'DimSum');
var menu40 = new menu(40, 'Menu Curry', 'Curry: Poulet, Légumes, Riz', 10.5, 'img/127.jpg', 'Curry');

// Array de productos
var menuArray = [menu1, menu2, menu3, menu4, menu5, menu6];

// Función para renderizar productos según la categoría
function renderMenu(category) {
	const container = document.getElementById("menu-items");
	container.innerHTML = ""; // limpiar

	menuArray.forEach((item) => {
		if (category === "All" || item.category === category) {
			const newItem = document.createElement("div");
			const newDiv = document.createElement("div");
			const nameH3 = document.createElement("h3");
			const descriptionH5 = document.createElement("h5");
			const priceH4 = document.createElement("h4");
			const image = document.createElement("img");
			const btn = document.createElement("button");
			const icon = document.createElement("span");

			nameH3.textContent = item.name;
			descriptionH5.textContent = item.description;
			priceH4.textContent = "S/ " + item.price;
			image.src = item.image;

			image.className = "img-responsive";
			btn.className = "btn-order";
			newItem.className = "col-sm-6 col-md-4";
			newDiv.className = "menu thumbnail";
			priceH4.className = "price";
			descriptionH5.className = "caption > p";
			icon.className = "glyphicon glyphicon-shopping-cart";

			btn.appendChild(icon);
			btn.appendChild(document.createTextNode(" Commander"));

			newDiv.appendChild(nameH3);
			newDiv.appendChild(image);
			newDiv.appendChild(descriptionH5);
			newDiv.appendChild(priceH4);
			newDiv.appendChild(btn);
			newItem.appendChild(newDiv);
			container.appendChild(newItem);
		}
	});
}

// Esperar a que el DOM cargue para activar la lógica
document.addEventListener("DOMContentLoaded", function () {
	renderMenu("All"); // Mostrar todos al inicio

	document.querySelectorAll(".nav-pills li a").forEach(link => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelectorAll(".nav-pills li").forEach(li => li.classList.remove("active"));
			this.parentElement.classList.add("active");
			const category = this.textContent.trim();
			renderMenu(category === "Menu" ? "All" : category);
		});
	});
});
