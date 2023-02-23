//let board = document.querySelector('.board');
//let activeLetters = document.querySelector('.activeLetters');
//let gameMenu = document.querySelector('.game-menu')
//let allLetters = document.querySelector('.allLetters');
//let stepPoint = document.querySelector('.stepPoint > p');
//let coinPoint = document.querySelector('.coinPoint > p');
//let firstLetter = document.querySelector('.firstLetter');
//let message = document.querySelector('.message');
//let messageText = document.querySelector('.message > p');
//let messageOk = document.querySelector('.message > button');
//let categories = document.querySelector('.categories');
//let category = document.querySelectorAll('.category');
//let animals = ['img/animals/bear.avif','img/animals/camel.avif','img/animals/cat.avif','img/animals/chicken.avif','img/animals/deer.avif','img/animals/dog.avif','img/animals/duck.avif','img/animals/elephant.avif','img/animals/fox.avif','img/animals/giraffe.avif','img/animals/gorilla.avif','img/animals/horse.avif','img/animals/kangaroo.avif','img/animals/koala.avif','img/animals/lion.avif','img/animals/monkey.avif','img/animals/mouse.avif','img/animals/panda.avif','img/animals/penguin.avif','img/animals/pig.avif','img/animals/rabbit.avif','img/animals/shark.avif','img/animals/sheep.avif','img/animals/snake.avif','img/animals/squirell.avif','img/animals/tiger.avif','img/animals/wolf.avif','img/animals/zebra.avif'];
//
//
//let names = ['BEAR', 'CAMEL', 'CAT','CHICKEN', 'DEER', 'DOG', 'DUCK', 'ELEPHANT','FOX', 'GIRAFFE', 'GORILLA','HORSE', 'KANGAROO', 'KOALA', 'LION', 'MONKEY','MOUSE','PANDA', 'PENGUIN', 'PIG','RABBIT', 'SHARK', 'SHEEP', 'SNAKE', 'SQUIRELL','TIGER','WOLF','PANDA'];
//
//let picIndex = 0;
//let nameIndex = 0;
//let step = 5;
//let coin = 2;
//let letterAll, innerBoardAll, checkAll;
//stepPoint.innerHTML = `${step}`
//coinPoint.innerHTML = `${coin}`
//let result = [];
//
//
//function $() {
//	return false;
//}
//
//
//category[0].onclick = () => {
//	categories.style.display = 'none';
//}
//
//
//
//
//
//
//play.onclick = () => gameMenu.style.display = 'none'
//function newGame() {
//	board.style.background = `url(${animals[picIndex]})`;
//	for (let i = 0; i < names[nameIndex].length; i++) {
//		let letter = document.createElement('div');
//		letter.className = 'letter';
//		activeLetters.appendChild(letter);
//		letter.setAttribute('style', `--i:${i}`);
//		letterAll = document.querySelectorAll('.letter');
//	}
//	innerBoardAll.forEach(item => item.style.pointerEvents = 'unset')
//	for (let i = 0; i < letterAll.length; i++) {
//		letterAll[i].onclick = () => {
//			if (letterAll[i + 1].innerText == '') {
//				letterAll[i].innerText = '';
//				x--;
//				result.pop();
//			}
//		}
//	}
//	firstLetter.classList.remove('active');
//}
//
//
//
//
//
//for (let i = 0; i < 30; i++) {
//	let innerBoard = document.createElement('div');
//	innerBoard.className = 'innerBoard';
//	board.appendChild(innerBoard);
//	innerBoardAll = document.querySelectorAll('.innerBoard');
//	innerBoard.onclick = () => {
//		innerBoard.style.pointerEvents = 'none'
//		step--
//		stepPoint.innerHTML = `${step}`
//		if (step < 0) {
//			$();
//			stepPoint.innerHTML = `0`;
//		} else {
//			innerBoard.style.opacity = 0
//		}
//	}
//}
//
//let x = 0;
//for (let i = 65; i <= 90; i++) {
//	let check = document.createElement('div');
//	check.className = 'check';
//	allLetters.appendChild(check);
//	check.innerText = String.fromCharCode(i);
//	checkAll = document.querySelectorAll('.check');
//	check.onclick = () => {
//		result.push(check.innerText);
//		letterAll[x].innerText = check.innerText;
//		x++;
//		if (x == names[nameIndex].length && result.join('') === names[nameIndex]) {
//			for (let i = 0; i < innerBoardAll.length; i++) {
//				innerBoardAll[i].style.opacity = 0;
//				innerBoardAll[i].style.pointerEvents = 'none';
//			}
//			setTimeout(() => {
//				letterAll.forEach(item => item.style.opacity = 0);
//			}, 1000)
//			setTimeout(() => {
//				innerBoardAll.forEach(item => item.style.opacity = 1);
//				activeLetters.innerHTML = '';
//				picIndex++;
//				nameIndex++;
//				result = [];
//				x = 0;
//				step = 5;
//				stepPoint.innerHTML = `${step}`
//				coin += 2;
//				coinPoint.innerHTML = `${coin}`
//			}, 2000);
//			setTimeout(() => {
//				newGame();
//				letterAll.forEach(item => item.style.opacity = 1);
//			}, 3500);
//		} else if (x == names[nameIndex].length && result.join('') !== names[nameIndex]) {
//			x = 0;
//			result = [];
//			coin -= 2;
//			coinPoint.innerText = `${coin}`;
//			if (coin < 0) {
//				coinPoint.innerText = `0`;
//				message.style.display = 'flex';
//				messageText.innerText = 'GAME OVER! do you have a start new game';
//				messageOk.innerText = 'Yes';
//				messageOk.onclick = () => {
//					window.location.reload();
//				}
//			}
//			for (let i = 0; i < checkAll.length; i++) {
//				checkAll[i].style.pointerEvents = 'none';
//				setTimeout(() => {
//					checkAll[i].style.pointerEvents = 'unset'
//				}, 1000)
//			}
//			for (let i = 0; i < letterAll.length; i++) {
//				letterAll[i].classList.add('shake');
//				next.disabled = true;
//				setTimeout(() => {
//					letterAll[i].innerText = '';
//					letterAll[i].classList.remove('shake');
//					next.disabled = false;
//				}, 1000)
//			}
//		}
//	}
//}
//
//next.onclick = () => {
//	if (coin >= 20) {
//		coin -= 20;
//		coinPoint.innerHTML = `${coin}`
//		next.disabled = true;
//		for (let i = 0; i < names[nameIndex].length; i++) {
//			letterAll[i].innerText = names[nameIndex][i];
//		}
//		innerBoardAll.forEach(item => item.style.opacity = 0);
//		setTimeout(() => {
//			letterAll.forEach(item => item.style.opacity = 0);
//		}, 1000)
//		setTimeout(() => {
//			innerBoardAll.forEach(item => item.style.opacity = 1);
//			activeLetters.innerHTML = '';
//			picIndex++;
//			nameIndex++;
//			result = [];
//			x = 0;
//			step = 5;
//			stepPoint.innerHTML = `${step}`
//			coin += 2;
//			coinPoint.innerHTML = `${coin}`
//		}, 2000);
//		setTimeout(() => {
//			newGame();
//			letterAll.forEach(item => item.style.opacity = 1);
//			next.disabled = false;
//		}, 3500)
//	} else {
//		message.style.display = 'flex';
//		messageText.innerText = 'you must have 20 coins to take advantage of the feature';
//	}
//}
//
//newGame()
//
//firstLetter.onclick = () => {
//	if (coin >= 10) {
//		coin -= 10;
//		coinPoint.innerHTML = `${coin}`
//		result.push(names[nameIndex][0]);
//		firstLetter.classList.add('active');
//		letterAll[0].innerText = names[nameIndex][0];
//		x++;
//	} else {
//		message.style.display = 'flex';
//		messageText.innerText = 'you must have 10 coins to take advantage of the feature';
//	}
//}
//
//messageOk.onclick = () => message.style.display = 'none';











let board = document.querySelector('.board');
let activeLetters = document.querySelector('.activeLetters');
let gameMenu = document.querySelector('.game-menu')
let allLetters = document.querySelector('.allLetters');
let stepPoint = document.querySelector('.stepPoint > p');
let coinPoint = document.querySelector('.coinPoint > p');
let firstLetter = document.querySelector('.firstLetter');
let message = document.querySelector('.message');
let messageText = document.querySelector('.message > p');
let messageOk = document.querySelector('.message > button');
let categories = document.querySelector('.categories');
let category = document.querySelectorAll('.category');
let animals = ['img/animals/bear.avif','img/animals/camel.avif','img/animals/cat.avif','img/animals/chicken.avif','img/animals/deer.avif','img/animals/dog.avif','img/animals/duck.avif','img/animals/elephant.avif','img/animals/fox.avif','img/animals/giraffe.avif','img/animals/gorilla.avif','img/animals/horse.avif','img/animals/kangaroo.avif','img/animals/koala.avif','img/animals/lion.avif','img/animals/monkey.avif','img/animals/mouse.avif','img/animals/panda.avif','img/animals/penguin.avif','img/animals/pig.avif','img/animals/rabbit.avif','img/animals/shark.avif','img/animals/sheep.avif','img/animals/snake.avif','img/animals/squirell.avif','img/animals/tiger.avif','img/animals/wolf.avif','img/animals/zebra.avif'];


let animalsNames = ['BEAR', 'CAMEL', 'CAT','CHICKEN', 'DEER', 'DOG', 'DUCK', 'ELEPHANT','FOX', 'GIRAFFE', 'GORILLA','HORSE', 'KANGAROO', 'KOALA', 'LION', 'MONKEY','MOUSE','PANDA', 'PENGUIN', 'PIG','RABBIT', 'SHARK', 'SHEEP', 'SNAKE', 'SQUIRELL','TIGER','WOLF','PANDA'];

let fruits = ['img/fruits/apple.avif','img/fruits/apricot.avif','img/fruits/avocado.avif','img/fruits/banana.avif','img/fruits/blueberry.avif','img/fruits/cheery.avif','img/fruits/coconut.avif','img/fruits/grape.avif','img/fruits/grapefruit.avif','img/fruits/guava.avif','img/fruits/kiwi.avif','img/fruits/mandarine.avif','img/fruits/mango.avif','img/fruits/olive.avif','img/fruits/orange.avif','img/fruits/papaya.avif','img/fruits/peach.avif','img/fruits/pear.avif','img/fruits/pineapple.avif','img/fruits/plum.avif','img/fruits/pomegranate.avif','img/fruits/strawbeery.avif','img/fruits/watermelon.avif'];

let fruitsNames = ['APPLE','APRICOT','AVOCADO','BANANA','BLUEBERRY','CHEERY','COCONUT','GRAPE','GRAPEFRUIT','GUAVA','KIWI','MANDARINE','MANGO','OLIVE','ORANGE','PAPAYA','PEACH','PEAR','PINEAPPLE','PLUM','POMEGRANATE','STRAWBEERY','WATERMELON'];

let vegetables = ['img/vegetables/beet.avif','img/vegetables/broccoli.avif','img/vegetables/cabbage.avif','img/vegetables/carrot.avif','img/cauliflower/beet.avif','img/vegetables/chili.avif','img/vegetables/corn.avif','img/vegetables/cucumber.avif','img/vegetables/eggplant.avif','img/vegetables/garlic.avif','img/vegetables/leek.avif','img/vegetables/lemon.avif','img/vegetables/lettuce.avif','img/vegetables/lime.avif','img/vegetables/mushroom.avif','img/vegetables/onion.avif','img/vegetables/pea.avif','img/vegetables/pepper.avif','img/vegetables/potato.avif','img/vegetables/pumpkin.avif','img/vegetables/radish.avif','img/vegetables/spinach.avif','img/vegetables/tomato.avif','img/vegetables/yam.avif','img/vegetables/zucchini.avif'];

let vegetablesNames = ['BEET','BROCCOLI','CABBAGE','CARROT','CAULIFLOWER','CHILI','CORN','CUCUMBER','EGGPLANT','GARLIC','LEEK','LEMON','LETTUCE','LIME','MUSHROOM','ONION','PEA','PEPPER','POTATO','PUMPKIN','RADISH','SPINACH','TOMATO','YAM','ZUCCHINI'];



let picIndex = 0;
let nameIndex = 0;
let step = 5;
let coin = 2;
let x = 0;
let letterAll, innerBoardAll, checkAll;
stepPoint.innerHTML = `${step}`
coinPoint.innerHTML = `${coin}`
let result = [];


function $() {
	return false;
}
play.onclick = () => gameMenu.style.display = 'none'

category[0].onclick = () => {
	categories.style.display = 'none';
	game(animals,animalsNames)
}

category[1].onclick = () => {
	categories.style.display = 'none';
	game(fruits,fruitsNames)
}

category[2].onclick = () => {
	categories.style.display = 'none';
	game(vegetables,vegetablesNames)
}

for (let i = 0; i < 30; i++) {
	let innerBoard = document.createElement('div');
	innerBoard.className = 'innerBoard';
	board.appendChild(innerBoard);
	innerBoardAll = document.querySelectorAll('.innerBoard');
	innerBoard.onclick = () => {
		innerBoard.style.pointerEvents = 'none'
		step--
		stepPoint.innerHTML = `${step}`
		if (step < 0) {
			$();
			stepPoint.innerHTML = `0`;
		} else {
			innerBoard.style.opacity = 0
		}
	}
}

function game(arr,arrName) {
	function newGame() {
	board.style.background = `url(${arr[picIndex]})`;
	for (let i = 0; i < arrName[nameIndex].length; i++) {
		let letter = document.createElement('div');
		letter.className = 'letter';
		activeLetters.appendChild(letter);
		letter.setAttribute('style', `--i:${i}`);
		letterAll = document.querySelectorAll('.letter');
	}
	innerBoardAll.forEach(item => item.style.pointerEvents = 'unset')
	for (let i = 0; i < letterAll.length; i++) {
		letterAll[i].onclick = () => {
			if (letterAll[i + 1].innerText == '') {
				letterAll[i].innerText = '';
				x--;
				result.pop();
			}
		}
	}
	firstLetter.classList.remove('active');
}



for (let i = 65; i <= 90; i++) {
	let check = document.createElement('div');
	check.className = 'check';
	allLetters.appendChild(check);
	check.innerText = String.fromCharCode(i);
	checkAll = document.querySelectorAll('.check');
	check.onclick = () => {
		result.push(check.innerText);
		letterAll[x].innerText = check.innerText;
		x++;
		if (x == arrName[nameIndex].length && result.join('') === arrName[nameIndex]) {
			for (let i = 0; i < innerBoardAll.length; i++) {
				innerBoardAll[i].style.opacity = 0;
				innerBoardAll[i].style.pointerEvents = 'none';
			}
			setTimeout(() => {
				letterAll.forEach(item => item.style.opacity = 0);
			}, 1000)
			setTimeout(() => {
				innerBoardAll.forEach(item => item.style.opacity = 1);
				activeLetters.innerHTML = '';
				picIndex++;
				nameIndex++;
				result = [];
				x = 0;
				step = 5;
				stepPoint.innerHTML = `${step}`
				coin += 2;
				coinPoint.innerHTML = `${coin}`
			}, 2000);
			setTimeout(() => {
				newGame();
				letterAll.forEach(item => item.style.opacity = 1);
			}, 3500);
		} else if (x == arrName[nameIndex].length && result.join('') !== arrName[nameIndex]) {
			x = 0;
			result = [];
			coin -= 2;
			coinPoint.innerText = `${coin}`;
			if (coin < 0) {
				coinPoint.innerText = `0`;
				message.style.display = 'flex';
				messageText.innerText = 'GAME OVER! do you have a start new game';
				messageOk.innerText = 'Yes';
				messageOk.onclick = () => {
					window.location.reload();
				}
			}
			for (let i = 0; i < checkAll.length; i++) {
				checkAll[i].style.pointerEvents = 'none';
				setTimeout(() => {
					checkAll[i].style.pointerEvents = 'unset'
				}, 1000)
			}
			for (let i = 0; i < letterAll.length; i++) {
				letterAll[i].classList.add('shake');
				next.disabled = true;
				setTimeout(() => {
					letterAll[i].innerText = '';
					letterAll[i].classList.remove('shake');
					next.disabled = false;
				}, 1000)
			}
		}
	}
}

next.onclick = () => {
	if (coin >= 20) {
		coin -= 20;
		coinPoint.innerHTML = `${coin}`
		next.disabled = true;
		for (let i = 0; i < arrName[nameIndex].length; i++) {
			letterAll[i].innerText = arrName[nameIndex][i];
		}
		innerBoardAll.forEach(item => item.style.opacity = 0);
		setTimeout(() => {
			letterAll.forEach(item => item.style.opacity = 0);
		}, 1000)
		setTimeout(() => {
			innerBoardAll.forEach(item => item.style.opacity = 1);
			activeLetters.innerHTML = '';
			picIndex++;
			nameIndex++;
			result = [];
			x = 0;
			step = 5;
			stepPoint.innerHTML = `${step}`
			coin += 2;
			coinPoint.innerHTML = `${coin}`
		}, 2000);
		setTimeout(() => {
			newGame();
			letterAll.forEach(item => item.style.opacity = 1);
			next.disabled = false;
		}, 3500)
	} else {
		message.style.display = 'flex';
		messageText.innerText = 'you must have 20 coins to take advantage of the feature';
	}
}

newGame()

firstLetter.onclick = () => {
	if (coin >= 10) {
		coin -= 10;
		coinPoint.innerHTML = `${coin}`
		result.push(arrName[nameIndex][0]);
		firstLetter.classList.add('active');
		letterAll[0].innerText = arrName[nameIndex][0];
		x++;
	} else {
		message.style.display = 'flex';
		messageText.innerText = 'you must have 10 coins to take advantage of the feature';
	}
}

}






messageOk.onclick = () => message.style.display = 'none';






















