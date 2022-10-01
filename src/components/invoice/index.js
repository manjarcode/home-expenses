import PropTypes from 'prop-types'
export default function Invoice({invoice}) {
  return (
    <ul>
      {invoice.map(({name, total}) => {
        return (
          <li>
            {name} {total}
          </li>
        )
      })}
    </ul>
  )
}

Invoice.propTypes = {
  invoice: PropTypes.arrayOf(PropTypes.object)
}
