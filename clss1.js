// console.log("Hello World")

// let a = 10;
// let b = 20;

// console.log(a+b);

// var a = 10;
// var b = 20;

// console.log(a+b);

// var arr = ['Why_are_you_gae', 69, 420, 'Bateman is dork']
// console.log(arr)

// arr[2] = '42069'
// console.log(arr[2])

// console.log(arr.length)

//pop method - it removes the last element of the array

//var arr2 = [12, 23, 34, 45, 56, 67, 78, 89, 90]

// arr2.pop()

// console.log(arr2)

//push method - it adds the element at the end of the array

// arr2.push(100)
// console.log(arr2)

//shift method - it removes the first element of the array

// arr2.shift()
// console.log(arr2)

//unshift method - it adds the element at the beginning of the array

// arr2.unshift(1)
// console.log(arr2)

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue',
//     ownsCar: true
// }

//console.log(person)

//dot method (easy method)

//console.log(person.age)

//bracket method (hard method)

//console.log(person['age'])

// var Kratos = {
//     firstName : 'Kratos',
//     age : 10000,
//     father: 'Zeus',
//     wife: 'Faye',
//     weapon: 'Blades of Chaos',

//     enemy : ['Poseidon', 'Athena', 'Hades', 'Atreus','Ares'],

//     isFather : false,

//     address: {
//         region: 'Norse',
//     }
// }
// Kratos.isFather = true,

// //console.log(Kratos.weapon)
// //console.log(Kratos.address.region)
// console.log(Kratos)

// delete Kratos.age
// console.log(Kratos)


// let myMind = 'sad'

// if('sad'){
//     console.log('I will listen Can We Kiss Forever ?')
// } 
// else {
//     console.log('I will listen Cry')
// }

//  var num = [1,2,3,4,5,6,7]
//  var ans =[]

// for(var i=0 ; i<num.length ; i++){
//     ans.push(num[i]*num[i])
// }
// console.log(ans)

// var i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

// var i = 69
// var n = 169

// do{
//     console.log(i)
//     i++
// } while(i<=n)

//  var colors = {
//     primary : 'Blue',
//     secondary: 'Red',
//     Tertiary: 'Orange'
//  }

//  for(var color in colors){
//     console.log(colors[color])
//  }

// var colorsArray = ['Yellow', 'Green', 'White', 'Black', 'White']

// for(var color in colorsArray){
//     console.log(color+ ' -> '+colorsArray[color])
// 

// var scores = [60, 40, 30, 28]
// for(var score of scores){
//     console.log(score + '->'+ scores[score])
// }

//method - entries

// let colors = ['Red', 'White', 'Green']

// for(var [index, color] of colors.entries()){
//     console.log(index + '-->' + color)
// }

// let str = 'Kratos'
// for(var s of str){
//     console.log(s)
// }

// let num1=2;
// let num2=02;
// if(num1==num2){
//     console.log("true");
// } else {
//     console.log("false")
// }

// function greet(){
//     console.log('Hello')
// } 
//function declaration and definition


// greet() // function invokation

//Parameters and Arguments

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,3)

// var add = function(a,b){ //Annonymous function
//     return a+b
// }

// let result = add(3,4)

// console.log(result)

 function huh(){
    return 'Return to me'
 }
 console.log(huh())