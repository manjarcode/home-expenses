import dayjs from 'dayjs'

export function formatPeriod(period) {
  const from = dayjs(period.from).format('DD/MM/YYYY')
  const to = dayjs(period.to).format('DD/MM/YYYY')
  const periodValue = `${from} - ${to}`

  return periodValue
}

export function parseAmount(amount) {
  if (typeof amount === 'number') return amount

  const parseDivider = amount.replace(',', '.')
  const parsedAmount = parseFloat(parseDivider)
  return parsedAmount
}
