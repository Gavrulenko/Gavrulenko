//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання. 
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.

//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//*варіант1

//function greet() {
//    return console.log("Привіт!");
//}
//greet(); // Виведе "Привіт!"
function hellow(name) {
    return console.log(`Привіт ${name} як в тебе день?`);
}
hellow('Нікіта')
////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}
function sum(a, b) {
    let s = 0
    for (let i = a; i < b + 1; i++) {
        s += i

    }
    return console.log(s);
}
sum(50, 51)
//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.
const hellow1 = function (name) {
    return console.log(`Привіт ${name} як в тебе день?`);
}
hellow1('User')
//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
let sA = 0;
const srZnach = (...arr) => {
    let s = 0
    for (let i = 0; i < arr.length + 1; i++)  s += i
    return console.log(s/arr.length)

}
srZnach(5,6,7,8,3,2,4,5,1)
console.log(console.log(2))
//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6). 
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{ 
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт.Реалізуйте:
//*фільтр за типом продуктів
//* Підрахунок цін обраного типу продуктів
const state = [
    { name: "Хліб", price: 20, description: "Свіжий пшеничний хліб", type: "Випічка" },
    { name: "Молоко", price: 25, description: "Свіже коров'яче молоко", type: "Молочні продукти" },
    { name: "Сир", price: 150, description: "Твердий сир з натурального молока", type: "Молочні продукти" },
    { name: "Масло", price: 80, description: "Вершкове масло", type: "Молочні продукти" },
    { name: "Яйця", price: 30, description: "Свіжі курячі яйця, 10 шт", type: "Молочні продукти" },
    { name: "Курка", price: 120, description: "Ціла курка, охолоджена", type: "М'ясо" },
    { name: "Яблука", price: 40, description: "Свіжі червоні яблука", type: "Фрукти" },
    { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
    { name: "Апельсини", price: 60, description: "Свіжі апельсини", type: "Фрукти" },
    { name: "Картопля", price: 15, description: "Молода картопля", type: "Овочі" },
    { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
    { name: "Помідори", price: 45, description: "Свіжі червоні помідори", type: "Овочі" },
    { name: "Огірки", price: 35, description: "Свіжі зелені огірки", type: "Овочі" },
    { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
    { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
    { name: "Борошно", price: 25, description: "Пшеничне борошно, 1 кг", type: "Сухі продукти" },
    { name: "Цукор", price: 30, description: "Білий цукор, 1 кг", type: "Сухі продукти" }
];

function project(arr) {
    let product = prompt('Введіть тип товару');
    let price = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === product) {
            console.log(arr[i]);
            price += arr[i].price;
        }
    }
    console.log(`Товарів обрано на ${price} грн`);
}

project(state);

// Функція для перевірки довжини рядка
function checkStringLength(str) {
    if (str.length < 10) {
        return "Довжина рядка менша за 10 символів";
    } else if (str.length > 10) {
        return "Довжина рядка більша за 10 символів";
    } else {
        return "Довжина рядка дорівнює 10 символам";
    }
}

// Функція для визначення кварталу за номером місяця
function getQuarter(month) {
    if (month < 1 || month > 12) {
        return "Неправильний номер місяця";
    }
    return Math.ceil(month / 3);
}

// Функція для перевірки, чи число позитивне, негативне чи нуль
function checkNumber(num) {
    if (num > 0) {
        return "Число позитивне";
    } else if (num < 0) {
        return "Число негативне";
    } else {
        return "Число є нулем";
    }
}

// Функція для перевірки, чи число входить в задані діапазони
function checkRange(num) {
    if (num >= 0 && num <= 10) {
        return "Число в діапазоні [0-10]";
    } else if (num >= 11 && num <= 20) {
        return "Число в діапазоні [11-20]";
    } else if (num >= 21 && num <= 30) {
        return "Число в діапазоні [21-30]";
    } else {
        return "Число не входить в жоден з діапазонів";
    }
}

// Функція для обчислення площі трикутника за трьома сторонами
function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Функція для пошуку мінімального значення в масиві чисел
function findMinValue(arr) {
    if (arr.length === 0) {
        return "Масив порожній";
    }
    return Math.min(...arr);
}

// Функція для пошуку всіх індексів елемента в масиві
function findAllIndexes(arr, value) {
    let indexes = [];
    arr.forEach((element, index) => {
        if (element === value) {
            indexes.push(index);
        }
    });
    return indexes;
}


console.log(checkStringLength("Привіт"));
console.log(getQuarter(5));
console.log(checkNumber(-5));
console.log(checkRange(15));
console.log(calculateTriangleArea(3, 4, 5));
console.log(findMinValue([5, 3, 8, 1, 7]));
console.log(findAllIndexes([1, 2, 3, 2, 5, 2], 2));
