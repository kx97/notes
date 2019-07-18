function selectSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      // 找出最小值，并保存最小值索引
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}