// let energy = 'Saturday'
// function subLength(str_input,single_char){
//     string_Arr = str_input.split('')
//     find_Arr = string_Arr.map((element, idx) => 
//     element === single_char ? idx : '').filter(String)
  
//     if (find_Arr.length === 2){
//         return find_Arr[1] - find_Arr[0] + 1
//     } else {
//         return 0
//     }
  
//   }


// console.log(subLength('Saturday', 'a'))
// console.log(subLength('summer', 'm'))
// console.log(subLength('digitize', 'i'))
// console.log(subLength('cheesecake', 'k'))

b = [{item: 'Carrots'}, 
    {item: 'Hummus'}, 
    {item: 'Pesto'}, 
    {item: 'Rigatoni'}];

function groceries(objArray){
    result = objArray.map(a => a.item);
    var str_con = new String()
 
    if (result.length === 1){
        return result[0]
    }

    let i = 0
    while (i <= result.length - 2){
      if (i != result.length - 2){
        str_con = str_con + result[i] + ', '
      } else {
        str_con = str_con + result[i] + ' and ' + result[i+1]
      }
      i++
    }
    return str_con
}

console.log(groceries([{item: 'Cheese Balls'}]))