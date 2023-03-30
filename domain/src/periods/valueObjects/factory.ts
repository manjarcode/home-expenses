import { fromDetachedDate, today } from '../../utils/date.js'
import PeriodValueObject from './PeriodValueObject.js'

export default function buildPeriod (period: DetachedPeriod): PeriodValueObject {
  const { from, to, currently } = period
  const fromAsDate = fromDetachedDate(from)
  const toAsDate = currently ? today() : fromDetachedDate(to)

  return new PeriodValueObject({ from: fromAsDate, to: toAsDate, currently })
}
