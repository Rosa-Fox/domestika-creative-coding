let x = 10;
const y = 33;

x = 20;

const multiply = (a, b) => {
  return a * b;
}

// function multiply(a, b) {
//   return a * b;
// }

const result = multiply(8, 4);
console.log(result);

const arr = [];
const obj = {};

const colors = ['blue', 'yellow']
const polygon = { sides: 5, radius: 120 };

console.log(colors[0]);

console.log(polygon.radius);

// index of the iteration, length of the loop, what to do with i on every iteration
for(let i = 0; i < colors.length; i++) {
  console.log(i, colors[i];)
}

colors.forEach(item => {
  console.log(item);
})

if(true) console.log('yea');
else console.log('no');

let night = true;
let backgroundColor;

backgroundColor = (night) ? 'black' : 'white';

const loadImage = async (url) => {
  return new Promise((resolve, reject) => {

    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
};

const start = async() => {
  const myImage = await loadImage('https://picsum/photos/200')
  console.log(myImage.width);
}


start();


