import buildPeriod from '../../periods/valueObjects/factory.js'
import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
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
    period: new PeriodValueObject({
      from: new Date(from),
      to: new Date(to),
      currently: false
    })
  })

  return entity
}

export function buildGuest (guestDto: GuestDto): Guest {
  const { id, name, period } = guestDto
  console.log('building guest', guestDto)

  const periodVo = buildPeriod(period)

  console.log('periodVo', periodVo)
  const entity = new Guest({
    id,
    name,
    period: periodVo
  })

  return entity
}
