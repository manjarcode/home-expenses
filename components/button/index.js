import styles from './index.module.scss'

export default function Button(props) {
  return <button className={styles.button} {...props}></button>
}
