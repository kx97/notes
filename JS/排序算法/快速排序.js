function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  var cent = Math.floor(arr.length / 2);
  var cur = arr[cent];
  var left = [];
  var right = [];
  for(var i = 0; i < arr.length; i++) {
    if(cur > arr[i]) {
      left.push(arr[i]);
    } else if(cur < arr[i]) {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(cur, quickSort(right));
}