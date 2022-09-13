let canvas = document.querySelector('canvas');
// Where we actually do the drawing 
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
// context.fillRect(100, 100, 400, 400);

/* Drawing a rectangle. */
context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke();

/* Drawing a circle. */
context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();

// Using loops to draw

/* Drawing 5 rectangles. */
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let width = 60;
        let height = 60;
        let gap = 20;
        let x = 100 + (width + gap) * i;
        let y = 100 + (width + gap) * j;

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        /* Drawing smaller rectangles inside bigger rectangles with conditionals. */
        if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke();
        }

    }
}


let year = 2042;
let nextYear = year + 1;

let dinner = 'pasta';
let sentence = 'Tonight, dinner will be' + dinner

function saySomething(param) {
    console.log(param)
}

saySomething(sentence)

function add(a, b) {
    return a + b
}

let result = add(5, 7);
console.log(result)

let multiply = (a, b) => {
    return a * b
}
console.log(multiply(5, 7))

let years = [];
let menu = ['starter', 'main', 'desert', 'drinks', 'side']

// Understanding for loops
/* 
3 parts of the of the params
index of the loop 'i' start
Second part duration of the loop
Third part of the loop is the increment by 1
*/
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i])
}

for (let i = 0; i < 10; i++) {
    years.push(2022 + i)
}
console.log(years)
