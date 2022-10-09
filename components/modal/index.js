import PropTypes from 'prop-types'

import styles from './index.module.scss'

function Modal({isVisible, ...props}) {
  return (
    isVisible && (
      <>
        <div className={styles.popover}></div>
        <div className={styles.modal} {...props} />
      </>
    )
  )
}

const Title = props => <h2 className={styles.title} {...props} />
const Content = props => <div {...props} />
const Footer = props => <div className={styles.footer} {...props} />

Modal.propTypes = {
  isVisible: PropTypes.string
}

Modal.Title = Title
Modal.Content = Content
Modal.Footer = Footer

export default Modal
