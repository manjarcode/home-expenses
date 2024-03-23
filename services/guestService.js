const RESOURCE = '/api/guests'

export default class GuestService {
  async add(guest) {
    return fetch(RESOURCE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)
    })
  }

  async get(id) {
    return fetch(`${RESOURCE}/${id}`).then(async response => response.json())
  }

  async list() {
    return fetch(RESOURCE).then(async response => response.json())
  }

  async update(guest) {
    await fetch(RESOURCE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)
    })
  }

  async remove(id) {
    return fetch(`${RESOURCE}/${id}`, {
      method: 'DELETE'
    })
  }
}
