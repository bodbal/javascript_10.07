import { text } from 'stream/consumers';
import input from './input.js'

let txt= ('ASdJklvhgpppdaasaderegfdcg')
let part1=txt.slice(0,5);
let part2 = txt.slice(2,8);
let part3 =txt.slice(4,30);
let part4=txt.slice(4,10);
let part5=txt.toUpperCase();
let part6=txt.toUpperCase();
let part7=txt.replace("e","E");
const myArray = txt.split("e");


console.log(`Az elso 5 karakter: ${part1}`)
console.log(`Az 3-8 karakter: ${part2}`)
console.log(`Az  5. karaktertől a végéig: ${part3}`)
console.log(`Az  5. karaktertől 6 karakter hosszan: ${part4}`)
console.log(`A Nagybetu: ${part5}`)
console.log(`A txt változót, hogy minden második karakter nagybetű legyen: ${part6}`)
console.log(`A txt-t úgy, hogy minden "e" karakter "E" legyen: ${part7}`)
console.log(`A szetvalaszt: ${myArray}`)
