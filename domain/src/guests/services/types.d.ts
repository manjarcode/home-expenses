interface GuestDto {
  name: string
  from: number
  to: number
}

interface YearSpan {
  year: number
  months: string[]
}

interface TimetableDto {
  guests: GuestDto[]
  yearSpan: YearSpan
}
