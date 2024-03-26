import PropTypes from 'prop-types'

import DateCard from '../../date/index.js'

import styles from './index.module.scss'

export default function ExpenseCard({name, amount, period}) {
  const {from, to} = period
  return (
    <>
      <h2>Resumen del gasto</h2>
      <table className={styles.table}>
        <tr>
          <td>Gasto</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Importe</td>
          <td>{amount} €</td>
        </tr>
        <tr>
          <td>Fecha inicio</td>
          <td>
            <DateCard value={from} />
          </td>
        </tr>
        <tr>
          <td>Fecha fin</td>
          <td>
            <DateCard value={to} />
          </td>
        </tr>
      </table>
    </>
  )
}

ExpenseCard.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  period: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string
  })
}
