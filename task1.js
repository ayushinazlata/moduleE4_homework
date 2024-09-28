/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и 
значения только собственных свойств. Данная функция не должна возвращать значение. */

function getKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty) {
            console.log(`Ключ: ${key}, значение: ${obj[key]}`);
        }
    }
}

const personAyushina = {
    name: 'Zlata',
    lastname: 'Ayushina',
    age: 28,
}

const userAyushina = Object.create(personAyushina); /* создаем объект с прототипом */
userAyushina.city = 'Moscow';   /* добавляем собственное свойство объекту userAyushina */

getKeys(personAyushina);

