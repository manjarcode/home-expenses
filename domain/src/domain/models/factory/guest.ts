import Guest from '../Guest.js'
import Period from '../Period.js'

export function buildGuestDeprecated (id: string, name: string, from: Date, to: Date, currently: boolean): Guest {
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

  const periodVo = Period.fromPrimitives(period)

  const entity = new Guest({
    id,
    name,
    period: periodVo
  })

  return entity
}
