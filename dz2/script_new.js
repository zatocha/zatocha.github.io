var budget,
	memory,
	price,
	current = 0,
	closestLeft,
	closestRight;

var phones =[
	{
		memory: 32,
		price: 649
	},
	{
		memory: 64,
		price: 749
	},
	{
		memory: 128,
		price: 849
	}
];

var calc = function (budget) {
	while (closestRight !== current) {
		for (var i = 0; i < phones.length; i++) {
			current = phones[i].price;
			if (current < budget && (closestLeft === undefined || closestLeft < current)) {
				closestLeft = current;
			} else if (current > budget && (closestRight === undefined || closestRight > current)) {
				closestRight = current;
			}
			return current = closestRight;
		}
		if (closestRight === undefined) {
			return current = closestLeft;
			// break;
		}

		if (budget === null || budget === 0) {
			console.error(ask);
			alert('ПЕЧЕЛЬКА');
			break;
		}
	}
};
budget = prompt('Ваш бюджет:','');
calc(budget);
alert(current);





// // while (closestRight !== current) {
// for (var i = 0; i < phones.length; i++) {
// 	current = phones[i].price;
// 	if (current < budget && (closestLeft === undefined || closestLeft < current)) {
// 		closestLeft = current;
// 	} else if (current > budget && (closestRight === undefined || closestRight > current)) {
// 		closestRight = current;
// 	}
// 	current = closestRight;
// }
// if (closestRight === undefined) {
// 	current = closestLeft;
// 	// break;
// }
//
// if (budget === null || budget === 0) {
// 	console.error(budget);
// 	alert('ПЕЧЕЛЬКА');
// 	// break;
// }
// // }

// console.log('Предлагаем : ' + current);
// for (var z = 0; z < phones.length; z++) {
// 	if (current === phones[z].price) {
// 		confirm('Предлагаем: ' + phones[z].memory + 'Gb. Цена: ' + phones[z].price + 'USD');
// 		// break
// 	}
// }
//
//
//
//
// console.log('Введено: ' + budget);
// console.log('Предлагаем : ' + current);
// console.log('left: ' + closestLeft);
// console.log('right: ' + closestRight);
// document.write('Рекомендуем модель с ' + phones[z].memory + 'ГБ памяти. Цена: ' + phones[z].price + 'USD');




































/*








 var price = 0;
 var color = ['black', 'silver', 'gold'];
 var phones = [
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
 ];
 var current = 0,
 closestLeft,
 closestRight;

 var calc = function (budget) {
 // while (closestRight !== current) {
 for (var i = 0; i < phones.length; i++) {
 current = phones[i].price;
 if (current < budget && (closestLeft === undefined || closestLeft < current)) {
 closestLeft = current;
 } else if (current > budget && (closestRight === undefined || closestRight > current)) {
 closestRight = current;
 }
 current = closestRight;
 }
 if (closestRight === undefined) {
 current = closestLeft;
 // break;
 }

 if (budget === null || budget === 0) {
 console.error(budget);
 alert('ПЕЧЕЛЬКА');
 // break;
 }
 // }
 };

 var budget = prompt('Сколько денег у Вас на покупку?', '');
 calc(budget);

 console.log('Предлагаем : ' + current);
 for (var z = 0; z < phones.length; z++) {
 if (current === phones[z].price) {
 confirm('Предлагаем: ' + phones[z].memory + 'Gb. Цена: ' + phones[z].price + 'USD');
 // break
 }
 }




 console.log('Введено: ' + budget);
 console.log('Предлагаем : ' + current);
 console.log('left: ' + closestLeft);
 console.log('right: ' + closestRight);
 document.write('Рекомендуем модель с ' + phones[z].memory + 'ГБ памяти. Цена: ' + phones[z].price + 'USD');

 */