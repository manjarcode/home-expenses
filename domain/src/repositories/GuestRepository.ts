import Guest from '../domain/models/Guest.js'
import DynamoDbAdapterFactory from './DbAdapterFactory.js'

const TABLE_NAME = 'guests'

export default class GuestRepository {
  #dynamoDbAdapter: any
  constructor () {
    this.#dynamoDbAdapter = DynamoDbAdapterFactory.instance(TABLE_NAME, 'id', '')
  }

  async add (guest: Guest): Promise<void> {
    const { id, name, period, active } = guest

    return this.#dynamoDbAdapter.add({
      id,
      name,
      from: period.from.getTime(),
      to: period.to.getTime(),
      active
    })
  }

  async get (id: string): Promise<Guest> {
    const [item] = await this.#dynamoDbAdapter.query(id)
    return Guest.fromPrimitives(item)
  }

  async list (): Promise<Guest[]> {
    const fromDb = await this.#dynamoDbAdapter.scan()
    const list = fromDb.map(item => {
      return Guest.fromPrimitives(item)
    })
    return list
  }

  async update (guest: Guest): Promise<void> {
    const { id, name, period, active } = guest
    return this.#dynamoDbAdapter.update({
      id,
      name,
      from: period.from.getTime(),
      to: period.to.getTime(),
      active
    })
  }

  async delete (id: string): Promise<void> {
    return this.#dynamoDbAdapter.delete(id)
  }
}
