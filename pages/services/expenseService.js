const RESOURCE = '/api/expenses'

export default class ExpenseService {
  async add(expense) {
    return fetch(RESOURCE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
  }

  async list() {
    return fetch(RESOURCE).then(response => response.json())
  }

  async update(expense) {
    await fetch(RESOURCE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
  }

  async remove(id) {
    const endpoint = `${RESOURCE}/${id}`
    await fetch(endpoint, {
      method: 'DELETE'
    })
  }
}
