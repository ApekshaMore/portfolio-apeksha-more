let arr=[56,-1, 9, 0, -1, 31, 23, -1]
// const sortedArr = arr.filter(item => item !== -1).sort((a,b) => a-b);
// console.log('sortedArr',sortedArr)
// console.log('arr',arr)
// let cnt = 0;
// const newArr= arr.map(item => {
// if (item === -1) return -1;
//  else return sortedArr[cnt++];
//   });
// console.log('arr',arr)
// console.log('newArr',newArr)

console.log('arr',arr)
const sortedArrWithout= arr.filter(item=>item != -1).sort((a,b)=> a - b)
console.log('sortedArrWithout',sortedArrWithout)
let ind = 0
const newArr= arr.map(item=>{
    if(item === -1){
        return item
    }
    else{ 
        console.log('---------',ind,)
        return sortedArrWithout[ind++] 
    }
})

console.log(newArr)