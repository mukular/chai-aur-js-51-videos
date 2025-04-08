// Arrays

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]);

marvel_heros.pop()
console.log(marvel_heros);
console.log(dc_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // spread operator
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], 7, [6, 7, [4, [2, 3, 4]]]]
const real_another_array = another_array.flat(2)  // flat array for depth 2
console.log(another_array);
console.log(real_another_array);

const real_another_array1 = another_array.flat(Infinity)   // flat whole array
console.log(another_array);
console.log(real_another_array1);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));    // convert Hitesh into array
console.log(Array.isArray(real_another_array));
console.log(Array.from({name: "hitesh"}));   // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
