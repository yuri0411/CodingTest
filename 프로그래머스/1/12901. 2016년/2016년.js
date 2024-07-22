function solution(a, b) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfWeek = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const startDay = daysOfWeek.indexOf('FRI')
    
    let days = b - 1; 
    for (let i = 0; i < a - 1; i++) {
        days += daysInMonth[i];
    }

    return daysOfWeek[(days % 7 + startDay) % 7];
}
