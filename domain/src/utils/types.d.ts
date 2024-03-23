interface DetachedDate {
  year: number
  month: number
  day: number
}

interface DetachedPeriod {
  from: DetachedDate
  to: DetachedDate
  currently: boolean
}

interface PeriodDto {
  from: string
  to: string
  currently: boolean
}