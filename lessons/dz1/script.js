'use strict';
var memory, price, color, img_color;
do {
	memory = +prompt('Выберите желаемый объем памяти телефона', '16, 32 или 64 Гб');
} while (memory !== 16 && memory !== 32 && memory !== 64 && memory !== 0);
switch (memory) {
	case 16:
		price = 650;
		break;
	case 32:
		price = 750;
		break;
	case 64:
		price = 850;
		break;
	case 0:
		break;
}
if (memory !== 0) {
	do {
		color = prompt('Выберите цвет', 'черный, красный, золотой');
	} while (color !== 'красный' && color !== 'черный' && color !== 'золотой' && color !== null);
	switch (color) {
		case 'черный':
			img_color = 'black';
			break;
		case 'красный':
			img_color = 'red';
			price = price + 100;
			break;
		case 'золотой':
			img_color = 'gold';
			break;
		case null:
			break;
	}
}
if (memory == 0 || color == null) {
	document.write('Нам жаль, что Вам ничего не надо =(')
} else {
	document.write('<h1>Вы выбрали:</h1>' + 'Объем памяти: <b>' + memory + 'Гб</b></br>' + 'Цвет: <b>' + color + '</b></br>');
	document.write('<img src="img/' + img_color + '.jpg"></br>');
	document.write('Цена телефона: <b>' + price + 'USD</b>');
}
console.log('memory: ' + memory);
console.log('color: ' + color);
console.log('price: ' + price);

