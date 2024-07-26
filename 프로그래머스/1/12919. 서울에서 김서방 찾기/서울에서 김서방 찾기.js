function solution(seoul) {
    const map = new Map(seoul.map((name, index) => [name, index]));
    return `김서방은 ${map.get("Kim")}에 있다`;
}