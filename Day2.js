// 1. find the maximum element in an array
let arr = [5,4,3,2,1,9,8,7,6]
// console.log(Math.max(...arr))
// let max =arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)


// 2. find the minimum element in an array
// console.log(Math.min(...arr))
// let min = arr[0]
// for(let i=0; i< arr.length; i++){
//     if(arr[i]< min){
//         min = arr[i]
//     }
// }
// console.log(min)

// 3. find the second largest element in an array
// let secondLarge = arr[0]
// let larger = arr[0]
// for(let i =0; i<arr.length; i++){
//     if(arr[i]>larger) {
//         secondLarge = larger
//         larger = arr[i]
//     }
//     else if( arr[i]> secondLarge && arr[i] != larger){
//         secondLarge = arr[i]
//     }
// }
// console.log(secondLarge)


// 4. find the second smallest element in an array
// let secondmin = arr[0]
// let min = arr[0]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]<min){
//         secondmin = min
//         min = arr[i]
//     }
//     else if(arr[i]< secondmin && arr[i] != min){
//         secondmin = ar[i]
//     }
// }
// console.log(secondmin)


// 5. find the sum of all elements in an array
// let sum =0
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)
// 6. find the average of all elements in an array
// let sum =0
// let avg
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
//     avg = sum/arr.length
// }
// console.log(avg)


// 7. find the sum of all even elements in an array
// let evenSum =0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         evenSum += arr[i]
//     }
// }
// console.log(evenSum)


// 8. find the sum of all odd elements in an array
// let oddSum =0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 == 1){
//         oddSum += arr[i]
//     }
// }
// console.log(oddSum)


// 9. find the number of even elements in an array
// let evenNumber =[]
// let lengthEven
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 ==0){
//         evenNumber.push(arr[i])
//         lengthEven = evenNumber.length
//     }
// }
// console.log(lengthEven)


// 10. find the number of odd elements in an array
let oddNUmber = []
let lengthOdd
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 ==1){
        oddNUmber.push(arr[i])
        lengthOdd = oddNUmber.length
    }
}
console.log(lengthOdd)