function binarySearch (arr: number[], target: number) {
    const length = arr.length;
    if (length === 0) return -1
    let startIndex = 0, // 最小位置索引
        endIndex = length - 1; // 最大位置索引

    while(startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const num = arr[midIndex]
        if (target < num) {
            endIndex = midIndex - 1
        } else if (target > num) {
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }

    return -1
}
const arr = [20, 10, 30, 50, 80]
const index = binarySearch(arr, 200)
console.log('index: ', index);


export default {}


