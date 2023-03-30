interface TimetableGuestDto {
  name: string
  from: number
  to: number
}

interface YearSpan {
  year: number
  months: string[]
}

interface TimetableDto {
  guests: TimetableGuestDto[]
  yearSpan: YearSpan
}
