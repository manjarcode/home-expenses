import {Box} from '@mui/material'

import styles from './marginBox.module.scss'

export default function MarginBox(props) {
  return <Box className={styles.container} {...props} />
}
