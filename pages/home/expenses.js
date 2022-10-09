import {useState} from 'react'

import PropTypes from 'prop-types'

import AddExpense from '../../components/addExpense/index.js'
import Button from '../../components/button/index.js'
import Expense from '../../components/expense/index.js'
import useModal from '../../hooks/useModal.js'

function Expenses({onChange}) {
  const [expenses, setExpenses] = useState([])

  const {isVisible, open, close} = useModal()

  const onAccept = period => {
    setExpenses(value => {
      const current = [...value, period]
      onChange(current)
      return current
    })
    close()
  }

  const onAddClick = () => {
    open()
  }

  return (
    <div>
      {expenses.map(expense => (
        <Expense {...expense} key={expense.name} />
      ))}
      <Button onClick={onAddClick}>Añadir Gasto</Button>
      <AddExpense onAccept={onAccept} onCancel={close} isVisible={isVisible} />
    </div>
  )
}

Expenses.propTypes = {
  onChange: PropTypes.func
}
export default Expenses
