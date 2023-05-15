'use strict'

// Завдання 1

let a=+prompt('Введіть перше число диапазону');
let b=+prompt('Введіть останнє число диапазону');
let rez=0;
for(let i=a; i<=b; i++){
    rez+=i;
}
console.log(rez);


// ***********************************************
// Завдання 2

// let a=+prompt('Введіть перше число');
// let b=+prompt('Введіть друге число');
// let rez=0;
// let rez2=0;
// loopI: for(let i=0; i<=a; i++)
//        for(let j=0; j<=a; j++){
//     rez=a/i;
//     rez2=b/j;
//     if(rez%1==0 && rez2%1==0 && rez==rez2){
//         console.log(rez);
//         break loopI;
//     }
// }


// ***********************************************
// Завдання 3

// let a=+prompt('Введіть число');
// let rez=0;
// for(let i=0; i<=a; i++){
//     rez=a/i;
//     if(rez%1==0)
//     console.log(rez);
// }


// ***********************************************
// Завдання 4

// let a=+prompt('Введіть число');
// let rez=0;
// while(a>=1){
//     a/=10;
//     rez++;
// }
// console.log(rez);


// ***********************************************
// Завдання 5

// let lim=10;
// let nambers=0, nam;
// let minus=0, plus=0, zero=0, even=0, odd=0;
// while(nambers<lim){
//     nam=+prompt('Введіть число');
//     console.log(nam);
//     nambers++;
//     if(nam<0){
//         minus++;
//     }
//     if(nam>0){
//         plus++;
//     }
//     if(nam==0){
//         zero++;
//     }
//     nam%2==0 ? even++ : odd++;
// }
// console.log('Від\'ємні-'+minus+' Додатні-'+plus+' Нулі-'+zero+' Парні-'+even+' Непарні-'+odd);


// ***********************************************
// Завдання 6

// let rez;
// do {
//     let num1=+prompt('Введіть  перше число');
//     let num2=+prompt('Введіть  друге число');
//     let sign=prompt('Введіть  знак');
//     if(sign==='+')
//     rez=num1+num2;
//     else if(sign==='-')
//     rez=num1-num2;
//     else if(sign==='*')
//     rez=num1*num2;
//     else if(sign==='/')
//     rez=num1/num2;
//     else
//     alert('Зна к введено невірно');
//     alert(rez);
//     var stop=confirm('Ви хочете розв\'язати ще один приклад?');
// } while(stop===true);


// ***********************************************
// Завдання 7
// Варіант 1

// let nam=+prompt('Ввеліть число');
// let drift=+prompt('На скільки цифр його необхідно змістити?');
// let rez, i;
// let countLength=0
// for(i=1; i<10**drift; i*=10);
// let rez2=Math.floor(nam/i);
// while(rez2>=1){
//     rez2/=10;
//     countLength++;
// }
// rez=nam%10**countLength*i+Math.floor(nam/10**countLength);
// console.log(rez);

// Варіант 2

// let nam=+prompt('Ввеліть число');
// let drift=+prompt('На скільки цифр його необхідно змістити?');
// let rez, i;
// for(i=1; i<10**drift; i*=10);
// rez=nam%10**String(Math.floor(nam/i)).length*i+Math.floor(nam/10**String(Math.floor(nam/i)).length);
// console.log(rez);


// ***********************************************
// Завдання 8

// let day, i=1;
// do {
// switch(i){
//     case 1: day='Понеділок'; break;
//     case 2: day='Вівторок'; break;
//     case 3: day='Середа'; break;
//     case 4: day='Четвер'; break;
//     case 5: day='П\ятниця'; break;
//     case 6: day='Субота'; break;
//     default: day='Неділя'
//     i=0;
// }
// var stop=confirm('День тижня - '+day+'. Бажаєте побачити назву наступного дня тижня?');
// i++;
// } while(stop===true);


// ***********************************************
// Завдання 9

// let rez;
// for(let i=2; i<=9; i++)
// for(let j=1; j<=10; j++){
// rez=i*j;
// console.log(i+'*'+j+'='+rez);
// }


// ***********************************************
// Завдання 10

// alert('Загадайте число від 0 до 100');
// let n=50;
// let i=25;
// // let n3=100;
// do {
// var rez=prompt('Ваше число > '+Math.round(n)+', < '+Math.round(n)+' або = '+Math.round(n)+'? Введіть знак >, < або =');
// if(rez=='>'){
//     n+=i;
// }
// if(rez=='<'){
//     n-=i;
// }
// i/=2;
// }
// while(rez!=='=');