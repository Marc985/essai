/*const getIntegersBetween=(x,y)=>{
    let tableau=[];
    for(let i=x+1;i<y;i++)
    tableau.push(i);
    return tableau;
}
console.log(getIntegersBetween(2,8));*/

 
const getIntegersBetween=(inf,sup)=>{
    let tableau=[];  
    if(inf==sup+1)
        return tableau;
     else{   
        tableau.push(sup-1);
        return getIntegersBetween(sup-1);
}
}
console.log(getIntegersBetween(2,8));
/*function convertPalindromes(numbers) {
    return numbers.map((num)=>{
      let  num_str=num.toString;
      let num_reverse=num_str.split("").reverse().join("");
    if(num_reverse==num)
    return 1;
    else return 0;
    })
     
    }
console.log(convertPalindromes([101,100,2,150,202]));*/
/*let count=0;
for(let i=0;i<10;i++)
    i%2==0 ? count++ : count;
console.log(count);*/
/*floorfunction findMedian(n){
    n.sort(function(a,b){
        return a-b;
    });
    let middle=Math.floor((n.length-1)/2)
    let searchMiddle;
   n%2==0 ? searchMiddle=(n[middle-1]+n[middle])/2 : searchMiddle=middle
    return searchMiddle;
}
console.log(findMedian([1,5,2,6,3,4,7]));*/
/*let time="05:05:00PM"
let tab=time.split(' ');

console.log(tab);*/
