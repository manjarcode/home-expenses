import PropTypes from 'prop-types'

import useModal from '../../../hooks/useModal.js'
import ListCard from '../../ListCard/index.js'
import TextAmmount from '../../textAmmount/index.js'
import AddExpense from '../addExpense/index.js'

function Expenses({expenses, onExpenseAdded, onExpenseDeleted}) {
  const {isVisible, open, close} = useModal()

  const onAccept = expense => {
    onExpenseAdded(expense)
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
              primary={<TextAmmount name={name} ammount={ammount} />}
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
  expenses: PropTypes.array,
  onExpenseAdded: PropTypes.func,
  onExpenseDeleted: PropTypes.func
}

export default Expenses
