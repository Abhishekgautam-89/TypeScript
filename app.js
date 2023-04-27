"use strict";
// tsc.cmd is used to compile
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const button = document.querySelector("button");
// function add(num1: number | string, num2: number | string){
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else
        return +num1 + +num2;
}
// const nunmArray: number []= [];
const nunmArray = [];
// const stringArray : string[]= [];
const stringArray = [];
// function printResult(resultObj : {value : number, timeStamp: Date}){
function printResult(resultObj) {
    console.log(resultObj.value);
}
button.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = (add(+num1, +num2));
    nunmArray.push(result);
    // console.log(add(+num1, +num2))
    const stringResult = (add(num1, num2));
    stringArray.push(stringResult);
    console.log(add(num1, num2));
    // console.log(add(true, false))
    printResult({ value: result, timeStamp: new Date() });
    console.log(nunmArray, stringArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise has been resolved');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
