function insertSort(arr) {
  let preIndex, current
  for(let i = 1; i < arr.length; i++) {
    preIndex = i - 1
    current = arr[i]
    while(preIndex >= 0 && current < arr[preIndex]) {
      // 当前值小于它索引之前的数字时，其他值向后移动
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    // 将值插入
    arr[preIndex + 1] = current
  }
  return arr
}