import {useState} from 'react'

import JanderAggregate from '../../domain/JanderAggregate.js'
import Expenses from './expenses.js'
import Guests from './guests.js'

function FormExpenses() {
  const [expenses, setExpenses] = useState([])
  const [guests, setGuests] = useState([])

  const onClick = () => {
    const jander = new JanderAggregate({expenses, guests})
    jander.calcultate()
  }

  return (
    <div>
      <Expenses onChange={setExpenses} />
      <Guests onChange={setGuests} />
      <button onClick={onClick}>Calcular</button>
    </div>
  )
}

export default FormExpenses
