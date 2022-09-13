const products = [
    {name: 'laptop', price: 7000, brand: 'lenovo', color: 'silver'},
    {name: 'Iphone', price: 30000, brand: 'Apple', color: 'Golden'},
    {name: 'Keyboard', price: 700, brand: 'budi', color: 'blackblue'},
    {name: 'watch', price: 500, brand: 'cacio', color: 'white'},
    {name: 'sunglass', price: 300, brand: 'rebon', color: 'black'},
];
const brands = products.map(element => element.brand);
// console.log(brands);
const cheap = products.filter(product =>  product.price < 1000);
// console.log(cheap);
//if we do not need to return
products.forEach(element =>{
    // console.log(element.color);

});
//Filter
const name = products.filter(product => product.name.includes('n'));
// console.log(name);
//Find shudu 1st ta return korbe
const specialName = products.find(product => product.name.includes('n'));
console.log(specialName);