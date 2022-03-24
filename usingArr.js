var arr = [1,2,3,4,4,5,5];
var unique=[];
var present = false;

for(var i=0;i<arr.length;i++){   //0,1,2,3,4
   for(var j=0;j<unique.length;j++){//0,1,2,3
     // console.log(i,j)
     if(arr[i]==unique[j]){ // 2==1,3==1,3==2, 4==4
       present = true;
       break;
     }
   }
  if(present==false){ // true,true,true,flase
    unique.push(arr[i]) // [1,2,3]
  }else{
    present = false; 
  }
}
console.log(unique);
