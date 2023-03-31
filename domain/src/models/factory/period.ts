import Period from '../Period.js'
import { fromDetachedDate, today } from '../../utils/date.js'

export default function buildPeriod (period: DetachedPeriod): Period {
  const { from, to, currently } = period
  const fromAsDate = fromDetachedDate(from)
  const toAsDate = currently ? today() : fromDetachedDate(to)

  return new Period({ from: fromAsDate, to: toAsDate, currently })
}
