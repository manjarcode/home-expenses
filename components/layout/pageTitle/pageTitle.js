import styles from './pageTitle.module.scss'

export default function PageTitle(props) {
  return <h1 className={styles.container} {...props} />
}
