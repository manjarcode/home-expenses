'use client'
import {useState} from 'react'

import PropTypes from 'prop-types'

import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Box} from '@mui/material'

import useDevice from '../../../hooks/useDevice.js'
import ListCard from '../listCard/listCard.js'

import styles from './listCardResponsive.module.scss'

export default function ListCardResponsive({title, action, onAction, children}) {
  const [isSpread, setIsSpread] = useState(true)

  const {isMobile} = useDevice(() => {
    setIsSpread(!isMobile)
  })

  const handleTitleClick = () => {
    if (!isMobile) return
    setIsSpread(!isSpread)
  }

  return (
    <Box className={styles.container}>
      <ListCard.Header>
        <ListCard.Title onClick={handleTitleClick}>{title}</ListCard.Title>
        {!isMobile && action && <ListCard.Action onClick={onAction}>{action}</ListCard.Action>}
        {isMobile && (
          <ListCard.Action
            onClick={handleTitleClick}
            startIcon={undefined}
            endIcon={isSpread ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          />
        )}
      </ListCard.Header>
      <Box className={!isSpread ? styles.hidden : undefined}>
        {children}
        {isMobile && (
          <ListCard.Toolbar>
            {action && <ListCard.Action onClick={onAction}>{action}</ListCard.Action>}
          </ListCard.Toolbar>
        )}
      </Box>
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
