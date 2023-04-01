import { buildGuestDeprecated } from '../domain/models/factory/guest.js'
import Guest from '../domain/models/Guest.js'
import DbAdapter from './db/dbAdapter.js'

const TABLE_NAME = 'guests'

const dbAdapter = new DbAdapter(TABLE_NAME)

export default class GuestRepository {
  async add (guest: Guest): Promise<void> {
    const { id, name, period } = guest

    return await dbAdapter.add({
      id,
      name,
      from: period.from.getTime(),
      to: period.to.getTime(),
      currently: period.currently
    })
  }

  async list (): Promise<Guest[]> {
    const promise = dbAdapter.list<Guest>(
      item => {
        const { id, name, from, to, currently } = item
        return buildGuestDeprecated(id, name, from, to, currently)
      }
    )

    return await promise
  }

  async delete (id: string): Promise<void> {
    return await dbAdapter.delete(id)
  }
}
