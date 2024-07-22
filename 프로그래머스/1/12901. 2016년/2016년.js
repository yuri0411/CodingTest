function solution(a, b) {
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const doomsDays = [4, 29, 7, 4, 9, 6, 11, 8, 5, 10, 7, 12]

     const doomsday = ((Math.floor(16 / 12) + (16 % 12) + (16 % 12) % 4 + 2) / 7)
    
    if(doomsDays[a - 1] <= b) {
        return day[doomsday + Math.abs(doomsDays[a - 1] - b) % 7]
    } else {
        
        return day[(doomsday + 7 - (doomsDays[a - 1] - b)) % 7]
    }
}