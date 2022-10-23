import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'
import {ListItemText} from '@mui/material'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import styles from './index.module.scss'

export default function ListCard(props) {
  return <div className={styles.container} {...props} />
}

const Header = props => <div className={styles.header} {...props} />
const Title = props => <h2 {...props} />
const Action = props => <Button startIcon={<AddIcon />} {...props} />
const StyledList = props => (
  <div className={styles.list}>
    <List {...props} />
  </div>
)
const Item = ({secondaryAction, ...props}) => (
  <ListItem secondaryAction={secondaryAction}>
    <ListItemText {...props} />
  </ListItem>
)

Item.propTypes = {
  secondaryAction: PropTypes.node
}
ListCard.Header = Header
ListCard.Title = Title
ListCard.Action = Action
ListCard.List = StyledList
ListCard.Item = Item
