import {HTTP_STATUS} from '../../../../pages/config.js'
import GuestEntityFactory from '../entities/factory.js'

const RESOURCE = '/api/guests'
export default class GuestRepository {
  add(guest) {
    return fetch(RESOURCE, {
      method: HTTP_STATUS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest.flatten())
    })
  }

  list() {
    return fetch(RESOURCE)
      .then(response => response.json())
      .then(response => {
        const entities = response.map(data => GuestEntityFactory.guest(data))
        return entities
      })
  }
}
