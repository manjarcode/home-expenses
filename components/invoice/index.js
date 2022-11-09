import PropTypes from 'prop-types'

import InvoiceDetail from '../invoiceDetail/index.js'

export default function Invoice({invoice}) {
  return (
    <ul>
      {invoice.map(({name, total, expenses}) => {
        return (
          <li>
            {name} {total}€
            <InvoiceDetail expenses={expenses} />
          </li>
        )
      })}
    </ul>
  )
}

Invoice.propTypes = {
  invoice: PropTypes.arrayOf(PropTypes.object)
}
