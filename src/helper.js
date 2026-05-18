function helper(n) {
    let arr = new Array(n)
    for(let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    let sumNum = arr.reduce((sum, curr) => sum + curr)
    console.log(sumNum)
    return sumNum;
}
export {helper, sum}