function solution(price, money, count) {
    const countPrice = [...Array(count)].reduce((acc, curr, index) => acc + price * (index + 1),0)
    const totalMoney = countPrice - money
    
    return totalMoney > 0 ? totalMoney : 0 ;
}