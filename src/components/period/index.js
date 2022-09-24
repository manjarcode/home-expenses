import PropTypes from 'prop-types'

import {CULTURE} from '../../config.js'

function Period({from, to}) {
  return (
    <span>
      {from.toLocaleDateString(CULTURE)} - {to.toLocaleDateString(CULTURE)}
    </span>
  )
}

Period.propTypes = {
  from: PropTypes.date,
  to: PropTypes.date
}

export default Period
