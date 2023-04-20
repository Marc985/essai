/*const getMinMaxNumber=(a)=>{
   let min=Math.min(...a);
   let max=Math.max(...a);
   return [min,max];
}
console.log(getMinMaxNumber([0,0,0,0,0,0,0]));*/

/*const getMinMaxNumber=(a)=>{
   let table=[];
 let min=Infinity;
 let max=0;
 for(let i=0;i<a.length;i++){
   if(min>a[i])
   min=a[i];
else if(max<a[i])
max=a[i]; 
}

return [min,max];
}
console.log(getMinMaxNumber([5,8,6,4,2,9,7,6]));*/


let tab=[0,5,6,8];
tab.splice(tab.indexOf(Math.min(...tab)),1)
console.log(tab);