import buildPeriod from '../../periods/valueObjects/factory.js'
import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import GuestEntity from './GuestEntity.js'

export function buildGuestDeprecated (id: string, name: string, from: Date, to: Date, currently: boolean): GuestEntity {
  const todayLocale = new Date()

  const todayUtc = Date.UTC(
    todayLocale.getFullYear(),
    todayLocale.getMonth(),
    todayLocale.getDate()
  )

  const today = new Date(todayUtc)

  to = currently ? today : to

  const entity = new GuestEntity({
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

export function buildGuest (guestDto: GuestDto): GuestEntity {
  const { id, name, period } = guestDto
  console.log('building guest', guestDto)

  const periodVo = buildPeriod(period)

  console.log('periodVo', periodVo)
  const entity = new GuestEntity({
    id,
    name,
    period: periodVo
  })

  return entity
}
