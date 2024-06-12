import {parseAmount} from '../../components/utils.js'

export default class UploadPageModel {
  async save(file) {
    const data = new FormData()
    data.set('file', file)

    return fetch('/api/upload', {
      method: 'POST',
      body: data
    }).then(response => response.json())
  }

  mapExpenseAmount(expense) {
    const {amount, ...rest} = expense
    const parsedExpense = {
      ...rest,
      amount: parseAmount(amount)
    }

    return parsedExpense
  }
}
