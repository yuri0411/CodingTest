function solution(sizes) {
    const minMaxSizes = sizes.map((size) => [Math.min(...size), Math.max(...size)])

    return Math.max(...minMaxSizes.map((size) => size[0])) * Math.max(...minMaxSizes.map((size) => size[1]))
 }