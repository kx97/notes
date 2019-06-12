var obj = [
  { id:3, parent:2 },
  { id:1, parent:null },
  { id:2, parent:1 },
  { id:4, parent: 3},
]
obj.sort(function(a, b) {
  return a.parent - b.parent;
});
var len = obj.length;
var rel = {};
for(var i = len - 1; i > 0; i--) {
  if(obj[i].parent == obj[i - 1].id) {
    obj[i - 1].child = obj[i];
  } 
  if(obj[i-1].parent === null) {
    rel.id = obj[i-1].id;
    rel.parent = obj[i-1].parent;
    rel.child = obj[i-1].child;
  }
}
console.log(rel);