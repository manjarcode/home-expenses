export function roundMoney (num: number): number {
  const fixRound = num + Number.EPSILON
  const rounded = fixRound.toFixed(2)
  return Number(rounded)
}
