import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import GuestEntity from './GuestEntity.js'

export function buildGuest (id: string, name: string, from: Date, to: Date, currently: boolean): GuestEntity {
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
      to: new Date(to)
    })
  })

  return entity
}
