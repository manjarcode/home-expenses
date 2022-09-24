import {useState} from 'react'

import Expenses from './expenses.js'
import Guests from './guests.js'

function FormExpenses() {
  const [expenses, setExpenses] = useState([])
  const [guests, setGuests] = useState([])

  console.log(expenses, guests)
  return (
    <div>
      <Expenses onChange={setExpenses} />
      <Guests onChange={setGuests} />
      <button>Calcular</button>
    </div>
  )
}

export default FormExpenses
