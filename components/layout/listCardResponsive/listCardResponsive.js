'use client'
import {useState} from 'react'

import PropTypes from 'prop-types'

import {Box} from '@mui/material'

import useDevice from '../../../hooks/useDevice.js'
import ListCard from '../listCard/listCard.js'

import styles from './listCardResponsive.module.scss'

export default function ListCardResponsive({title, action, onAction, children}) {
  const {isMobile} = useDevice()

  const [isSpread, setIsSpread] = useState(!isMobile)

  const handleTitleClick = () => {
    if (!isMobile) return
    setIsSpread(!isSpread)
  }

  return (
    <Box className={styles.container}>
      <ListCard.Header>
        <ListCard.Title onClick={handleTitleClick}>{title}</ListCard.Title>
        {action && <ListCard.Action onClick={onAction}>{action}</ListCard.Action>}
      </ListCard.Header>
      {isSpread && children}
    </Box>
  )
}

ListCardResponsive.List = ListCard.List
ListCardResponsive.Item = ListCard.Item

ListCardResponsive.propTypes = {
  title: PropTypes.string,
  action: PropTypes.string,
  onAction: PropTypes.func,
  children: PropTypes.node
}
