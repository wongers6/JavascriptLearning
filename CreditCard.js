const array_num = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const array_num2 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

var LeaveAlone =[]
var TimesTwo = []
for (let i = array_num.length - 1; i >= 0; i--){
    if (array_num.length % 2 === 0){
        ((i % 2) != 0 ? LeaveAlone : TimesTwo).push(array_num[i])
    } else {
        ((i % 2) != 0 ? TimesTwo : LeaveAlone).push(array_num[i])
    }
}

function sumArray(array_input){
    return array_input.reduce((partial, a) => partial + a, 0)
}

function sumTimesTwo(array_input){
    Double = array_input.map(num => num*2)
    OverNine = Double.filter(num => num > 9)
    UnderNine = Double.filter(num => num < 9)

    return sumArray(UnderNine) + sumArray(OverNine.map(num => num - 9))
}

total = sumArray(LeaveAlone) + sumTimesTwo(TimesTwo)

if (total % 10 === 0){
    return true
} else {
    return false
}