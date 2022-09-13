/**
 * ৪. null এবং undefined কি জিনিস। কখন কোনটা ইউজ করা হয়। বা কখন কোনটা কিভাবে চেক করতে হয়। সেটা জানতে হবে।
 * 8 ways to undefiend
 * -1. variable not initilized will give undefined 
 * -2. function with no return
 * -3. parameter will not definend
 * -4. if return have right side nothing to say what is return that will give undifend
 * -5. property that does not defiend in object that will give undifiend
 * -6. array elements outside of the index range
 * -7. deleteing an element inside array
 * -8. set a value directly undefiend.
 * 
 * Null- kono data defiend kora hoi nai ..seta set kora null diye..
 * type of undefined is undefined 
 * typeOf null is object.
 */
let first;
// console.log(first);
function second(a, b){
    const total = a  + b;
}
const result = second(20, 20)
// console.log(result);
function thrid(a, b, c, d){
    const sum = a + b + c + d;
    // console.log(a, b, c, d)
}
thrid(2,4)
function noNegetive(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
const totall = noNegetive(2 ,-5);
// console.log(totall);

