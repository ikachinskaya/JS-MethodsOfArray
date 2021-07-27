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
  if (phones[i].inStock === true) {
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
    if (phones[i].inStock === true) {
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
  if (phones.inStock === true) {
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
  return phones.inStock === true;
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
