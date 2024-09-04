function solution(wallpaper) {
    let answer = [];
    for(let i = 0; i < wallpaper.length; i++) {
        const papers = wallpaper[i].split('');
        for(let j = 0; j < papers.length; j++) {
            if(papers[j] === "#") {
                answer.push([i, j]);
            }
        }
    }
    const x = answer.map(([x]) => x)
    const y = answer.map(([_ ,y]) => y)

    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}