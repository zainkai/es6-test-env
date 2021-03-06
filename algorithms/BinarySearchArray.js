function binarySearchArr(num, find) {
  let low = 0
  let high = num.length -1
  
  while(low <= high) {
    let mid = Math.floor((low + high) /2)
    if (num[mid] === find) return mid
    if (num[mid] > find) {
      high = mid
    } else {
      low = mid
    }
  }

  if(num[left] === find) return left
  if(num[right] === find) return right
  return -1
}


const arr = [2,4,6,8,10]

console.log(binarySearchArr(arr, 8))