import PropTypes from 'prop-types'

import styles from './index.module.scss'

function Input({label, onChange, ...props}) {
  const onInputChange = ev => {
    onChange(ev.target.value)
  }
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        onChange={onInputChange}
        {...props}
      ></input>
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
