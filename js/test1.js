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


