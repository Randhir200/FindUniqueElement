//Print the element whose occurrence 1
//find the unique element

var arr =[2,1,2,4,5,6,1];
var dairy = {};
var unique=[];
var s=0;
for(var i=0;i<arr.length;i++){
  var char = arr[i];
  if(dairy[char]==undefined){
     dairy[char] = 1;
  }else{
    dairy[char]++;
  }
}
for(var i in dairy){
  if(dairy[i]==1){
    unique.push(i);
     console.log(i) 
  }
}
console.log(unique);