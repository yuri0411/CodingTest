function solution(arr) {
    const sum = arr.reduce((acc, curr) => acc += curr, 0)
    
    return sum / arr.length;
}