
function solution(sizes) {
    const maxWidth= Math.max(...sizes.map((size) => size[0]))
    const maxHeight = Math.max(...sizes.map((size) => size[1]));

    for (let i = 0; i < sizes.length; i++) {
        let current = sizes[i]
        if(maxHeight > maxWidth) {
            if(current[0] > current[1] && current[0] < maxHeight) {
                sizes[i] = [current[1], current[0]]
            }
        } else {
            if(current[0] < current[1] && current[0] < maxWidth) {
                sizes[i] = [current[1], current[0]]
            }
        }
    }

    return Math.max(...sizes.map((size) => size[0])) * Math.max(...sizes.map((size) => size[1]));
}