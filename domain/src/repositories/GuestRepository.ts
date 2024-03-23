import { buildGuest, buildGuestDeprecated } from '../domain/models/factory/guest.js'
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

  async get (id: string): Promise<Guest> {
    //TODO: implement dbAdapter.get()<Guest>
    const promise = dbAdapter.list<Guest>(
      item => {
        const { id, name, from, to, currently } = item
        return buildGuestDeprecated(id, name, from, to, currently)
      }
    )

    const list = await promise
    const found = list.find(guest => guest.getId() === id)
    if (!found) {
      throw new Error(`Guest with id ${id} not found`)
    }
    return found 
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

  async update(guest: Guest): Promise<void> {
    const { id, name, period } = guest

    return await dbAdapter.update({
      id,
      name,
      from: period.from.getTime(),
      to: period.to.getTime(),
      currently: period.currently
    })
  }
  async delete (id: string): Promise<void> {
    return await dbAdapter.delete(id)
  }
}
