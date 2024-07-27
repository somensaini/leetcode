function numberOfSteps(num: number): number {
  let count: number = 0
  while (num > 0) {
    num % 2 === 0 ? (num /= 2) : num--
    count++
  }
  return count
}
