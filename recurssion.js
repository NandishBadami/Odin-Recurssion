function fibsRec(n) {
    if(n == 1) return [0,1];
    var s = fibsRec(n-1);
    s.push(s[s.length-1] + s[s.length-2]);
    return s;
}
console.log('Fibonacci Series');
console.log(fibsRec(7));

let arr = [105, 79, 100, 110];
function mergeSort(arr) {
    if(arr.length == 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2) {
    let final = [];
    let k = 0;
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i]<arr2[j]) final[k++] = arr1[i++];
        else final[k++] = arr2[j++];
    }
    for(;i<arr1.length;i++) final[k++] = arr1[i];
    for(;j<arr2.length;j++) final[k++] = arr2[j];
    return final;
}
console.log("Merge Sort: ")
console.log(mergeSort(arr));