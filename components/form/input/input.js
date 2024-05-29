import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'

function Input({label, onChange, ...props}) {
  const onInputChange = ev => {
    onChange(ev.target.value)
  }
  return (
    <>
      <TextField onChange={onInputChange} label={label} inputProps={props}></TextField>
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
