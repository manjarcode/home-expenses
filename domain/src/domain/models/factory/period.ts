import { fromDetachedDate, today } from '../../../utils/date.js'
import Period from '../Period.js'

export default function buildPeriod (period: DetachedPeriod): Period {
  const { from, to, currently } = period
  const fromAsDate = fromDetachedDate(from)
  const toAsDate = fromDetachedDate(to)

  return new Period({ from: fromAsDate, to: toAsDate, currently })
}
