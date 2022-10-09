import PropTypes from 'prop-types'

import Period from '../period/index.js'

import styles from './index.module.scss'

function Guest({name, period}) {
  return (
    <div className={styles.Guest}>
      <div>{name}</div>
      <Period {...period} />
    </div>
  )
}

Guest.propTypes = {
  name: PropTypes.string,
  period: PropTypes.string
}
export default Guest
