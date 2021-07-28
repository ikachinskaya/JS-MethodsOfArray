"use strict";

function Phone(model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        "Panasonic",
        getRandomInt(5000, 50000),
        "black",
        Math.random() >= 0.5
      )
    );
  }

  return newPhones;
}

const phones = getPhones(50);
console.table(phones);

/*1. Посчитать количество моделей телефонов в 
наличии и вывести в консоль 
1.1* Вывести в консоль для каждого элемента массива
строку следующего вида:
'<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>'*/

//===========================================================================
/*Через цикл for*/

for (let i = 0; i < phones.length; i++) {
  if (phones[i].inStock) {
    console.table(
      `${phones[i].manufacturer} ${phones[i].model} со стоимостью ${phones[i].price} сейчас в наличии`
    );
  } else {
    console.table(
      `${phones[i].manufacturer} ${phones[i].model} со стоимостью ${phones[i].price} сейчас нет в наличии`
    );
  }
}

//===========================================================================

/*function callback*/

function callback(phones) {
  let count = 0;
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].inStock) {
      console.table(
        `${phones[i].manufacturer} ${phones[i].model} со стоимостью ${phones[i].price} сейчас в наличии`
      );
      count++;
    } else {
      console.table(
        `${phones[i].manufacturer} ${phones[i].model} со стоимостью ${phones[i].price} сейчас нет в наличии`
      );
    }
  }
  console.log(`Сейчас в наличии ${count} телефонов`);
  return count;
}

callback(phones);
//===========================================================================
/*ForEach*/
let count = 0;
phones.forEach(function callback(phones) {
  if (phones.inStock) {
    console.table(
      `${phones.manufacturer} ${phones.model} со стоимостью ${phones.price} сейчас в наличии`
    );
    count++;
  } else {
    console.table(
      `${phones.manufacturer} ${phones.model} со стоимостью ${phones.price} сейчас нет в наличии`
    );
  }
});
console.log(`Сейчас в наличии ${count} телефонов`);
//===========================================================================

/* 2. Получить массив тех телефонов, которые есть в наличии*/
const phonesInStock = phones.filter(function (phones) {
  return phones.inStock;
});
console.table(phonesInStock);
//===========================================================================

/*3. Получить массив телефонов для праздничной распродажи (черная пятница и т.д)
Всем телефонам которые стоят больше 30000 снизить цену на 30%.*/

const phonesForBlackFriday = phonesInStock.map(function (phones) {
  let setPrice = 0;

  if (phones.price > 30000) {
    setPrice = phones.price - (phones.price * 30) / 100;
    phones.price = setPrice;
  } else {
    phones.price = phones.price;
  }
  return phones;
});
console.table(phonesForBlackFriday);
//===========================================================================

/*advansed*/

/*Отсортировать массив телефонов по цене (от дорогих к дешевым)*/

const phonesSortByPrice = phones.sort(function (a, b) {
  return b.price - a.price;
});

console.table(phonesSortByPrice);

//===========================================================================

/*Создать массивы с строками - именами производителей и массив с возможными цветами телефонов.
Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков*/

/*const manufactures = [
  "Samsung",
  "Apple",
  "Huawei",
  "Meizu",
  "Nokia",
  "Sony",
  "Xiaomi",
];*/

/*const colors = ["black", "red", "white", "pink", "yellow", "grey", "blue"];*/

/*1 вариант*/
function getRandomManufactures(manufactures) {
  manufactures = [
    "Samsung",
    "Apple",
    "Huawei",
    "Meizu",
    "Nokia",
    "Sony",
    "Xiaomi",
  ];
  for (let i = 0; i < manufactures.length; i++) {
    return manufactures[getRandomInt(0, manufactures.length)];
  }
}

function getRandomColors(colors) {
  colors = ["black", "red", "white", "pink", "yellow", "grey", "blue"];
  for (let i = 0; i < colors.length; i++) {
    return colors[getRandomInt(0, colors.length)];
  }
}

function getNewPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        getRandomManufactures(),
        getRandomInt(5000, 50000),
        getRandomColors(),
        Math.random() >= 0.5
      )
    );
  }
  return newPhones;
}

const newPhones = getNewPhones(50);
console.table(newPhones);
//===========================================================================
/*2 вариант */
function getRandomString(array) {
  for (let i = 0; i < array.length; i++) {
    return array[getRandomInt(0, array.length)];
  }
}

const manufactures = [
  "Samsung",
  "Apple",
  "Huawei",
  "Meizu",
  "Nokia",
  "Sony",
  "Xiaomi",
];

const colors = ["black", "red", "white", "pink", "yellow", "grey", "blue"];

function getPhone(amount) {
  const newPhone = [];

  for (let i = 0; i < amount; i++) {
    newPhone.push(
      new Phone(
        `Model ${i}`,
        getRandomString(manufactures),
        getRandomInt(5000, 50000),
        getRandomString(colors),
        Math.random() >= 0.5
      )
    );
  }
  return newPhone;
}

const phoneArray = getPhone(50);
console.table(phoneArray);
