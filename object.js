/**
 * ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।
.

 */
const students = {
    name: 'sajib',
    age: 24,
    salary: 3400, 
    home:{
        village: 'Kazi para',
        post: 'Kumira',
        zilla: 'Chattogram'
    },
    hobies: ['Developer', 'AI Expert', 'UI Expert']
}
const details = students.hobies[0];
console.log(students["name"]);
//destructuring 
const {name, salary, age, hobies, home} = students;
const [a, b, c] = hobies;
const {zilla, post, village} = home;
// console.log(zilla)
/**
 * Dot property accessor: object. property.
Square brackets property access: object['property']
Object destructuring: const { property } = object.
 */