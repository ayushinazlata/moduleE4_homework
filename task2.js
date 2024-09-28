// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function checkString(str, obj) {
    let check = false;     /* сразу говорим, что результат отрицательный */

    for (let key in obj) {
        if (obj.hasOwnProperty(str)) {  /* проверяем, если свойство есть в объекте, то меняем на true */
            check = true;
        }
    }
    return check;
}

const personAyushina = {
    name: 'Zlata',
    lastname: 'Ayushina',
    age: 28,
}

result = checkString('age', personAyushina);    /* true */
// result = checkString('city', personAyushina);   /* false */

console.log(result);