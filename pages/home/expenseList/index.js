import {useState} from 'react'

import PropTypes from 'prop-types'

import AddExpense from '../../../components/addExpense/index.js'
import ListCard from '../../../components/ListCard/index.js'
import useModal from '../../../hooks/useModal.js'

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
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Gastos</ListCard.Title>
        <ListCard.Action onClick={onAddClick}>Añadir</ListCard.Action>
      </ListCard.Header>
      <ListCard.List>
        {expenses.map(({name, ammount, period}) => (
          <ListCard.Item
            primary={<span>{`${name} - ${ammount}€`}</span>}
            secondary={period.toString()}
          ></ListCard.Item>
        ))}
      </ListCard.List>
      <AddExpense onAccept={onAccept} onCancel={close} isVisible={isVisible} />
    </ListCard>
  )
}

Expenses.propTypes = {
  onChange: PropTypes.func
}
export default Expenses
