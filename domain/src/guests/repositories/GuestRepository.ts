import { HTTP_STATUS } from '../../config/index.js'
import GuestEntityFactory from '../entities/factory.js'

const RESOURCE = '/api/guests'
export default class GuestRepository {
  async add (guest): Promise<Response> {
    return await fetch(RESOURCE, {
      method: HTTP_STATUS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest.flatten())
    })
  }

  async list (): Promise<Response> {
    return await fetch(RESOURCE)
      .then(async response => await response.json())
      .then(response => {
        const entities = response.map(data => GuestEntityFactory.guest(data))
        return entities
      })
  }

  async delete (id: string): Promise<Response> {
    return await fetch(`${RESOURCE}/${id}`, {
      method: HTTP_STATUS.DELETE
    })
  }
}
