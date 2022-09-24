import PropTypes from 'prop-types'

import Period from '../period/index.js'

function Expense({name, period}) {
  return (
    <div>
      <div>{name}</div>
      <Period {...period} />
    </div>
  )
}

Expense.propTypes = {
  name: PropTypes.string,
  period: PropTypes.shape({
    from: PropTypes.date,
    to: PropTypes.date
  })
}
export default Expense
