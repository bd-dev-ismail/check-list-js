/**
 * ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো।
 */
const ages = [22, 34, 53, 64, 23, 21, 10];
ages.pop()

// console.log(ages.includes(21));
const friends = ['rahim', 'karim', 'sarim', 'mofzol'];
console.log(Array.isArray(friends));
console.log(ages.slice(0,3));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi")
// fruits.shift()
fruits.unshift('Anar', 'Burger')
const text = fruits.join()
console.log(text);

//reduce 
let numbers = [1, 2, 3, 4, 5, 6];
let sum = numbers.reduce((previous , current) =>{
    return previous + current;
}, 0)
console.log(sum);
const callback = (total , num) =>{
    return total - num;
}
let number = [175, 50, 25];
const reducing = number.reduce(callback);
console.log(reducing);