import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import GuestEntity from './GuestEntity.js'

export default class GuestEntityFactory {
  static guest({id, name, from, to, currently}) {
    const todayLocale = new Date()

    const today = Date.UTC(
      todayLocale.getFullYear(),
      todayLocale.getMonth(),
      todayLocale.getDate()
    )

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
}
