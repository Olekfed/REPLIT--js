/*for (let i=0; i < 10; i++) {
    console.log(i);
}

for (let i<100; i=0; i--) {
    console.log(i);
}

let val = 0;
let otherVal = val++;
console.log(val, otherval);*/

for (let i=100; i>=0; i-=2) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

/*let num = Number(promt('Enter a number'));
while(isNaN(num)) {
  num = Number(promt('Enter a number'));
}
console.log(num);

let num;
do {
  num = parseInt(promt('Enter a number'));
} while (isNaN(num))
console.log(num);*/


let products = ['Tesla Model 3', 
                'Toyota Tundra', 
                'Skoda Karoq'];
console.log(products.length);
console.log(products[2]);
products[3] = 'Volkswagen Touareg';
products.push('Audi Q8');


/*for (let i=0; i < products.length; i++) {
  console.log(products[i]);
}*/

for (let i = products.length - 1; i>=0; i--) {
  console.log(products[i]);
}


function prn(text) {
  console.log(text);
}
products.forEach(prn);

for (const product of products) {
  console.log(product);
}

const nums = [1,3,100,12,121,3,5,63,42];
nums.sort(compare);
console.log(nums);