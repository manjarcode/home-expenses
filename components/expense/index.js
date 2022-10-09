import PropTypes from 'prop-types'

import Period from '../period/index.js'

function Expense({name, period, ammount}) {
  return (
    <div>
      <div>{name}</div>
      <Period {...period} />
      <span> {ammount} €</span>
    </div>
  )
}

Expense.propTypes = {
  name: PropTypes.string,
  period: PropTypes.shape({
    from: PropTypes.date,
    to: PropTypes.date
  }),
  ammount: PropTypes.number
}
export default Expense
