import GuestEntityFactory from '../entities/factory.js'

export default class GuestRepository {
  list() {
    return fetch(`/api/guests`)
      .then(response => response.json())
      .then(response => {
        const entities = response.map(data => GuestEntityFactory.guest(data))
        return entities
      })
  }
}
