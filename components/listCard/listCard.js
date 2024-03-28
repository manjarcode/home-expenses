import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'
import {Box, ListItemText} from '@mui/material'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

import styles from './listCard.module.scss'

export default function ListCard(props) {
  return <Box className={styles.container} {...props} />
}

const Header = props => <div className={styles.header} {...props} />
const Title = props => <Typography variant="h5" {...props} />
const Action = props => <Button startIcon={<AddIcon />} {...props} />
const Toolbar = props => <Box {...props} />
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
ListCard.Toolbar = Toolbar
ListCard.List = StyledList
ListCard.Item = Item
