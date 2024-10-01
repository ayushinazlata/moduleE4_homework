// Создать консольное приложение, используя классы, по заданию 4.


// Объявляем класс "Электрические приборы"
class ElectricalAppliances { 
    static instances = [];

    constructor(name, power) {
        this.type = name,
        this.powerConsumtion = power,
        this.powerOnOff = false;
        
        // Добавляем каждый созданный экземпляр в массив
        ElectricalAppliances.instances.push(this);
    }

    powerOn() {
        this.powerOnOff = true;
        console.log(`Прибор ${this.type} включен`);
    };

    powerOff() {
        this.powerOnOff = false;
        console.log(`Прибор ${this.type} выключен`);
    };

    // Функция подсчета мощности
    static calculateTotalPower() {
        let totalPower= 0;

        ElectricalAppliances.instances.forEach(appliance => {
            if (appliance.powerOnOff) {
                totalPower += appliance.powerConsumtion;
            }
        });
        
        return totalPower;
    }

}


// Создаем делегирующую связь для настольной лампы
class DeskLamp extends ElectricalAppliances {
    constructor(name, power, brightness, color) {
        super(name, power);
        this.brightness = brightness,   /* яркость */
        this.colorTemperature = color    /* температура цвета */
    };

    changeBrightness(newBrightnes) {
        this.brightness = newBrightnes;
        console.log(`Яркость изменена на: ${this.brightness}`);
    };

    changeColorTemperature(newColorTemperature) {
        this.ColorTemperature = newColorTemperature;
        console.log(`Температура цвета изменена на: ${this.newColorTemperature}`);
    }

}

// Создаем делегирующую связь для компьютера
class Computer extends ElectricalAppliances {
    constructor(name, power, os, status, ) {
        super(name, power);
        this.typeOS = os,
        this.operatingMode = status
    };

    changeOperatingMode(newStatus) {
        this.operatingMode = newStatus;
        console.log(`Режим работы изменен на: ${this.operatingMode}`);
    };

}


// Создание экземпляров приборов
const deskLamp = new DeskLamp('Настольная лампа', 20, 'яркий', '2000');
const computer = new Computer('Ноутбук', 1500, 'MAC OS', 'разблокирован');

deskLamp.powerOn();
computer.powerOff();

// Подсчитываем общую мощность включенных приборов
const totalPower = ElectricalAppliances.calculateTotalPower();
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);


