// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function first_func(a) {
    return function sum(b) {
        return a + b;
    };
}

console.log(first_func(10)(5));