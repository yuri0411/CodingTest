function solution(phone_number) {
   return phone_number.replace(/.(?=.{4})/g, '*')
}