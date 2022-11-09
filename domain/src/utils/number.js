export function roundMoney(num) {
  const fixRound = num + Number.EPSILON
  const rounded = fixRound.toFixed(2)
  return Number(rounded)
}
