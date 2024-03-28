import PropTypes from 'prop-types'

import {Checkbox as MuiCheckbox, FormControlLabel} from '@mui/material'

export default function Checkbox({label, value, onChange}) {
  const changeHandler = e => {
    onChange(e.target.checked)
  }
  return <FormControlLabel control={<MuiCheckbox checked={value} onChange={changeHandler} />} label={label} />
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool
}
