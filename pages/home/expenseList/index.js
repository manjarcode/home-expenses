import {useState} from 'react'

import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

import AddExpense from '../../../components/addExpense/index.js'
import Expense from '../../../components/expense/index.js'
import useModal from '../../../hooks/useModal.js'

import styles from './index.module.scss'

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Gastos</h2>
        <Button onClick={onAddClick} startIcon={<AddIcon />}>
          Añadir
        </Button>
      </div>
      {expenses.map(expense => (
        <Expense {...expense} key={expense.name} />
      ))}
      <AddExpense onAccept={onAccept} onCancel={close} isVisible={isVisible} />
    </div>
  )
}

Expenses.propTypes = {
  onChange: PropTypes.func
}
export default Expenses
