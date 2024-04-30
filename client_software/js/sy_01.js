/*
 * @Author: pwangfeng 2199066249@qq.com
 * @Date: 2024-03-12 10:35:32
 * @LastEditors: pwangfeng 2199066249@qq.com
 * @LastEditTime: 2024-03-14 11:53:53
 * @FilePath: \Clint_sorftWare\js\sy_01.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 219970522 潘望凤
// 1.编写代码调用如下函数，将函数调用的代码和结果记录在实验报告中。
"use strict";

function getSum(num1, num2) {
    var sum = num1 + num2;
    console.log(`第一个：${num1}+${num2}=${num1 + num2}`);
}
getSum(3, 4);

// 2.运行如下代码，如果运行正确则记录运行结果;如果报错，则修改代码,记录下错误原因。
// getProduct is not a function  报错提示  
// 变量式函数没有函数声明提升，它提升的是 var getProduct 这个声明,这个时候函数哈没有定义，所以报错提示不是一个函数
// 将调用放在函数定义之后就可以了

var getProduct = function(num1, num2) {
    console.log(`第二个：${num1}*${num2}=${num1 * num2}`);
}
getProduct(2, 4);

// 3.先阅读如下代码，思考输出的结果是什么?运行并记录输出结果。
// 如果函数中的变量如果省略var关键字，它会自动向上级作用域找变量一直找到全局作用域为止，所以第一个a输出位100
// 在函数体内， a作为形式参数，a = 10覆盖了前面的100的值所以后面两个a输出为10
console.log("第三个：")
var a = 100;

function test() {
    console.log(a);
    a = 10;
    console.log(a);
}
test();
console.log(a);
// 4．先阅读如下代码，思考输出的结果是什么?运行并记录输出结果。
// 定义式函数会预加载，即函数声明提升，这个时候fun1()提升到a=10之前了，所以并没有定义a，所以会输出undefined
console.log("第四个：")
var a = 10;
fun1();

function fun1() {
    var b = 20;
    console.log(a);
    console.log(b);
    var a = 30;
}
// 5.运行如下代码,看看是否报错。
// 在函数内部通过 arguments 对象访问了三个参数（索引分别为0、1、2）。
// 在 JavaScript 中，这种情况是被允许的，并且不会导致错误，只是没有对应的形式参数而已
console.log("第五个：")

function fun2(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
fun2(1, 2, 3);
//6. 尝试用for…in    的循环语句打印输出第5步中fun2 调用时的参数，将记录实验代码
console.log("第六个：")

function fun2(a, b) {
    // console.log("通过 for...in 循环输出参数：");
    for (var i in arguments) {
        console.log(arguments[i]);
    }
}

fun2(1, 2, 3);
//7. 运行如下代码，并记录输出结果和原因。
console.log("第七个：")
    // 因为严格模式下没有使用关键字定义num 所以出现num is not defined错误提示
    // num = 100;
    //8. 自行编写一段严格模式下报错的代码，记录代码并说明报错原因  
console.log("第八个：")
    // str = "sss"
    //9. 为第8步中的错误代码添加 try…catch 语句块，友好显示错误信息。
console.log("第九个：")
try {
    str = "sss"
    console.log(str)
} catch (error) {
    // 打印错误信息
    console.log(error) // ReferenceError: a is not defined
}