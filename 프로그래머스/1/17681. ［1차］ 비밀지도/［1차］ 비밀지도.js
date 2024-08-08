function solution(n, arr1, arr2) {

    return arr1.map((num, index) => {
        const bitOr =  (num | arr2[index]).toString(2).padStart(n, '0');

        return bitOr.replace(/[1|0]/g, (s) => +s ? "#" : " ")
    } )
}