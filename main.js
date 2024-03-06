//1)-------Дан некоторый массив. Объедините элементы этого массива в строку с разделителем '-'
var myArray = [5, 7, 3, 6, 9];
var result = myArray.join('-');

console.log(result);

//2)-------Пользователь вводит строку(prompt). Разделите эту строку на слова и выведите их на экран.
// Запрос строки у пользователя
var string = prompt("Введите строку:");
var wordsArray = string.split(' ');// Разделение строки на слова

console.log(string);
console.log(wordsArray);

//3)--------Преобразуйте дату из формата гггг-мм-дд в формат дд.мм.гггг, используя split и join.

let date = '2004-08-28';
let parts = date.split('-');// Разделение строки на части по разделителю "-"
let formattedDate = parts[2] + '.' + parts[1] + '.' + parts[0];// Перестановка частей в нужном порядке

console.log(formattedDate); 

//4)------- Вывести пользователей используя map foreach
         // let usersRecords = [ {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
        //   {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
        //   {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
        //   {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24} ] 

let users= [
    {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
    {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
    {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
    {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24}
];

// Используем map для создания нового массива строк с информацией о каждом пользователе
let userStrings = users.map(user => `${user.name} (ID: ${user.id}, Marks: ${user.marks}, Pole: ${user.pole}, Age: ${user.age})`);

// Используем forEach для вывода каждой строки на экран
userStrings.forEach(userString => console.log(userString));


//5)--------Получить индекс пользователя у которого age равен 18

let usersRecords = [
    {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
    {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
    {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
    {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24}
];

const findIndex = users.findIndex((item)=>item.age === 18);
console.log("Индекс пользователя с возрастом 18 :",findIndex);


// 6)---------Получить имена студентов и вывести из в одну строку
// Используем filter для получения записей, соответствующих студентам
// Затем используем map для извлечения имен студентов

let Records = [
    {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
    {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
    {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
    {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24}
];


let students = Records.filter(record => record.pole === "student");// Используем filter для получения записей, соответствующих студентам


let studentNames = students.map(student => student.name);// Используем map для извлечения имен студентов

console.log(studentNames.join(', '));

//7)-------------Получить студентов у которых marks больше 44 и добавить к ним еще 20 marks, т.е было 30 станет 50

let marks = [
    {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
    {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
    {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
    {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24}
]; 

let updatedStudent = marks.reduce((acc, student) => {
    if (student.pole === "student" && student.marks > 44) {
        acc = { ...student, marks: student.marks + 20 };
    }
    return acc;
}, null);

console.log(updatedStudent);