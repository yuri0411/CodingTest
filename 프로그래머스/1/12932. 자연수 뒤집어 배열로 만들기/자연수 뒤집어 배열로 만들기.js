function solution(n) {
    return String(n).split('').map((str, index, arr) => +arr[arr.length - index -1]);
}