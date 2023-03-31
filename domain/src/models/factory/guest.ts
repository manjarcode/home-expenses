import buildPeriod from './period.js'
import Period from '../Period.js'
import Guest from '../Guest.js'

export function buildGuestDeprecated (id: string, name: string, from: Date, to: Date, currently: boolean): Guest {
  const todayLocale = new Date()

  const todayUtc = Date.UTC(
    todayLocale.getFullYear(),
    todayLocale.getMonth(),
    todayLocale.getDate()
  )

  const today = new Date(todayUtc)

  to = currently ? today : to

  const entity = new Guest({
    id,
    name,
    period: new Period({
      from: new Date(from),
      to: new Date(to),
      currently: false
    })
  })

  return entity
}

export function buildGuest (guestDto: GuestDto): Guest {
  const { id, name, period } = guestDto

  const periodVo = buildPeriod(period)

  const entity = new Guest({
    id,
    name,
    period: periodVo
  })

  return entity
}
