// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = "*") {
    return function(thing = "special") {
        return `You are ${string}${thing}${string}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(sInteger, functions) {
    let og = sInteger

    for (let i = 0; i < functions.length; i++){
        og = functions[i](og)
    }
    return og
}