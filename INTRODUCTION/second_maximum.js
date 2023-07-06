// [4, 7, 10, 10, 2, 10, 9]
var new_arr = [4, 7, 10, 10, 2, 10, 9];
Array.prototype.second_max = function (){
     let second_max = 0
     let max = 0

     for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] > second_max && second_max < max) {
                second_max = array[i]
            }
            
        }
        
     }
}