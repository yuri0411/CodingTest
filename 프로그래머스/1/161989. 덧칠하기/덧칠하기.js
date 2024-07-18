function solution(n, m, section) {
    let paint = 0
    const walls = Array.from({length: n},(_, index) => !section.includes(index + 1))

    for(let i = 0; i < walls.length; i++) {
        if(walls[i]) continue
        walls.fill(true, i, i + m)

        paint++
    }
    return paint

}
