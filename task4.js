// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)


// Объявляем родительскую функцию "Электрические приборы"
function ElectricalAppliances(name, power) { 
    this.type = name,
    this.powerConsumtion = power,
    this.powerOnOff = false;
}


// Методы для включения/выключения приборов
ElectricalAppliances.prototype.powerOn = function() {
    this.powerOnOff = true;
    console.log(`Прибор ${this.type} включен`);
}

ElectricalAppliances.prototype.powerOff = function() {
    this.powerOnOff = false;
    console.log(`Прибор ${this.type} выключен`);
}


// Создаем функцию-конструктор для настольной лампы
function DeskLamp(name, power, brightness, color) {
    this.type = name,
    this.powerConsumtion = power,   /* потребляемая мощность */
    this.brightness = brightness,   /* яркость */
    this.colorTemperature = color    /* температура цвета */
}

DeskLamp.prototype = new ElectricalAppliances()

/* Метод для настольной лампы */
DeskLamp.prototype.changeBrightness = function(newBrightnes) {  /* изменение яркости */
    this.brightness = newBrightnes;
    console.log(`Яркость изменена на: ${this.brightness}`);
}

DeskLamp.prototype.changeColorTemperature = function(newColorTemperature) {  /* изменение температуры цвета */
    this.ColorTemperature = newColorTemperature;
    console.log(`Температура цвета изменена на: ${this.newColorTemperature}`);
}


// Создаем функцию-конструктор для компьютера
function Computer(type, power, os, status) {
    this.type = type,
    this.powerConsumtion = power,
    this.typeOS = os,
    this.operatingMode = status
}

// Создаем делегирующую связь с компьютером
Computer.prototype = new ElectricalAppliances()

/* Метод для компьютера */
Computer.prototype.changeOperatingMode = function(newStatus) {  /* изменение режима работы (разблокирован/заблокирован/спящий режим) */
    this.operatingMode = newStatus;
    console.log(`Режим работы изменен на: ${this.operatingMode}`);
}


// Функция подсчета мощности
function calculateTotalPower(appliances) {
    let totalPower = 0;
    
    appliances.forEach(appliance => {
        if (appliance.powerOnOff) {
            totalPower += appliance.powerConsumtion;
        }
    });
    
    return totalPower;
}

// Создание экземпляров приборов
const deskLamp = new DeskLamp('Настольная лампа', 20, 'яркий', '2000');
const computer = new Computer('Ноутбук', 1500, 'MAC OS', 'разблокирован');

deskLamp.powerOn();
computer.powerOff();

// Помещаем все приборы в массив
const appliances = [deskLamp, computer];

// Подсчитываем общую мощность включенных приборов
const totalPower = calculateTotalPower(appliances);
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);







/* // Подсчет потребляемой мощности
function totalPower(){
    for (let n ElectricalAppliances.arguments.) {
        if (key )
    }

 */