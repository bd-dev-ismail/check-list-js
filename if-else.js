//Bangladesh Grading System
const result = 32;
if(result > 80){
    console.log('A+ 5.00');
}
else if(result > 70 && result < 80){
    console.log('A 4.00');
}
else if(result > 60 && result < 70){
    console.log('A- 3.50');
}
else if(result > 50 && result < 60){
    console.log('B 3.00');
}
else if(result > 40 && result < 50){
    console.log('C 2.00');
}
else if(result > 33 && result < 40){
    console.log('D 1.00');
}
else{
    console.log('Fail');
}