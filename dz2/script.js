'use strict';
var price = 0,
	color,
	phones = [
		{
			memory: 32,
			price: 549
		},
		{
			memory: 64,
			price: 649
		},
		{
			memory: 128,
			price: 749
		}
	],
	current = 0,
	budget = undefined,
	closestLeft,
	closestRight,
	closestLeftItem,
	closestRightItem,
	recomended;
var calc = function (budget) {
	for (var i = 0; i < phones.length; i++) {
		current = phones[i].price;
		if (current < budget && (typeof closestLeft === 'undefined' || closestLeft < current)) {
			closestLeft = current;
			closestLeftItem = i;
		} else if (current > budget && (typeof closestRight === 'undefined' || closestRight > current)) {
			closestRight = current;
			closestRightItem = i;
		}
	}
};
do {
	budget = +prompt('Какой у Вас бюджет?', '');
	console.log(budget);
} while (isNaN(budget) || budget === 0);
calc(budget);
if (closestRight !== undefined) {
	recomended = closestRightItem;
} else {
	recomended = closestLeftItem;
}
var ask = confirm('Предлагаем: ' + phones[recomended].memory + 'Gb. Цена: ' + phones[recomended].price + 'USD');
if (ask === false) {
	if (isNaN(closestLeftItem - 1)) {
		alert('Кажется нам нечего Вам предложить =(');
	} else if (isNaN(closestRightItem + 1)) {
		recomended = closestLeftItem - 1;
		ask = confirm('Предлагаем: ' + phones[recomended].memory + 'Gb. Цена: ' + phones[recomended].price + 'USD');
	} else {
		recomended = closestLeftItem;
		ask = confirm('Предлагаем: ' + phones[recomended].memory + 'Gb. Цена: ' + phones[recomended].price + 'USD');
	}
}
if (ask === true) {
	do {
		color = prompt('Выберите цвет телефона', 'black, gold, red');
	} while (color !== 'black' && color !== 'gold' && color !== 'red');
	document.write('<h1>Ваша конфигурация:</h1><b>Объем памяти:</b> ' + phones[recomended].memory + 'Gb</br><b>Цвет:</b> ' + color + '</br>');
	document.write('<img src="img/' + color + '.jpg"></br>');
	document.write('<b>Цена:</b> ' + phones[recomended].price + 'USD</br>');
} else {
	document.write('<h1>Мы старались!</h1>')
}


