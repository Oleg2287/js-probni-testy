// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const produkt of products){
//     if (produkt.name === productName){
//       return produkt.price
//           }
//   }
//   return null
//   }
// console.log(getProductPrice("Droid"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const title = [];
//     for (const produkt of products) {
//         if (produkt[propName] === undefined) {
//             continue;
//         }
//       title.push(produkt[propName])
//         }
//   return title;
// }
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("category")); // [] - не знайдено жодного

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const produkt of products){
//        if (produkt.name === productName){
//       const total = produkt.price * produkt.quantity;
//       return total;
//     }
//   }
//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Engine")); // Product Engine not found!
// console.log(calculateTotalPrice("Scanner")); // 8100


// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив []
// Значення властивості getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"
// Виклик методу atTheOldToad.addPotion("Power potion") повертає рядок "Adding Power potion"

// const atTheOldToad = {
//   potions: [],
//   getPotions(){
//     return "List of all available potions"
//   },
//   addPotion(potionName){
//     return `Adding ${potionName}`
//   }
// }

// console.log(atTheOldToad.getPotions()); // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return "List of all available potions";
//   },
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions()); // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Після виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility"]
// Після виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Adding ${potionName}`;
//   },
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     return this.potions.reduce((total, potion) => total + potion.price, 0);
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// console.log(atTheOldToad.getPotions()); // [{"name": "Speed potion", "price": 460}, {"name": "Stone skin", "price": 520}]
// console.log(atTheOldToad.updatePotionName("Speed potion", "Swift potion")); // undefined
// console.log(atTheOldToad.getPotions()); // [{"name": "Swift potion", "price": 460}, {"name": "Stone skin", "price": 520}]

// function foo(...args) {
// 	console.log(args);
// }
// foo("a", "b", 3, 5, "fd", "Fdgs");

// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

// Оголошена функція add
// Функція add оголошує параметр args
// Для збирання аргументів у змінну args у підписі функції використовується синтаксис залишкових параметрів
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78

// function add(...args) {
//     let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 2, 3, 4)); // 10

// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму
// Оголошена функція addOverNum()
// Функція addOverNum приймає наступні параметри: value, ...args
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args){
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }


// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218

// console.log(...[1, 2, 3]);

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// Оголошена функція getExtremeScores(scores)
// Виклик функції getExtremeScores([89, 64, 42, 17, 93, 51, 26]) повертає об'єкт { best: 93, worst: 17 }
// Виклик функції getExtremeScores([19, 7, 4, 17, 81, 24]) повертає об'єкт { best: 81, worst: 4 }
// Для передачі аргументів методам Math.max() і Math.min() використовується синтаксис ... на масиві scores

// function getExtremeScores(scor) {
//   return {
//     best: Math.max(...scor),
//     worst: Math.min(...scor),
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }

// const lastWeekTemps = [14, 25, 11];
// const newapple = "apple";
// const newbanana = "banana";
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...newbanana, ...newapple];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ... thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14

// const objA = {
// 	x: 1,
// 	y: 2,
// };

// const objB = {
// 	y: 3,
// };

// const result = {
// 	x: 5,
// 	...objA,
// 	y: 10,
// 	... objB,
// 	z: 15
// }
// console.log(result); // { x: 5, y: 3, z: 15 }


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings); // { theme: "light", public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30 }


// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;
// console.log(result); // "Your pizza is being prepared, please wait."
// console.log(pointer); // "Your pizza is being prepared, please wait."

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// console.log(greet("Oleg"));
// console.log(notify("Oleg"));
// console.log(registerGuest("Oleg", greet));

// const user = {
//   name: "Peter",
//   age: 30,
//   pet: "cat",
//   "Wether is good": false,
// };

// console.log(user["Wether is good"]);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName.trim());
// }
// console.log(makeMessage("Royal     ", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Royal Grand    ", deliverPizza)); // "Delivering Royal Grand pizza."


// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент. Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName. ТЕСТИ Оголошена функція makePizza Функція makePizza приймає два параметри Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName
// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName
// Sider Fusion
// Дякую за опис задачі! Ось як слід доповнити виклик функції makePizza, передавши їй інлайн колбек, який викликає eatPizza і передає йому pizzaName:

// js
// makePizza("Ultracheese", (pizzaName) => {
//   eatPizza(pizzaName);
// });
// Це створює інлайн функцію-колбек, яка викликає eatPizza і передає їй отримане pizzaName. Тепер виклик makePizza з цим колбеком реалізований правильно і відповідатиме вимогам.

// Якщо потрібно, можу додати повний приклад з оголошенням makePizza для ясності.

// function makePizza(pizzaName, callback) { console.log(`Pizza ${pizzaName} is being prepared, please wait...`); callback(pizzaName); } makePizza("Royal Grand", function deliverPizza(pizzaName) { console.log(`Delivering pizza ${pizzaName}`); }); makePizza("Ultracheese");
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese"); поправ цей код
// Sider Fusion
// Згідно з завданням, функція makePizza має бути викликана вдруге з інлайн колбеком, який викликає eatPizza. Оскільки в даному коді немає функції eatPizza, потрібно або додати цю функцію, або просто передати інлайн колбек, який логуватиме "Eating pizza <назва піци>".

// Я пропоную вам таке виправлення:

// Визначити функцію eatPizza, якщо вона потрібна для тестів.
// Виправити виклик makePizza("Ultracheese"), додавши інлайн колбек, що логуватиме "Eating pizza <назва піци>".
// Ось виправлений код:

// js

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }


// function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// }


// makePizza("Ultracheese", function(pizzaName) {
//   eatPizza(pizzaName);
// });


// makePizza("Ultracheese", function(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// Оголошена функція calculateTotalPrice(orderedItems)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function filterArray(numbers, value) {
//   const filteredArray = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   });
//   return filteredArray;
// }

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100)); // 500


// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]


// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const changeEven = (numbers, value) => {
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }