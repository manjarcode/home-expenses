const RESOURCE = '/api/invoices'

export default class InvoiceService {
  async calculate() {
    return fetch(`${RESOURCE}/calculate`, {
      method: 'GET'
    }).then(response => response.json())
  }
}
