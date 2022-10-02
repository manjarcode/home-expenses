import PropTypes from 'prop-types'

import './index.scss'

function Modal({isVisible, ...props}) {
  return (
    isVisible && (
      <>
        <div className="Modal-popover"></div>
        <div className="Modal-modal" {...props} />
      </>
    )
  )
}

const Title = props => <h2 className="Modal-title" {...props} />
const Content = props => <div {...props} />
const Footer = props => <div className="Modal-footer" {...props} />

Modal.propTypes = {
  isVisible: PropTypes.string
}

Modal.Title = Title
Modal.Content = Content
Modal.Footer = Footer

export default Modal
