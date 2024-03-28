import cx from 'classnames'
import PropTypes from 'prop-types'

import {Box} from '@mui/material'

import styles from './formRow.module.scss'

export const gapSizes = {
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl'
}

export default function FormRow({isCentered, gapSize = gapSizes.m, ...props}) {
  const gapClassName = mapGapSize(gapSize)
  const className = cx(styles.container, gapClassName, {[styles.centered]: isCentered})
  return <Box className={className} {...props} />
}

function mapGapSize(gapSize) {
  const map = {
    [gapSizes.s]: styles.s,
    [gapSizes.m]: styles.m,
    [gapSizes.l]: styles.l,
    [gapSizes.xl]: styles.xl
  }

  return map[gapSize]
}

FormRow.propTypes = {
  gapSize: PropTypes.oneOf(Object.values(gapSizes)),
  isCentered: PropTypes.bool
}
