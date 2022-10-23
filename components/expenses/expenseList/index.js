import {useState} from 'react'

import PropTypes from 'prop-types'

import useModal from '../../../hooks/useModal.js'
import AddExpense from '../../addExpense/index.js'
import ListCard from '../../ListCard/index.js'

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

  const hasExpenses = Array.isArray(expenses) && expenses.length > 0

  return (
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Gastos</ListCard.Title>
        <ListCard.Action onClick={onAddClick}>Añadir</ListCard.Action>
      </ListCard.Header>
      {hasExpenses && (
        <ListCard.List>
          {expenses.map(({name, ammount, period}) => (
            <ListCard.Item
              primary={<ExpenseItem name={name} ammount={ammount} />}
              secondary={period.toString()}
            ></ListCard.Item>
          ))}
        </ListCard.List>
      )}
      <AddExpense onAccept={onAccept} onCancel={close} isVisible={isVisible} />
    </ListCard>
  )
}

Expenses.propTypes = {
  onChange: PropTypes.func
}

const ExpenseItem = ({name, ammount}) => {
  return (
    <div className={styles.item}>
      <span>{name}:</span>
      <span>{ammount}€</span>
    </div>
  )
}
ExpenseItem.propTypes = {
  name: PropTypes.string,
  ammount: PropTypes.number
}

export default Expenses
