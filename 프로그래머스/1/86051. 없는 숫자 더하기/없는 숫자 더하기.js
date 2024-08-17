function solution(numbers) {
    const map = new Map(numbers.map((num) => [num, num]));
    const newNumbers = Array.from({length: 10}, (_, i) => i)
    
    return newNumbers.reduce((acc, curr) => !map.has(curr) ? acc + curr : acc, 0);
}